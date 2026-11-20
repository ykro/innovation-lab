"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  aiPolicyCopy,
  aiPolicyLevels,
  aiPolicyPillars,
  MIT_ADDENDUM_PDF,
  MIT_REPORT_URL,
  policyTracks,
  type PolicyTabId,
} from "@/data/ai-policy";
import { useI18n } from "@/lib/i18n";

const validTabs: PolicyTabId[] = ["lab", "sistemas", "pdds", "peit"];

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
  const searchParams = useSearchParams();
  const initialParam = searchParams.get("tab") as PolicyTabId | null;
  const initialTab: PolicyTabId =
    initialParam && validTabs.includes(initialParam) ? initialParam : "lab";

  const [activeTab, setActiveTab] = useState<PolicyTabId>(initialTab);
  const [copied, setCopied] = useState(false);

  const track =
    policyTracks.find((item) => item.id === activeTab) ?? policyTracks[0];

  function handleSelectTab(tabId: PolicyTabId) {
    setActiveTab(tabId);
    setCopied(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tabId);
      window.history.replaceState({}, "", url.toString());
    }
  }

  async function handleCopyTemplate() {
    try {
      await navigator.clipboard.writeText(track.readmeTemplate[locale]);
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
            <a
              href={MIT_ADDENDUM_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm"
            >
              {aiPolicyCopy.downloadAddendumButton[locale]} ↗
            </a>
          </div>

          <div className="mt-6">
            <h1 className="section-title">
              {aiPolicyCopy.pageHeading[locale]}
            </h1>
            <p className="mt-2 text-sm font-medium text-muted">
              {aiPolicyCopy.pageByline[locale]}
            </p>
          </div>

          {/* Pestañas integradas en el contenido, debajo del encabezado */}
          <div
            role="tablist"
            aria-label={aiPolicyCopy.tabsAriaLabel[locale]}
            className="mt-8 flex flex-wrap gap-2 border-b border-line pb-4"
          >
            {policyTracks.map((item) => {
              const isSelected = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => handleSelectTab(item.id)}
                  className={`min-h-11 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                    isSelected
                      ? "border-navy bg-navy text-surface"
                      : "border-line bg-surface text-navy hover:bg-sand"
                  }`}
                >
                  {item.tabLabel[locale]}
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${track.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${track.id}`}
            className="mt-8 space-y-8"
          >
            {/* Protocolo específico del ámbito seleccionado + descarga PDF */}
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    {track.title[locale]}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted">
                    {track.byline[locale]}
                  </p>
                </div>
                <a
                  href={track.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action action-primary shrink-0 text-sm"
                >
                  {aiPolicyCopy.downloadPdfButton[locale]}
                </a>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-navy">
                {track.protocolHeading[locale]}
              </h3>

              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink">
                {track.protocolParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph[locale]}</p>
                ))}
              </div>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-line bg-paper text-xs uppercase tracking-wider text-muted">
                      <th className="p-3.5 font-semibold sm:w-[32%]">
                        {track.tableHeaders.activity[locale]}
                      </th>
                      <th className="p-3.5 font-semibold sm:w-[20%]">
                        {track.tableHeaders.level[locale]}
                      </th>
                      <th className="p-3.5 font-semibold">
                        {track.tableHeaders.application[locale]}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {track.activities.map((row, idx) => (
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

              <p className="mt-8 text-base leading-relaxed text-ink">
                {track.readmeIntro[locale]}
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-line bg-paper">
                <div className="flex items-center justify-between border-b border-line bg-sand/70 px-4 py-2.5 text-xs">
                  <span className="font-mono font-semibold text-navy">
                    README.md
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyTemplate}
                    className="cursor-pointer rounded border border-navy/30 bg-surface px-2.5 py-1 font-mono text-xs font-semibold text-navy hover:bg-sand print:hidden"
                  >
                    {copied
                      ? aiPolicyCopy.copiedButton[locale]
                      : aiPolicyCopy.copyButton[locale]}
                  </button>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-navy whitespace-pre-wrap sm:text-sm">
                  {track.readmeTemplate[locale]}
                </pre>
              </div>
            </article>

            {/* Cinco pilares compartidos */}
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-navy">
                {aiPolicyCopy.pillarsHeading[locale]}
              </h2>

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
            </article>

            {/* Semáforo de 4 niveles de MIT + Referencia oficial */}
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-navy">
                  {aiPolicyCopy.mitHeading[locale]}
                </h2>
                <a
                  href={MIT_ADDENDUM_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-sm"
                >
                  {aiPolicyCopy.downloadAddendumButton[locale]} ↗
                </a>
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {aiPolicyCopy.mitIntro[locale]}
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

              <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
                {aiPolicyCopy.mitReferenceLabel[locale]} ·{" "}
                <a
                  href={MIT_REPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  aiandeducation.mit.edu/report
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
