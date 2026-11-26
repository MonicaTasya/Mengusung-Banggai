"use client";

import Image from "next/image";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { FieldStory } from "@/src/modules/CeritaKami/storyData";

export interface FieldStoriesSectionProps {
  stories: FieldStory[];
  className?: string;
}

export function FieldStoriesSection({ stories, className = "" }: FieldStoriesSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="galeri" aria-labelledby="field-stories-title" className={`scroll-mt-24 bg-white py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t("stories.eyebrow")}</p>
          <h2 id="field-stories-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t("stories.documentationTitle")}</h2>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{t("stories.documentationDescription")}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((story, index) => (
            <article key={story.id} className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm shadow-ink/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary-soft">
                <Image src={story.image} alt={t(story.altKey)} fill sizes="(max-width: 768px) 100vw, 33vw" unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 grid size-9 place-items-center rounded-xl bg-white/90 text-xs font-black text-primary-deep shadow-sm">0{index + 1}</span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-ink">{t(story.titleKey)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{t(story.descriptionKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
