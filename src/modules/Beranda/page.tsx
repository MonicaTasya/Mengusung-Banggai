import { GallerySection } from "@/src/modules/Beranda/GallerySection";
import { HeroSection } from "@/src/modules/Beranda/HeroSection";
import { ClosingSection, LocalSections } from "@/src/modules/Beranda/LocalSections";
import { galleryItems } from "@/src/modules/Beranda/homeData";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LocalSections />
      <GallerySection items={galleryItems} />
      <ClosingSection />
    </>
  );
}
