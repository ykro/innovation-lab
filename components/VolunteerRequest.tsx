"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { volunteerTracks } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

const trackIcons: Record<string, ReactNode> = {
  "research-ed": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "software-dev": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 10l-2.5 2.5L8 15M16 10l2.5 2.5L16 15M13 9l-2 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "llms-slms": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.5 6h7M7.5 8l3.5 7.5M16.5 8L13 15.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  iax: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "low-level-ai": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "marketing-events": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M3 11l15-6v14L3 13v-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 14v4a2 2 0 0 0 2 2h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "ui-ux": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  makers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.7 3.7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function VolunteerRequest() {
  const { t, locale } = useI18n();
  const [selectedIds, setSelectedIds] = useState<string[]>(["software-dev"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggleTrack(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const chosenTitles = volunteerTracks
      .filter((track) => selectedIds.includes(track.id))
      .map((track) => track.title[locale])
      .join(", ");

    const subject = `${t("social.volunteerSubject")}${
      chosenTitles ? ` · ${chosenTitles}` : ""
    }`;
    const bodyLines = [
      `${t("volunteers.nameLabel")}: ${name}`,
      `${t("volunteers.emailLabel")}: ${email}`,
      career ? `${t("volunteers.careerLabel")}: ${career}` : "",
      `${t("volunteers.areasLabel")}: ${chosenTitles || "-"}`,
      "",
      message,
    ].filter(Boolean);

    window.location.href = `mailto:innovationlab@galileo.edu?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setSubmitted(true);
  }

  return (
    <section
      id="voluntariado"
      aria-labelledby="volunteers-title"
      className="border-b border-line bg-paper"
    >
      <div className="shell section-space">
        <h2 id="volunteers-title" className="section-title">
          {t("volunteers.title")}
        </h2>
        <p className="mt-3 text-base text-ink">{t("volunteers.selectHint")}</p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {volunteerTracks.map((track) => {
            const isSelected = selectedIds.includes(track.id);
            return (
              <li key={track.id} className="flex">
                <button
                  type="button"
                  onClick={() => toggleTrack(track.id)}
                  aria-pressed={isSelected}
                  className={`flex w-full cursor-pointer flex-col justify-between rounded-xl border p-5 text-left transition-colors ${
                    isSelected
                      ? "border-navy bg-sand/70 ring-1 ring-navy"
                      : "border-line bg-surface hover:border-navy"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        aria-hidden="true"
                        className={`inline-flex size-10 items-center justify-center rounded-lg border transition-colors ${
                          isSelected
                            ? "border-navy bg-navy text-white"
                            : "border-line bg-sand text-navy"
                        }`}
                      >
                        {trackIcons[track.id]}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          isSelected
                            ? "bg-navy text-white"
                            : "bg-sand text-muted"
                        }`}
                      >
                        {isSelected
                          ? `✓ ${t("volunteers.selectedBadge")}`
                          : t("volunteers.selectCard")}
                      </span>
                    </div>
                    <h3 className="mt-3.5 text-lg font-semibold leading-snug text-navy">
                      {track.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      {track.description[locale]}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-xl border border-line bg-surface p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-navy">
            {t("volunteers.formTitle")}
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="volunteer-name"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                {t("volunteers.nameLabel")}
              </label>
              <input
                id="volunteer-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("volunteers.namePlaceholder")}
                className="min-h-11 w-full rounded-md border border-control bg-paper px-3 text-sm text-ink placeholder:text-muted"
              />
            </div>

            <div>
              <label
                htmlFor="volunteer-email"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                {t("volunteers.emailLabel")}
              </label>
              <input
                id="volunteer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("volunteers.emailPlaceholder")}
                className="min-h-11 w-full rounded-md border border-control bg-paper px-3 text-sm text-ink placeholder:text-muted"
              />
            </div>

            <div>
              <label
                htmlFor="volunteer-career"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                {t("volunteers.careerLabel")}
              </label>
              <input
                id="volunteer-career"
                type="text"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                placeholder={t("volunteers.careerPlaceholder")}
                className="min-h-11 w-full rounded-md border border-control bg-paper px-3 text-sm text-ink placeholder:text-muted"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="volunteer-message"
              className="mb-1.5 block text-sm font-semibold text-navy"
            >
              {t("volunteers.messageLabel")}
            </label>
            <textarea
              id="volunteer-message"
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("volunteers.messagePlaceholder")}
              className="w-full rounded-md border border-control bg-paper p-3 text-sm text-ink placeholder:text-muted"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              <strong className="font-semibold text-navy">
                {t("volunteers.areasLabel")}:
              </strong>{" "}
              {selectedIds.length > 0
                ? volunteerTracks
                    .filter((item) => selectedIds.includes(item.id))
                    .map((item) => item.title[locale])
                    .join(" · ")
                : t("volunteers.noAreasSelected")}
            </p>
            <button type="submit" className="action action-primary cursor-pointer">
              {t("volunteers.submit")}
            </button>
          </div>

          {submitted && (
            <p className="mt-4 rounded-lg bg-sand px-4 py-3 text-sm font-medium text-navy">
              {t("volunteers.submittedNotice")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
