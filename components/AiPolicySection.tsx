"use client";

import Link from "next/link";
import {
  aiPolicyCopy,
  aiPolicyPillars,
  policyTracks,
} from "@/data/ai-policy";
import { useI18n } from "@/lib/i18n";

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
            <h2 id="ai-policy-home-title" className="section-title">
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

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-sand px-5 py-4">
          <p className="max-w-xl text-sm leading-relaxed text-ink">
            {aiPolicyCopy.homeBottomNote[locale]}
          </p>
          <div className="flex flex-wrap gap-2">
            {policyTracks.map((track) => (
              <Link
                key={track.id}
                href={`/politica-ia?tab=${track.id}`}
                className="rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-paper"
              >
                {track.tabLabel[locale]} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
