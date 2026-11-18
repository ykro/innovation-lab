"use client";

import Image from "next/image";
import type { LabPhoto } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

export default function LabPhotoFigure({ photo }: { photo: LabPhoto }) {
  const { t, locale } = useI18n();

  return (
    <figure className="min-w-0">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
        <Image
          src={photo.src}
          alt=""
          fill
          sizes="(min-width: 1200px) 520px, (min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-sm leading-relaxed text-muted">
        {photo.caption[locale]}{" "}
        <a href={photo.source} className="text-link">{t("media.credit")}</a>
      </figcaption>
    </figure>
  );
}
