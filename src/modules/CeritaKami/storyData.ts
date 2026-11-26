import type { TranslationKey } from "@/src/data/dictionary";

export interface TimelineItem {
  id: string;
  dateKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

// Daftar topik dan urutan cerita placeholder untuk Banggai.
export const timeline: TimelineItem[] = [
  { id: "meet", dateKey: "stories.timeline.1.date", titleKey: "stories.timeline.1.title", descriptionKey: "stories.timeline.1.description" },
  { id: "plan", dateKey: "stories.timeline.2.date", titleKey: "stories.timeline.2.title", descriptionKey: "stories.timeline.2.description" },
  { id: "share", dateKey: "stories.timeline.3.date", titleKey: "stories.timeline.3.title", descriptionKey: "stories.timeline.3.description" },
  { id: "reflect", dateKey: "stories.timeline.4.date", titleKey: "stories.timeline.4.title", descriptionKey: "stories.timeline.4.description" },
];

export interface TeamMember {
  id: string;
  nameKey: TranslationKey;
  studyKey: TranslationKey;
  image: string;
  photoAltKey: TranslationKey;
}

// Kartu topik cerita memakai ilustrasi placeholder Banggai.
export const teamMembers: TeamMember[] = [
  { id: "member-01", nameKey: "stories.member.1.name", studyKey: "stories.member.1.study", image: "/images/gallery/perbukitan.svg", photoAltKey: "stories.member.photoAlt" },
  { id: "member-02", nameKey: "stories.member.2.name", studyKey: "stories.member.2.study", image: "/images/gallery/kampung.svg", photoAltKey: "stories.member.photoAlt" },
  { id: "member-03", nameKey: "stories.member.3.name", studyKey: "stories.member.3.study", image: "/images/gallery/terumbu.svg", photoAltKey: "stories.member.photoAlt" },
  { id: "member-04", nameKey: "stories.member.4.name", studyKey: "stories.member.4.study", image: "/images/gallery/perahu.svg", photoAltKey: "stories.member.photoAlt" },
  { id: "member-05", nameKey: "stories.member.5.name", studyKey: "stories.member.5.study", image: "/images/gallery/pesisir.svg", photoAltKey: "stories.member.photoAlt" },
  { id: "member-06", nameKey: "stories.member.6.name", studyKey: "stories.member.6.study", image: "/images/gallery/kampung.svg", photoAltKey: "stories.member.photoAlt" },
];

export interface FieldStory {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
  altKey: TranslationKey;
}

// Cerita dan ilustrasi masih berupa placeholder.
export const fieldStories: FieldStory[] = [
  { id: "coast", titleKey: "stories.story.1.title", descriptionKey: "stories.story.1.description", image: "/images/gallery/pesisir.svg", altKey: "home.gallery.alt.coast" },
  { id: "garden", titleKey: "stories.story.2.title", descriptionKey: "stories.story.2.description", image: "/images/gallery/hasil-kebun.svg", altKey: "home.gallery.alt.harvest" },
  { id: "collaboration", titleKey: "stories.story.3.title", descriptionKey: "stories.story.3.description", image: "/images/gallery/kampung.svg", altKey: "home.gallery.alt.village" },
];
