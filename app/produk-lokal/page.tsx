import type { Metadata } from "next";
import ProdukLokalPage from "@/src/modules/ProdukLokal/page";

export const metadata: Metadata = {
  title: "Produk Lokal Banggai",
  description: "Jelajahi produk dan karya Banggai.",
  openGraph: {
    siteName: "Banggai, Banggai Laut",
    title: "Produk Lokal Banggai",
    description: "Jelajahi produk dan karya Banggai.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Produk Lokal Banggai",
    description: "Jelajahi produk dan karya Banggai.",
  },
};

export default function Page() {
  return <ProdukLokalPage />;
}
