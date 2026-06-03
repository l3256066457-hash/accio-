"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import { useState } from "react";
import { useInquiry } from "./InquiryProvider";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, items } = useInquiry();
  const inList = items.some((i) => i.slug === product.slug);
  const [justAdded, setJustAdded] = useState(false);

  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(
      { slug: product.slug, title: product.title, image: product.image },
      product.moq
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-card border border-sand-200 bg-ivory-50 shadow-card transition hover:border-brass-400 hover:shadow-editorial"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ivory-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-warm-haze" />
        {product.tags && product.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-editorial border border-ivory-50/70 bg-ivory-50/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-700 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={onAdd}
          aria-label="Add to RFQ"
          className={[
            "absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-editorial border transition",
            inList || justAdded
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-ivory-50/70 bg-ivory-50/85 text-charcoal-700 backdrop-blur hover:border-brass-500 hover:bg-brass-500 hover:text-ivory-50",
          ].join(" ")}
        >
          {inList || justAdded ? (
            <Check className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-[22px] font-medium leading-snug tracking-[-0.012em] text-charcoal-900">
          {product.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-charcoal-600 line-clamp-2">
          {product.shortDesc}
        </p>
        <div className="mt-auto flex items-end justify-between border-t border-sand-200 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-600">
              FOB Yangjiang
            </p>
            <p className="font-display text-[22px] font-semibold text-charcoal-900">
              ${product.priceFrom.toFixed(2)}
              <span className="text-sm font-normal text-charcoal-500">
                {" "}– ${product.priceTo.toFixed(2)}
              </span>
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
              MOQ {product.moq.toLocaleString()} · {product.leadTime}
            </p>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-editorial border border-charcoal-900/15 text-charcoal-700 transition group-hover:border-brass-500 group-hover:bg-brass-500 group-hover:text-ivory-50">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
