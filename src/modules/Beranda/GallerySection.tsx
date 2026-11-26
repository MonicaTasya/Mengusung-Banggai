"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { GalleryItem } from "@/src/modules/Beranda/homeData";

export interface GallerySectionProps {
  items: GalleryItem[];
  className?: string;
}

function GalleryArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`size-5 ${direction === "previous" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16m-7-7 7 7-7 7" />
    </svg>
  );
}

export function GallerySection({ items, className = "" }: GallerySectionProps) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];
  const isOpen = activeIndex !== null;

  const closeGallery = useCallback(() => {
    setActiveIndex(null);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const movePhoto = useCallback(
    (offset: number) => {
      setActiveIndex((current) => {
        if (current === null || items.length === 0) return current;
        return (current + offset + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") movePhoto(1);
      if (event.key === "ArrowLeft") movePhoto(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeGallery, movePhoto]);

  return (
    <section id="galeri" aria-labelledby="gallery-title" className={`scroll-mt-24 bg-background py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t("home.gallery.eyebrow")}</p>
            <h2 id="gallery-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t("home.gallery.title")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{t("home.gallery.description")}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{t("home.gallery.placeholderNote")}</p>
          </div>
          <Link href="/cerita-kami#galeri" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:border-primary/40 hover:bg-primary-soft">
            {t("home.gallery.viewAll")}
            <GalleryArrow direction="next" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`${t("home.gallery.openPhoto")}: ${t(item.titleKey)}`}
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              className={`group relative block w-full overflow-hidden rounded-2xl bg-secondary-soft text-left shadow-sm outline-none ring-offset-2 transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-focus ${
                index === 0 ? "aspect-[4/3] sm:col-span-2 sm:aspect-[8/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={t(item.altKey)}
                fill
                sizes={index === 0 ? "(max-width: 640px) 50vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-transparent opacity-75 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 text-white sm:p-5">
                <span>
                  <span className="block text-xs font-bold sm:text-sm">{t(item.titleKey)}</span>
                  <span className="mt-1 hidden text-xs text-white/80 sm:block">{t(item.captionKey)}</span>
                </span>
                <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-white/45 bg-ink/25 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="8.5" cy="8.5" r="5.5" />
                    <path d="m13 13 4 4M8.5 6v5m-2.5-2.5h5" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-3 backdrop-blur-sm sm:p-8">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            aria-describedby="lightbox-caption"
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;
              const focusable = event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled])");
              const first = focusable.item(0);
              const last = focusable.item(focusable.length - 1);
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
              }
            }}
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6">
              <div className="min-w-0">
                <h3 id="lightbox-title" className="truncate text-sm font-bold sm:text-base">{t(activeItem.titleKey)}</h3>
                <p className="mt-0.5 text-xs text-white/65">{activeIndex + 1} {t("home.gallery.photoOf")} {items.length}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label={t("home.gallery.closePhoto")}
                onClick={closeGallery}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-focus"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-ink">
              <div className="relative mx-auto aspect-[4/3] max-h-[72vh] w-full sm:aspect-[16/10]">
                <Image src={activeItem.image} alt={t(activeItem.altKey)} fill sizes="(max-width: 1024px) 100vw, 1024px" unoptimized className="object-contain" />
              </div>
              <button
                type="button"
                aria-label={t("home.gallery.previousPhoto")}
                onClick={() => movePhoto(-1)}
                className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-ink/65 text-white backdrop-blur transition-colors hover:bg-ink sm:left-4"
              >
                <GalleryArrow direction="previous" />
              </button>
              <button
                type="button"
                aria-label={t("home.gallery.nextPhoto")}
                onClick={() => movePhoto(1)}
                className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-ink/65 text-white backdrop-blur transition-colors hover:bg-ink sm:right-4"
              >
                <GalleryArrow direction="next" />
              </button>
            </div>
            <p id="lightbox-caption" className="px-4 py-3 text-center text-sm text-white/75 sm:px-6">{t(activeItem.captionKey)}</p>
          </section>
        </div>
      )}
    </section>
  );
}
