"use client";

import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { Sponsor } from "@/src/modules/Beranda/homeData";

export interface SponsorSectionProps {
  sponsors: Sponsor[];
  className?: string;
}

export function SponsorSection({ sponsors, className = "" }: SponsorSectionProps) {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="sponsors-title" className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t("home.sponsors.eyebrow")}</p>
          <h2 id="sponsors-title" className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {t("home.sponsors.title")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{t("home.sponsors.description")}</p>
          <p className="mt-3 text-xs leading-5 text-muted">{t("home.sponsors.note")}</p>
        </div>

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {sponsors.map((sponsor, index) => (
            <li key={sponsor.name}>
              <div className="flex min-h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-background px-3 py-5 text-center transition-colors hover:border-primary/40 hover:bg-primary-soft/35 sm:min-h-32">
                <span className={`grid size-12 place-items-center rounded-2xl text-xs font-black tracking-wide ${index % 2 === 0 ? "bg-primary-soft text-primary-deep" : "bg-accent-soft text-ink"}`}>
                  {sponsor.mark}
                </span>
                <span className="text-xs font-bold leading-5 text-ink sm:text-sm">{sponsor.nameKey ? t(sponsor.nameKey) : sponsor.name}</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted">{t(sponsor.typeKey)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
