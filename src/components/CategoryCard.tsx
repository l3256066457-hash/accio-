import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative block overflow-hidden rounded-card border border-sand-200 bg-ivory-50 text-charcoal-900 shadow-card transition hover:border-brass-400 hover:shadow-editorial"
    >
      <div className="relative aspect-[5/6] overflow-hidden">
        <Image
          src={category.cover}
          alt={category.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Soft warm gloss + bottom fade */}
        <div className="absolute inset-0 bg-warm-haze pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/15 to-transparent" />
        <div className="absolute inset-x-0 top-4 flex items-center justify-between px-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory-50 drop-shadow-sm">
            / Category
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-[26px] font-medium leading-tight tracking-[-0.012em] text-ivory-50">
            {category.name}
          </h3>
          <p className="mt-1.5 text-[13px] text-ivory-100/90 line-clamp-2">
            {category.blurb}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-editorial border border-ivory-50/60 bg-ivory-50/15 text-ivory-50 backdrop-blur transition group-hover:border-brass-300 group-hover:bg-brass-500 group-hover:text-ivory-50">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
