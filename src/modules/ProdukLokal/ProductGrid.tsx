"use client";

import Image from "next/image";
import { useLanguage } from "@/src/utils/hooks/useLanguage";
import type { LocalProduct } from "@/src/modules/ProdukLokal/productData";

export interface ProductGridProps {
  products: LocalProduct[];
  className?: string;
}

export function ProductGrid({ products, className = "" }: ProductGridProps) {
  const { t } = useLanguage();
  return (
    <section aria-label={t("products.title")} className={`bg-background py-10 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-start gap-3 rounded-2xl border border-accent/40 bg-accent-soft px-4 py-4 text-sm leading-6 text-ink sm:mb-10 sm:px-5">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>
          </svg>
          <p>{t("products.note")}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-leaf-soft">
                <Image src={product.image} alt={t(product.altKey)} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-primary-deep shadow-sm backdrop-blur-sm">{t("products.originLabel")}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-ink">{t(product.nameKey)}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{t(product.descriptionKey)}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-muted">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.8 8.4c0 4.7-6.8 9.1-6.8 9.1S3.2 13.1 3.2 8.4a6.8 6.8 0 1 1 13.6 0Z"/><circle cx="10" cy="8.3" r="2.1"/>
                  </svg>
                  {t("products.location")}
                </p>
                <p className="mt-5 rounded-xl bg-primary-soft/40 px-3 py-3 text-center text-xs font-semibold text-primary-deep">
                  {t("products.orderCta")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
