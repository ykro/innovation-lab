"use client";

import { useState } from "react";
import Link from "next/link";
import {
  aiPolicyActivities,
  aiPolicyCopy,
  aiPolicyLevels,
  aiPolicyPillars,
  aiPolicyReadmeTemplate,
} from "@/data/ai-policy";
import { useI18n } from "@/lib/i18n";

const levelBorder: Record<string, string> = {
  l1: "border-l-[#0f766e]",
  l2: "border-l-[#b45309]",
  l3: "border-l-[#6d28d9]",
  l4: "border-l-[#be185d]",
};

const levelTagColor: Record<string, string> = {
  l1: "text-[#0f766e]",
  l2: "text-[#b45309]",
  l3: "text-[#6d28d9]",
  l4: "text-[#be185d]",
};

const levelBadgeStyle: Record<string, string> = {
  l1: "bg-[#e8f5f3] text-[#0f766e]",
  l2: "bg-[#fef3c7] text-[#b45309]",
  l3: "bg-[#f3e8ff] text-[#6d28d9]",
  l4: "bg-[#fce7f3] text-[#be185d]",
};

export default function AiPolicyPage() {
  const { locale, t } = useI18n();
  const [copied, setCopied] = useState(false);

  async function handleCopyTemplate() {
    try {
      await navigator.clipboard.writeText(aiPolicyReadmeTemplate[locale]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main id="main-content" className="flex-1" tabIndex={-1}>
      <section className="border-b border-line bg-paper">
        <div className="shell section-space">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="text-link text-sm">
              ← {t("projects.backHome")}
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="action cursor-pointer text-sm print:hidden"
            >
              {aiPolicyCopy.printButton[locale]}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-line border-t-8 border-t-accent bg-surface p-6 sm:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-accent-dark">
              {aiPolicyCopy.eyebrow[locale]}
            </p>
            <h1 className="section-title mt-2">
              {aiPolicyCopy.pageTitle[locale]}
            </h1>
            <p className="intro mt-4 text-ink">
              {aiPolicyCopy.pageSubtitle[locale]}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-4 text-sm text-muted">
              <span>
                <strong className="font-semibold text-navy">
                  {aiPolicyCopy.metaDirectionLabel[locale]}
                </strong>{" "}
                {aiPolicyCopy.metaDirectionValue[locale]}
              </span>
              <span>
                <strong className="font-semibold text-navy">
                  {aiPolicyCopy.metaScopeLabel[locale]}
                </strong>{" "}
                {aiPolicyCopy.metaScopeValue[locale]}
              </span>
            </div>
          </div>

          <article className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-navy">
              {aiPolicyCopy.pillarsHeading[locale]}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              {aiPolicyCopy.pillarsIntro[locale]}
            </p>

            <ol className="mt-6 space-y-3">
              {aiPolicyPillars.map((pillar) => (
                <li
                  key={pillar.number}
                  className="grid gap-2 rounded-xl border border-line bg-paper p-5 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
                >
                  <div className="text-base font-semibold text-navy">
                    <span className="mr-2 font-mono text-sm font-bold text-accent-dark">
                      {pillar.number}
                    </span>
                    {pillar.title[locale]}
                  </div>
                  <p className="text-sm leading-relaxed text-ink">
                    {pillar.detail[locale]}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-base leading-relaxed text-ink">
              {aiPolicyCopy.readmeIntro[locale]}
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-navy bg-navy text-surface">
              <div className="flex items-center justify-between border-b border-white/15 px-4 py-2.5 text-xs">
                <span className="font-mono font-semibold text-surface">
                  README.md
                </span>
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="cursor-pointer rounded border border-white/25 px-2.5 py-1 font-mono text-xs font-semibold text-surface hover:bg-white/10 print:hidden"
                >
                  {copied
                    ? aiPolicyCopy.copiedButton[locale]
                    : aiPolicyCopy.copyButton[locale]}
                </button>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed whitespace-pre-wrap sm:text-sm">
                {aiPolicyReadmeTemplate[locale]}
              </pre>
            </div>
          </article>

          <article className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-navy">
              {aiPolicyCopy.mitHeading[locale]}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              {aiPolicyCopy.mitIntro1[locale]}
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink">
              {aiPolicyCopy.mitIntro2[locale]}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {aiPolicyLevels.map((lvl) => (
                <div
                  key={lvl.id}
                  className={`flex flex-col gap-2 rounded-xl border border-line border-l-8 bg-paper p-5 ${levelBorder[lvl.id]}`}
                >
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wide ${levelTagColor[lvl.id]}`}
                  >
                    {lvl.tag[locale]}
                  </span>
                  <h3 className="text-lg font-semibold text-navy">
                    {lvl.title[locale]}
                  </h3>
                  <blockquote className="rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm italic text-navy">
                    {lvl.quote[locale]}
                  </blockquote>
                  <p className="text-sm leading-relaxed text-ink">
                    {lvl.note[locale]}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-navy">
              {aiPolicyCopy.protocolHeading[locale]}
            </h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink">
              {aiPolicyCopy.protocolParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph[locale]}</p>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-line bg-paper text-xs uppercase tracking-wider text-muted">
                    <th className="p-3.5 font-semibold sm:w-[32%]">
                      {aiPolicyCopy.tableHeaders.activity[locale]}
                    </th>
                    <th className="p-3.5 font-semibold sm:w-[22%]">
                      {aiPolicyCopy.tableHeaders.level[locale]}
                    </th>
                    <th className="p-3.5 font-semibold">
                      {aiPolicyCopy.tableHeaders.application[locale]}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {aiPolicyActivities.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-3.5 align-top font-semibold text-navy">
                        {row.activity[locale]}
                      </td>
                      <td className="p-3.5 align-top">
                        <span
                          className={`inline-block rounded-full px-3 py-1 font-mono text-xs font-bold whitespace-nowrap ${levelBadgeStyle[row.levelId]}`}
                        >
                          {row.levelBadge[locale]}
                        </span>
                      </td>
                      <td className="p-3.5 align-top leading-relaxed text-ink">
                        {row.application[locale]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-l-accent-dark bg-sand p-5">
              <h3 className="text-base font-semibold text-navy">
                {aiPolicyCopy.reciprocityTitle[locale]}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink">
                {aiPolicyCopy.reciprocityBody[locale]}
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
