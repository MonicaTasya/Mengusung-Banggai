"use client";

import Link from "next/link";
import { useLanguage } from "@/src/utils/hooks/useLanguage";

export interface ErrorLayoutProps {
  variant: "not-found" | "error";
  onRetry?: () => void;
}

export function ErrorLayout({ variant, onRetry }: ErrorLayoutProps) {
  const { t } = useLanguage();
  const isNotFound = variant === "not-found";

  return (
    <section className="grid min-h-[55vh] place-items-center px-4 py-16 text-center sm:px-6">
      <div className="max-w-xl">
        <div aria-hidden="true" className="mx-auto mb-6 grid size-20 place-items-center rounded-full bg-primary-soft text-3xl font-bold text-primary-deep">
          {isNotFound ? "404" : "!"}
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Tinepo Gorontalo</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {isNotFound ? t("error.notFoundTitle") : t("error.genericTitle")}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          {isNotFound ? t("error.notFoundDescription") : t("error.genericDescription")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
            >
              {t("error.retry")}
            </button>
          )}
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary-soft"
          >
            {t("error.backHome")}
          </Link>
        </div>
      </div>
    </section>
  );
}
