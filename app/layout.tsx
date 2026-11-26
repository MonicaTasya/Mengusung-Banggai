import type { Metadata } from "next";
import { LanguageProvider } from "@/src/components/Contexts/LanguageContext";
import { DefaultLayout } from "@/src/components/Layout/DefaultLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tinepo Gorontalo | Cerita Sumalata Timur",
    template: "%s | Tinepo Gorontalo",
  },
  description:
    "Profil tim KKN Tinepo Gorontalo dan cerita masyarakat, destinasi, serta produk lokal Sumalata Timur.",
  applicationName: "Tinepo Gorontalo",
  creator: "Tim KKN Tinepo Gorontalo",
  publisher: "Tinepo Gorontalo",
  keywords: [
    "Tinepo Gorontalo",
    "KKN Sumalata Timur",
    "Gorontalo Utara",
    "destinasi Gorontalo",
    "produk lokal Gorontalo",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Tinepo Gorontalo",
    title: "Tinepo Gorontalo | Cerita Sumalata Timur",
    description:
      "Profil tim KKN Tinepo Gorontalo dan cerita masyarakat, destinasi, serta produk lokal Sumalata Timur.",
  },
  twitter: {
    card: "summary",
    title: "Tinepo Gorontalo | Cerita Sumalata Timur",
    description:
      "Cerita pengabdian, destinasi, dan produk lokal Sumalata Timur, Gorontalo Utara.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
