import type { TranslationKey } from "@/src/data/dictionary";
import { focusVillages, villages } from "@/src/data/regionData";

export { focusVillages, villages };

export interface Sponsor {
  name: string;
  nameKey?: TranslationKey;
  mark: string;
  typeKey: TranslationKey;
}

// TODO: Ganti dengan sponsor/mitra resmi dan file logo yang telah mendapat izin.
export const sponsors: Sponsor[] = [
  { name: "Universitas Negeri Gorontalo", mark: "UNG", typeKey: "home.sponsors.type.university" },
  { name: "Kecamatan Sumalata Timur", mark: "SUMTIM", typeKey: "home.sponsors.type.district" },
  { name: "Pemerintah Desa", nameKey: "home.sponsors.name.villageGov", mark: "DESA", typeKey: "home.sponsors.type.village" },
  { name: "Karang Taruna", mark: "KT", typeKey: "home.sponsors.type.community" },
];

export interface GalleryItem {
  id: string;
  image: string;
  altKey: TranslationKey;
  titleKey: TranslationKey;
  captionKey: TranslationKey;
}

// TODO: Ganti ilustrasi dengan dokumentasi asli kegiatan dan lokasi KKN.
export const galleryItems: GalleryItem[] = [
  {
    id: "coast",
    image: "/images/gallery/pesisir.svg",
    altKey: "home.gallery.alt.coast",
    titleKey: "home.gallery.title.coast",
    captionKey: "home.gallery.caption.coast",
  },
  {
    id: "hills",
    image: "/images/gallery/perbukitan.svg",
    altKey: "home.gallery.alt.hills",
    titleKey: "home.gallery.title.hills",
    captionKey: "home.gallery.caption.hills",
  },
  {
    id: "boat",
    image: "/images/gallery/perahu.svg",
    altKey: "home.gallery.alt.boat",
    titleKey: "home.gallery.title.boat",
    captionKey: "home.gallery.caption.boat",
  },
  {
    id: "village",
    image: "/images/gallery/kampung.svg",
    altKey: "home.gallery.alt.village",
    titleKey: "home.gallery.title.village",
    captionKey: "home.gallery.caption.village",
  },
  {
    id: "reef",
    image: "/images/gallery/terumbu.svg",
    altKey: "home.gallery.alt.reef",
    titleKey: "home.gallery.title.reef",
    captionKey: "home.gallery.caption.reef",
  },
  {
    id: "harvest",
    image: "/images/gallery/hasil-kebun.svg",
    altKey: "home.gallery.alt.harvest",
    titleKey: "home.gallery.title.harvest",
    captionKey: "home.gallery.caption.harvest",
  },
];
