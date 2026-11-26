"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { Destination } from "@/src/modules/Destinasi/destinationData";

export interface DestinationDirectoryProps {
  destinations: Destination[];
  className?: string;
}

export function DestinationDirectory({ destinations, className = "" }: DestinationDirectoryProps) {
  const { t } = useLanguage();
  const [selectedArea, setSelectedArea] = useState("all");
  const areas = useMemo(() => [...new Set(destinations.map((destination) => destination.area))], [destinations]);
  const visibleDestinations = useMemo(
    () => selectedArea === "all"
      ? destinations
      : destinations.filter((destination) => destination.area === selectedArea),
    [destinations, selectedArea],
  );

  return (
    <section aria-label={t("destinations.title")} className={`bg-background py-10 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted">{t("destinations.directoryNote")}</p>
          <div className="w-full sm:max-w-xs">
            <label htmlFor="destination-area" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">
              {t("destinations.filterLabel")}
            </label>
            <select
              id="destination-area"
              value={selectedArea}
              onChange={(event) => setSelectedArea(event.currentTarget.value)}
              className="min-h-12 w-full appearance-none rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm focus-visible:outline-focus"
            >
              <option value="all">{t("destinations.allAreas")}</option>
              {areas.map((area) => <option key={area} value={area}>{area}</option>)}
            </select>
          </div>
        </div>

        {visibleDestinations.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleDestinations.map((destination) => (
              <article key={destination.id} className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary-soft">
                  <Image src={destination.image} alt={t(destination.altKey)} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-primary-deep shadow-sm backdrop-blur-sm">{t("destinations.category")}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="text-xl font-bold tracking-tight text-ink">{t("destinations.cardTitlePrefix")} {destination.area}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{t("destinations.cardDescription")}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary-deep">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16.8 8.4c0 4.7-6.8 9.1-6.8 9.1S3.2 13.1 3.2 8.4a6.8 6.8 0 1 1 13.6 0Z"/><circle cx="10" cy="8.3" r="2.1"/>
                    </svg>
                    {t("destinations.locationPrefix")} {destination.area}, {t("destinations.locationSuffix")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-white px-6 py-16 text-center">
            <h2 className="text-lg font-bold text-ink">{t("destinations.emptyTitle")}</h2>
            <p className="mt-2 text-sm text-muted">{t("destinations.emptyDescription")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
