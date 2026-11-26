"use client";

import { useLanguage } from "@/src/utils/hooks/useLanguage";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only z-[60] rounded-md bg-white px-4 py-3 text-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t("common.skipToContent")}
    </a>
  );
}
