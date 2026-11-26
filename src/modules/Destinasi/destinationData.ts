import type { TranslationKey } from "@/src/data/dictionary";

export interface Destination {
  id: string;
  area: string;
  image: string;
  altKey: TranslationKey;
}

// Daftar wilayah untuk placeholder direktori destinasi Banggai.
export const destinations: Destination[] = [
  { id: "dodung", area: "Dodung", image: "/images/gallery/pesisir.svg", altKey: "home.gallery.alt.coast" },
  { id: "lompio", area: "Lompio", image: "/images/gallery/perbukitan.svg", altKey: "home.gallery.alt.hills" },
  { id: "tano-bonunungan", area: "Tano Bonunungan", image: "/images/gallery/perahu.svg", altKey: "home.gallery.alt.boat" },
  { id: "dangkalan", area: "Dangkalan", image: "/images/gallery/kampung.svg", altKey: "home.gallery.alt.village" },
  { id: "kokini", area: "Kokini", image: "/images/gallery/pesisir.svg", altKey: "home.gallery.alt.coast" },
  { id: "lambako", area: "Lambako", image: "/images/gallery/hasil-kebun.svg", altKey: "home.gallery.alt.harvest" },
  { id: "lampa", area: "Lampa", image: "/images/gallery/kampung.svg", altKey: "home.gallery.alt.village" },
  { id: "pasir-putih", area: "Pasir Putih", image: "/images/gallery/terumbu.svg", altKey: "home.gallery.alt.reef" },
  { id: "potil-pololoba", area: "Potil Pololoba", image: "/images/gallery/perahu.svg", altKey: "home.gallery.alt.boat" },
  { id: "tinakin-laut", area: "Tinakin Laut", image: "/images/gallery/pesisir.svg", altKey: "home.gallery.alt.coast" },
];
