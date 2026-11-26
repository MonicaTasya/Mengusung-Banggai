"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/src/data/siteConfig";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { Language } from "@/src/data/dictionary";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const languageButton = (value: Language, label: string) => (
    <button
      key={value}
      type="button"
      lang={value}
      aria-pressed={language === value}
      onClick={() => setLanguage(value)}
      className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
        language === value
          ? "bg-primary text-white"
          : "text-muted hover:bg-primary-soft hover:text-primary-deep"
      }`}
    >
      {value.toUpperCase()}
      <span className="sr-only"> — {label}</span>
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur ${className}`}
    >
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex min-w-0 items-center gap-3 rounded-lg text-ink focus-visible:outline-offset-4"
          aria-label={`${t("site.name")} — ${t("nav.home")}`}
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-sm transition-transform group-hover:-rotate-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="size-7"
              fill="none"
            >
              <path
                d="M4 19.5c3.2-3.2 6.4-3.2 9.6 0s6.4 3.2 9.6 0c1.7-1.7 3.4-2.5 5.1-2.4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M4 25c3.2-3.2 6.4-3.2 9.6 0s6.4 3.2 9.6 0c1.7-1.7 3.4-2.5 5.1-2.4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity=".7"
              />
              <path
                d="M16 4v9m0-9c-3.4 0-5.2 2-5.2 4.3 2.8.2 5.2-1 5.2-4.3Zm0 0c3.4 0 5.2 2 5.2 4.3-2.8.2-5.2-1-5.2-4.3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="truncate text-sm font-bold tracking-tight sm:text-base">
            {t("site.name")}
          </span>
        </Link>

        <nav
          aria-label={t("nav.primary")}
          className="hidden items-center gap-1 lg:flex"
        >
          {navigationLinks.map(({ href, labelKey }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-soft text-primary-deep"
                    : "text-muted hover:bg-background hover:text-ink"
                }`}
              >
                {t(labelKey)}
              </Link>
            );
          })}
        </nav>
        {/* 
        <div className="hidden items-center rounded-full border border-border bg-background p-1 lg:flex">
          {languageButton("id", t("language.indonesian"))}
          {languageButton("en", t("language.english"))}
        </div> */}

        <button
          type="button"
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-border text-ink transition-colors hover:bg-primary-soft focus-visible:outline-offset-2 lg:hidden"
        >
          <span className="sr-only">{t("nav.menu")}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? "block" : "hidden"} border-t border-border bg-white px-4 pb-5 pt-3 lg:hidden`}
      >
        <nav
          aria-label={t("nav.primary")}
          className="mx-auto grid max-w-7xl gap-1"
        >
          {navigationLinks.map(({ href, labelKey }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  active
                    ? "bg-primary-soft text-primary-deep"
                    : "text-text hover:bg-background"
                }`}
              >
                {t(labelKey)}
              </Link>
            );
          })}
          {/* <div className="mt-3 flex w-fit items-center rounded-full border border-border bg-background p-1">
            {languageButton("id", t("language.indonesian"))}
            {languageButton("en", t("language.english"))}
          </div> */}
        </nav>
      </div>
    </header>
  );
}
