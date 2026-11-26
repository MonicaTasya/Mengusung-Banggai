"use client";

import { useLanguage } from "@/src/utils/hooks/useLanguage";

export function StoryPageHeader() {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden bg-secondary py-14 text-white sm:py-20">
      <div aria-hidden="true" className="absolute -right-16 -top-36 size-96 rounded-full border-[36px] border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-52 left-[45%] size-96 rounded-full border-[30px] border-accent/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">{t("stories.eyebrow")}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{t("stories.title")}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{t("stories.description")}</p>
      </div>
    </header>
  );
}
