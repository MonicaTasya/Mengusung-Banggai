import type { Metadata } from "next";
import DestinasiPage from "@/src/modules/Destinasi/page";

export const metadata: Metadata = {
  title: "Destinasi Banggai",
  description:
    "Jelajahi Banggai dan temukan inspirasi perjalanan di sekitar Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah",
  openGraph: {
    siteName: "Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah",
    title: "Destinasi Banggai",
    description:
      "Jelajahi Banggai dan temukan inspirasi perjalanan di sekitar Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Destinasi Banggai",
    description:
      "Jelajahi Banggai dan temukan inspirasi perjalanan di sekitar Kecamatan Batui, Kabupaten Banggai, Sulawesi Tengah.",
  },
};

export default function Page() {
  return <DestinasiPage />;
}
