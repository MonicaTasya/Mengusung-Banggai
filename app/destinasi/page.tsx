import type { Metadata } from "next";
import DestinasiPage from "@/src/modules/Destinasi/page";

export const metadata: Metadata = {
  title: "Destinasi Banggai",
  description: "Jelajahi Banggai dan temukan inspirasi perjalanan di sekitar Banggai Laut.",
  openGraph: {
    siteName: "Banggai, Banggai Laut",
    title: "Destinasi Banggai",
    description: "Jelajahi Banggai dan temukan inspirasi perjalanan di sekitar Banggai Laut.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Destinasi Banggai",
    description: "Jelajahi Banggai dan temukan inspirasi perjalanan di sekitar Banggai Laut.",
  },
};

export default function Page() {
  return <DestinasiPage />;
}
