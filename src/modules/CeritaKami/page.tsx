import { FieldStoriesSection } from "@/src/modules/CeritaKami/FieldStoriesSection";
import { StoryPageHeader } from "@/src/modules/CeritaKami/StoryPageHeader";
import { TeamProfileSection } from "@/src/modules/CeritaKami/TeamProfileSection";
import { TimelineSection } from "@/src/modules/CeritaKami/TimelineSection";
import { fieldStories, teamMembers, timeline } from "@/src/modules/CeritaKami/storyData";

export default function CeritaKamiPage() {
  return (
    <>
      <StoryPageHeader />
      <TeamProfileSection members={teamMembers} />
      <TimelineSection items={timeline} />
      <FieldStoriesSection stories={fieldStories} />
    </>
  );
}
