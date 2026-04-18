"use client";

import { useI18n } from "@/lib/i18n";
import { team } from "@/data/team";
import TeamCard from "./TeamCard";

export default function Team() {
  const { t } = useI18n();

  const director = team.find((m) => m.role === "director")!;
  const assistants = team.filter((m) => m.role === "assistant");

  return (
    <section id="equipo" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
          {t("team.title")}
        </h2>

        <TeamCard member={director} featured />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {assistants.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
