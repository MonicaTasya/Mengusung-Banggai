import type { Metadata } from "next";
import CeritaKamiPage from "@/src/modules/CeritaKami/page";

export const metadata: Metadata = {
  title: "Cerita Banggai",
  description: "Baca cerita tentang Banggai, tradisi, dan kehidupan kepulauan.",
  openGraph: {
    siteName: "Banggai, Banggai Laut",
    title: "Cerita Banggai",
    description: "Cerita tentang Banggai, tradisi, dan kehidupan kepulauan.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Cerita Banggai",
    description: "Baca cerita tentang Banggai, tradisi, dan kehidupan kepulauan.",
  },
};

export default function Page() {
  return <CeritaKamiPage />;
}
