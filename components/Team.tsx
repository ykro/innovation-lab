"use client";

import { useI18n } from "@/lib/i18n";
import { team } from "@/data/team";
import TeamCard from "./TeamCard";

export default function Team() {
  const { t } = useI18n();

  const director = team.find((m) => m.role === "director")!;
  const assistants = team.filter((m) => m.role === "assistant");

  return (
    <section
      id="equipo"
      className="relative border-b border-hairline bg-paper-deep px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-14 grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-14">
          <div className="meta flex items-baseline gap-3">
            <span>§ 05</span>
            <span className="h-px w-8 bg-navy/30" />
            <span>{t("team.overline")}</span>
          </div>
          <h2 className="display-soft text-[clamp(2.25rem,5.5vw,3.75rem)] text-navy">
            {t("team.title")}
          </h2>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-navy/50 tabular-nums">
            {String(team.length).padStart(2, "0")} {t("team.members")}
          </div>
        </header>

        <div className="reveal mb-14">
          <TeamCard member={director} featured index={0} />
        </div>

        <div className="reveal grid gap-6 md:grid-cols-2">
          {assistants.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
