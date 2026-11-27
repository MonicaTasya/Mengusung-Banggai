import type { Metadata } from "next";
import HomePage from "@/src/modules/Beranda/page";

export const metadata: Metadata = {
  title: "Mengusung Banggai",
  description:
    "Jelajahi sejarah, tradisi, destinasi, dan kehidupan masyarakat Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah",
  openGraph: {
    siteName: "Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah",
    title: "Mengusung Banggai",
    description:
      "Jelajahi sejarah, tradisi, destinasi, dan kehidupan masyarakat Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Mengusung Banggai",
    description:
      "Jelajahi sejarah, tradisi, destinasi bahari, dan kehidupan masyarakat Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah.",
  },
};

export default function Page() {
  return <HomePage />;
}
