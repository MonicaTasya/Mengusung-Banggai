"use client";

import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { TimelineItem } from "@/src/modules/CeritaKami/storyData";

export interface TimelineSectionProps {
  items: TimelineItem[];
  className?: string;
}

export function TimelineSection({ items, className = "" }: TimelineSectionProps) {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="timeline-title" className={`bg-primary-soft/55 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t("stories.eyebrow")}</p>
          <h2 id="timeline-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t("stories.timelineTitle")}</h2>
          <p className="mt-4 text-sm leading-7 text-muted">{t("stories.timelineDescription")}</p>
        </div>

        <ol className="relative grid gap-7 before:absolute before:bottom-5 before:left-[13px] before:top-5 before:w-px before:bg-primary/20 sm:gap-8">
          {items.map((item, index) => (
            <li key={item.id} className="relative grid grid-cols-[28px_1fr] gap-4">
              <span aria-hidden="true" className={`relative z-10 mt-1 grid size-7 place-items-center rounded-full border-4 border-primary-soft text-[9px] font-black text-white ${index % 2 === 0 ? "bg-primary" : "bg-primary-deep"}`}>
                {index + 1}
              </span>
              <article className="rounded-2xl border border-white bg-white p-5 shadow-sm shadow-ink/5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{t(item.dateKey)}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{t(item.descriptionKey)}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
