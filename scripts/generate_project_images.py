#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "google-genai>=0.8.0",
#   "Pillow>=10.0.0",
#   "python-dotenv>=1.0.0",
# ]
# ///
"""Generate hero illustrations for projects missing an image.

Usage:
    export GEMINI_API_KEY=...
    ./scripts/generate_project_images.py            # generate all
    ./scripts/generate_project_images.py --only id1,id2
    ./scripts/generate_project_images.py --dry-run  # print prompts only
    ./scripts/generate_project_images.py --force    # overwrite existing
"""

import argparse
import io
import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

MODEL = "gemini-3.1-flash-image-preview"

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images" / "projects"

STYLE = (
    "Minimalist technical illustration on warm cream paper background (#f8fafc, "
    "subtle paper texture, lab-notebook aesthetic). Single subject rendered in "
    "clean monochrome navy blue (#0A1F44) line art with light hatching for shadow. "
    "Centered composition with generous negative space. Square 1:1 aspect ratio. "
    "Engineering blueprint feel but warmer and human. No text, no labels, no logos, "
    "no UI chrome. Subject: "
)

# id -> short subject description
PROJECTS = {
    "fork-it": "three diverging arrows splitting from a single decision point, abstract branching tree, social decision metaphor",
    "prototipo-auditor-de-codigo": "magnifying glass hovering over stacked lines of code, with a small shield emblem suggesting security audit",
    "totito": "tic-tac-toe board viewed from a slightly tilted overhead angle, with a small camera lens above the board on a stand",
    "proyecto-camaleon": "stylized chameleon silhouette beside a small color sensor module connected to an LED strip",
    "comunicacion-obd2-con-vehiculo-mvp": "OBD2 connector plug with curling cable, leading toward a simplified car dashboard outline showing RPM gauge",
    "boton-iot": "single round physical push-button on a flat surface, with concentric sound-wave ripples emanating from it",
    "mini-bots": "row of three small wheeled robots of slightly different shapes, each with different sensors visible (ultrasonic, line-follower, IR)",
    "control-brazo-robotico-negro": "rectangular PCB board outline with an ESP32 chip and pin headers, wired to a six-axis robotic arm silhouette",
    "ar-para-colocacion-de-muebles": "smartphone held in a hand showing an armchair virtually placed within a simple room outline, AR scan grid on floor",
    "educador-personal": "central student figure surrounded by four small distinct agent icons orbiting around them, multi-agent learning",
    "prototipo-scout-de-mercado": "magnifying glass over a map pin with a small price tag dangling from it, retail discovery",
    "calendar": "stylized monthly calendar grid with a microphone icon overlaying one of the dates, speaker-interview scheduling",
    "monitor-de-ocupacion-de-escritorio": "empty office desk with chair seen from the side, with subtle motion-detection wave arcs and a PIR sensor module",
    "alerta-de-planta-seca": "small potted plant with a moisture sensor probe inserted in the soil and a tiny notification bell beside it",
    "sentiment-analysis-y-futbol": "soccer ball at the base, with three vertical bar-chart bars rising from it suggesting sentiment metrics",
}


def build_prompt(subject: str) -> str:
    return STYLE + subject


def generate(client: genai.Client, slug: str, subject: str, out_path: Path) -> bool:
    prompt = build_prompt(subject)
    print(f"  → calling {MODEL}...")
    resp = client.models.generate_content(
        model=MODEL,
        contents=[prompt],
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            image_config=types.ImageConfig(aspect_ratio="1:1"),
        ),
    )
    for cand in resp.candidates or []:
        for part in (cand.content.parts if cand.content else []) or []:
            inline = getattr(part, "inline_data", None)
            if inline and inline.data:
                img = Image.open(io.BytesIO(inline.data))
                img.save(out_path, format="PNG", optimize=True)
                print(f"  ✓ saved {out_path.relative_to(ROOT)} ({out_path.stat().st_size // 1024} KB)")
                return True
    print(f"  ✗ no image returned for {slug}", file=sys.stderr)
    return False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="comma-separated project ids to generate")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--force", action="store_true", help="overwrite existing")
    args = ap.parse_args()

    targets = list(PROJECTS.items())
    if args.only:
        wanted = {s.strip() for s in args.only.split(",")}
        targets = [(k, v) for k, v in targets if k in wanted]
        missing = wanted - {k for k, _ in targets}
        if missing:
            sys.exit(f"unknown ids: {', '.join(sorted(missing))}")

    if args.dry_run:
        for slug, subject in targets:
            print(f"\n── {slug} ──")
            print(build_prompt(subject))
        return

    load_dotenv(ROOT / ".env")
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("set GEMINI_API_KEY in .env (see .env.example)")

    client = genai.Client(api_key=api_key)
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    ok = fail = skip = 0
    for slug, subject in targets:
        out = OUT_DIR / f"{slug}.png"
        print(f"\n[{slug}]")
        if out.exists() and not args.force:
            print(f"  • exists, skipping ({out.relative_to(ROOT)})")
            skip += 1
            continue
        try:
            if generate(client, slug, subject, out):
                ok += 1
            else:
                fail += 1
        except Exception as e:  # noqa: BLE001
            print(f"  ✗ {type(e).__name__}: {e}", file=sys.stderr)
            fail += 1

    print(f"\ndone: {ok} generated, {skip} skipped, {fail} failed")


if __name__ == "__main__":
    main()
