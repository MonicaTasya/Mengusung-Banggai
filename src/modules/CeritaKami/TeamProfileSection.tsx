"use client";

import Image from "next/image";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { TeamMember } from "@/src/modules/CeritaKami/storyData";

export interface TeamProfileSectionProps {
  members: TeamMember[];
  className?: string;
}

export function TeamProfileSection({ members, className = "" }: TeamProfileSectionProps) {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="team-title" className={`bg-background py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t("stories.eyebrow")}</p>
            <h2 id="team-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t("stories.profileTitle")}</h2>
            <p className="mt-5 text-base leading-8 text-muted">{t("stories.profileDescription")}</p>
          </div>

          <div>
            <div className="mb-5 max-w-xl">
              <h3 className="text-xl font-bold text-ink">{t("stories.teamTitle")}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{t("stories.teamDescription")}</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {members.map((member, index) => (
                <li key={member.id}>
                  <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm shadow-ink/5">
                    <div className="relative aspect-[4/4.6] overflow-hidden bg-primary-soft">
                      <Image src={member.image} alt={t(member.photoAltKey)} fill sizes="(max-width: 640px) 50vw, 25vw" unoptimized className={`object-cover ${index % 2 === 0 ? "object-[50%_44%]" : "object-[50%_54%]"}`} />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-deep">{t("stories.teamMemberLabel")}</span>
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="text-sm font-bold leading-5 text-ink sm:text-base">{t(member.nameKey)}</h4>
                      <p className="mt-1 text-xs leading-5 text-muted">{t(member.studyKey)}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
