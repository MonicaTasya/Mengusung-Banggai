import type { Metadata } from "next";
import HomePage from "@/src/modules/Beranda/page";

export const metadata: Metadata = {
  title: "Mengusung Banggai",
  description:
    "Jelajahi sejarah, tradisi, destinasi bahari, dan kehidupan masyarakat Kecamatan Banggai, Banggai Laut.",
  openGraph: {
    siteName: "Banggai, Banggai Laut",
    title: "Mengusung Banggai",
    description:
      "Jelajahi sejarah, tradisi, destinasi bahari, dan kehidupan masyarakat Kecamatan Banggai, Banggai Laut.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Mengusung Banggai",
    description:
      "Jelajahi sejarah, tradisi, destinasi bahari, dan kehidupan masyarakat Kecamatan Banggai, Banggai Laut.",
  },
};

export default function Page() {
  return <HomePage />;
}
