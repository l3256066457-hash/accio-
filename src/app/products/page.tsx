"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const PRODUCTS_HERO =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2400&q=85";

function ProductsInner() {
  const search = useSearchParams();
  const router = useRouter();
  const categoryParam = search.get("category") ?? "all";
  const [active, setActive] = useState<string>(categoryParam);

  useEffect(() => {
    setActive(categoryParam);
  }, [categoryParam]);

  const visible = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const setCategory = (slug: string) => {
    setActive(slug);
    const next =
      slug === "all" ? "/products" : `/products?category=${slug}`;
    router.replace(next, { scroll: false });
  };

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-sand-200 bg-ivory-50 text-charcoal-900">
        <div className="absolute inset-0">
          <Image
            src={PRODUCTS_HERO}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-50 via-ivory-50/85 to-ivory-50/30" />
        </div>
        <div className="container-x relative py-24 md:py-32">
          <span className="label-eyebrow">Catalogue · Wholesale</span>
          <h1 className="mt-7 font-display text-[44px] font-medium leading-[1.05] tracking-[-0.012em] text-charcoal-900 sm:text-[58px] md:text-[72px] max-w-4xl text-balance">
            Everything we craft —
            <br />
            <span className="italic text-brass-600">under one roof.</span>
          </h1>
          <p className="mt-7 max-w-2xl lead">
            Browse 1,200+ active SKUs across six disciplines. Add anything to
            your RFQ list and we&rsquo;ll quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-ivory-50 pb-24">
        <div className="container-x">
          <div className="sticky top-16 z-20 -mx-5 mb-12 overflow-x-auto border-b border-sand-200 bg-ivory-50/92 px-5 py-4 backdrop-blur md:top-20">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCategory("all")}
                className={[
                  "shrink-0 rounded-editorial px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition",
                  active === "all"
                    ? "bg-brass-500 text-ivory-50 shadow-brass"
                    : "border border-charcoal-900/15 text-charcoal-600 hover:border-brass-400 hover:text-brass-600",
                ].join(" ")}
              >
                All ({products.length})
              </button>
              {categories.map((c) => {
                const count = products.filter(
                  (p) => p.category === c.slug
                ).length;
                const isActive = active === c.slug;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setCategory(c.slug)}
                    className={[
                      "shrink-0 rounded-editorial px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition",
                      isActive
                        ? "bg-brass-500 text-ivory-50 shadow-brass"
                        : "border border-charcoal-900/15 text-charcoal-600 hover:border-brass-400 hover:text-brass-600",
                    ].join(" ")}
                  >
                    {c.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {visible.length === 0 ? (
            <div className="rounded-card border border-dashed border-sand-300 bg-ivory-100 py-20 text-center">
              <p className="text-charcoal-500">
                No products in this category yet. New arrivals every week —
                check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="container-x py-20 text-charcoal-500">Loading…</div>
      }
    >
      <ProductsInner />
    </Suspense>
  );
}
