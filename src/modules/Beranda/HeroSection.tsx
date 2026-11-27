"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/src/utils/hooks/useLanguage";

export interface HeroSectionProps {
  image?: string;
  className?: string;
}

export function HeroSection({
  image = "/images/hero/hero-bg.jpg",
  className = "",
}: HeroSectionProps) {
  const { language } = useLanguage();
  const english = language === "en";

  return (
    <section
      aria-labelledby="home-hero-title"
      className={`relative isolate flex min-h-[590px] items-center overflow-hidden bg-ink sm:min-h-[660px] ${className}`}
    >
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/75 to-ink/25" />
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl text-white">
          <h1
            id="home-hero-title"
            className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {english
              ? "Banggai, a Gateway to Culture in the Sulawesi Sea"
              : "Mengusung Banggai"}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {english
              ? "From a hilltop palace to a harbor that never sleeps, Banggai District holds the history, traditions, and island warmth of the region."
              : "Pemberdayaan Ekonomi, Sosial, Budaya, dan Lingkungan Masyarakat Batui melalui Penguatan Kapasitas dan Hilirisasi Komoditas Unggulan Daerah"}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#budaya"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-ink/15 transition-transform hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              {english ? "Explore culture" : "Jelajahi budaya"}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 10h13M10.5 4l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="#destinasi"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              {english ? "See destinations" : "Lihat destinasi"}
            </Link>
            <Link
              href="#desa"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              {english ? "Meet the villages" : "Kenali desa"}
            </Link>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-1 left-0 right-0 h-7 rounded-t-[50%] bg-background"
      />
    </section>
  );
}
