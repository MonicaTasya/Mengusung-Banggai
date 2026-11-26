import type { TranslationKey } from "@/src/data/dictionary";

export interface LocalProduct {
  id: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  altKey: TranslationKey;
  image: string;
}

// Kartu produk memakai ilustrasi dan konten placeholder Banggai.
export const localProducts: LocalProduct[] = [
  {
    id: "gula-aren",
    nameKey: "products.item.aren.title",
    descriptionKey: "products.item.aren.description",
    altKey: "products.item.aren.title",
    image: "/images/products/gula-aren.svg",
  },
  {
    id: "ikan-asap",
    nameKey: "products.item.fish.title",
    descriptionKey: "products.item.fish.description",
    altKey: "products.item.fish.title",
    image: "/images/products/ikan-asap.svg",
  },
  {
    id: "keripik-pisang",
    nameKey: "products.item.banana.title",
    descriptionKey: "products.item.banana.description",
    altKey: "products.item.banana.title",
    image: "/images/products/keripik-pisang.svg",
  },
  {
    id: "minyak-kelapa",
    nameKey: "products.item.coconut.title",
    descriptionKey: "products.item.coconut.description",
    altKey: "products.item.coconut.title",
    image: "/images/products/minyak-kelapa.svg",
  },
];
