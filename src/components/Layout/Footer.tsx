"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contactLinks, navigationLinks } from "@/src/data/siteConfig";
import { useLanguage } from "@/src/utils/hooks/useLanguage";

export interface FooterProps {
  className?: string;
}

function ContactIcon({ type }: { type: (typeof contactLinks)[number]["icon"] }) {
  const shared = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "size-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "email") {
    return <svg {...shared}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  }
  if (type === "phone") {
    return <svg {...shared}><path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-7-7l3-2-3-5Z" /></svg>;
  }
  return <svg {...shared}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></svg>;
}

export function Footer({ className = "" }: FooterProps) {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={`bg-ink text-white ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:gap-8 lg:px-8 lg:py-16">
        <section aria-labelledby="footer-about-title" className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-offset-4">
            <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-accent">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="size-7" fill="none">
                <path d="M4 19.5c3.2-3.2 6.4-3.2 9.6 0s6.4 3.2 9.6 0c1.7-1.7 3.4-2.5 5.1-2.4M4 25c3.2-3.2 6.4-3.2 9.6 0s6.4 3.2 9.6 0c1.7-1.7 3.4-2.5 5.1-2.4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M16 4v9m0-9c-3.4 0-5.2 2-5.2 4.3 2.8.2 5.2-1 5.2-4.3Zm0 0c3.4 0 5.2 2 5.2 4.3-2.8.2-5.2-1-5.2-4.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span id="footer-about-title" className="text-lg font-bold">{t("site.name")}</span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-white/70">{t("site.description")}</p>
          <p className="mt-3 text-sm text-white/60">{t("footer.location")}</p>
        </section>

        <nav aria-label={t("footer.navigation")}>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/60">{t("footer.navigation")}</h2>
          <ul className="mt-4 grid gap-3">
            {navigationLinks.map(({ href, labelKey }) => (
              <li key={href}>
                <Link className="inline-flex rounded-sm text-sm text-white/85 transition-colors hover:text-accent" href={href}>
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className="text-sm font-bold uppercase tracking-[0.16em] text-white/60">{t("footer.contact")}</h2>
          <ul className="mt-4 grid gap-3">
            {contactLinks.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  className="inline-flex min-h-10 items-center gap-3 rounded-lg px-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-accent focus-visible:outline-offset-2"
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noreferrer" : undefined}
                >
                  <ContactIcon type={icon} />
                  <span>{label}</span>
                  {href.startsWith("https://") && <span className="sr-only">({t("common.opensNewTab")})</span>}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/55 sm:px-6 lg:px-8">© {currentYear ?? ""} {t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
