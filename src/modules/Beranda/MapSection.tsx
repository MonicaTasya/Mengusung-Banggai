"use client";

import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { FocusVillage, Village } from "@/src/data/regionData";

export interface MapSectionProps {
  villages: Village[];
  highlights: FocusVillage[];
  mapSlot?: ReactNode;
  className?: string;
}

function AreaIllustration({ villages }: { villages: Village[] }) {
  const { t } = useLanguage();

  return (
    <div className="relative aspect-[5/4] min-h-72 overflow-hidden rounded-3xl border border-border bg-secondary-soft sm:aspect-[16/10]">
      <svg
        aria-hidden="true"
        viewBox="0 0 640 440"
        className="absolute inset-0 size-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="640" height="440" fill="var(--tinepo-secondary-soft)" />
        <path d="M0 82c79-21 130 14 200 1 77-15 108-58 188-39 66 15 93 58 142 51 43-6 67-32 110-24v369H0Z" fill="var(--tinepo-ocean)" />
        <path d="M0 127c70-20 139 15 206 4 76-13 114-49 182-34 66 15 88 61 142 54 42-5 69-30 110-22v311H0Z" fill="var(--tinepo-leaf-soft)" />
        <path d="M0 151c82-17 135 17 208 7 74-10 113-44 179-30 65 14 91 58 144 52 46-5 69-28 109-21v281H0Z" fill="var(--tinepo-primary-soft)" />
        <path d="M0 197c75-11 130 16 201 7 67-8 111-39 170-27 61 13 83 54 139 50 49-4 82-29 130-21v234H0Z" fill="var(--tinepo-leaf-soft)" />
        <path d="M0 298c94-25 147-13 222 1 71 13 138 5 194-11 73-21 142-14 224 5v147H0Z" fill="var(--tinepo-sand)" />
        <path d="M0 338c105-16 184-8 268 6 74 13 140 0 205-12 64-12 111-9 167 3v105H0Z" fill="var(--tinepo-ocean)" />
        <path d="M0 369c103-13 173-7 260 7 75 12 141 4 208-7 61-10 117-8 172 2v69H0Z" fill="var(--tinepo-secondary)" />
        <path d="M0 400c116-10 183 0 267 12 76 11 141 2 216-7 62-8 111-7 157 0v35H0Z" fill="var(--tinepo-primary-deep)" />
        <path d="M70 175c70 18 133 24 198 3m73-29c68-10 112 2 160 24m-376 87c72-15 133-9 203 5m69-12c69-18 127-15 181 0" fill="none" stroke="var(--tinepo-white)" strokeWidth="5" strokeLinecap="round" opacity=".72" />
      </svg>
      {villages.map((village, index) => {
        const style: CSSProperties = {
          left: `${village.x}%`,
          top: `${village.y}%`,
        };
        return (
          <span
            key={village.name}
            role="img"
            title={village.name}
            aria-label={`${index + 1}. ${village.name}${village.focus ? ` — ${t("home.region.focusLabel")}` : ""}`}
            className={`absolute z-10 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white font-bold text-white shadow-md ${
              village.focus
                ? "size-9 bg-primary text-xs ring-4 ring-accent/60 sm:size-10"
                : "size-7 bg-secondary text-[10px] sm:size-8"
            }`}
            style={style}
          >
            {index + 1}
          </span>
        );
      })}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl border border-white/70 bg-white/90 px-3 py-2 text-[11px] font-semibold text-ink shadow-sm backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:px-4 sm:py-3 sm:text-xs">
        <span>{t("home.region.mapCaption")}</span>
        <span className="inline-flex shrink-0 items-center gap-2">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-primary ring-2 ring-accent/70" />
          {t("home.region.focusLabel")}
        </span>
      </div>
    </div>
  );
}

export function MapSection({
  villages,
  highlights,
  mapSlot,
  className = "",
}: MapSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="wilayah" aria-labelledby="region-title" className={`scroll-mt-24 bg-background py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t("home.region.eyebrow")}</p>
          <h2 id="region-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t("home.region.title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{t("home.region.description")}</p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
          <div role="group" aria-label={t("home.region.mapTitle")}>
            {mapSlot ?? <AreaIllustration villages={villages} />}
          </div>

          <div>
            <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">{t("home.region.villagesLabel")}</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-primary">{villages.length}<span className="ml-2 text-base font-semibold text-muted">{t("home.region.villageUnit")}</span></p>
              </div>
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-medium text-muted">
                <span aria-hidden="true" className="size-3 rounded-full bg-primary ring-2 ring-accent/70" />
                {t("home.region.focusLabel")}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {highlights.map((village) => (
                <article key={village.name} className="rounded-2xl border border-border bg-white p-5 shadow-sm shadow-ink/5">
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-2.5 rounded-full bg-accent" />
                    <h3 className="text-lg font-bold text-ink">{village.name}</h3>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-primary-soft/70 p-3">
                      <dt className="text-[11px] font-medium leading-4 text-muted">{t("home.region.areaLabel")}</dt>
                      <dd className="mt-1 text-lg font-bold text-primary-deep">{village.area.toFixed(2)} <span className="text-xs font-semibold">km²</span></dd>
                    </div>
                    <div className="rounded-xl bg-accent-soft p-3">
                      <dt className="text-[11px] font-medium leading-4 text-muted">{t("home.region.shareLabel")}</dt>
                      <dd className="mt-1 text-lg font-bold text-ink">{village.percentage.toFixed(2)}%</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">{t("home.region.focusNote")}</p>

            <ul aria-label={t("home.region.villagesLabel")} className="mt-5 flex flex-wrap gap-2">
              {villages.map((village) => (
                <li key={village.name} className={`rounded-full px-3 py-1.5 text-xs font-medium ${village.focus ? "bg-primary text-white" : "bg-white text-muted ring-1 ring-border"}`}>
                  {village.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
