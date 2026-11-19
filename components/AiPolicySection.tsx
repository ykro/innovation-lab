"use client";

import Link from "next/link";
import {
  aiPolicyCopy,
  aiPolicyLevels,
  aiPolicyPillars,
} from "@/data/ai-policy";
import { useI18n } from "@/lib/i18n";

const levelAccent: Record<string, string> = {
  l1: "border-l-[#0f766e]",
  l2: "border-l-[#b45309]",
  l3: "border-l-[#6d28d9]",
  l4: "border-l-[#be185d]",
};

export default function AiPolicySection() {
  const { locale } = useI18n();

  return (
    <section
      id="politica-ia"
      aria-labelledby="ai-policy-home-title"
      className="border-b border-line bg-surface"
    >
      <div className="shell section-space">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              {aiPolicyCopy.eyebrow[locale]}
            </p>
            <h2 id="ai-policy-home-title" className="section-title mt-2">
              {aiPolicyCopy.homeTitle[locale]}
            </h2>
            <p className="intro mt-4 text-ink">
              {aiPolicyCopy.homeIntro[locale]}
            </p>
          </div>
          <Link href="/politica-ia" className="action action-primary shrink-0">
            <span>{aiPolicyCopy.homeCta[locale]}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aiPolicyPillars.map((pillar) => (
            <li
              key={pillar.number}
              className="flex flex-col rounded-xl border border-line bg-paper p-5"
            >
              <span className="font-mono text-xs font-bold text-accent-dark">
                {pillar.number}
              </span>
              <h3 className="mt-1.5 text-base font-semibold leading-snug text-navy">
                {pillar.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {pillar.summary[locale]}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aiPolicyLevels.map((lvl) => (
            <div
              key={lvl.id}
              className={`rounded-lg border border-line border-l-4 bg-sand/50 px-4 py-3 ${levelAccent[lvl.id]}`}
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-wide text-navy">
                {lvl.tag[locale]}
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">
                {lvl.title[locale]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-sand px-5 py-4">
          <p className="max-w-3xl text-sm leading-relaxed text-ink">
            {aiPolicyCopy.homeHardwareNote[locale]}
          </p>
          <Link href="/politica-ia" className="text-link shrink-0 text-sm">
            {aiPolicyCopy.homeCta[locale]} →
          </Link>
        </div>
      </div>
    </section>
  );
}
