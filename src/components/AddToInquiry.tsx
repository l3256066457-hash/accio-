"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { useInquiry } from "./InquiryProvider";
import type { Product } from "@/data/products";

export function AddToInquiry({ product }: { product: Product }) {
  const { add, items } = useInquiry();
  const router = useRouter();
  const [qty, setQty] = useState(product.moq);
  const [added, setAdded] = useState(false);
  const inList = items.some((i) => i.slug === product.slug);

  const onAdd = () => {
    add(
      { slug: product.slug, title: product.title, image: product.image },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const onAddAndGo = () => {
    add(
      { slug: product.slug, title: product.title, image: product.image },
      qty
    );
    router.push("/inquiry");
  };

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
      <div className="inline-flex items-center rounded-editorial border border-charcoal-900/15 bg-ivory-50">
        <button
          type="button"
          aria-label="Decrease"
          onClick={() => setQty((q) => Math.max(product.moq, q - 100))}
          className="grid h-12 w-12 place-items-center text-charcoal-500 hover:bg-ivory-100 hover:text-charcoal-900"
        >
          <Minus className="h-4 w-4" />
        </button>
        <input
          type="number"
          inputMode="numeric"
          min={product.moq}
          step={100}
          value={qty}
          onChange={(e) =>
            setQty(Math.max(product.moq, Number(e.target.value) || product.moq))
          }
          className="w-24 bg-transparent text-center text-sm font-semibold text-charcoal-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="Increase"
          onClick={() => setQty((q) => q + 100)}
          className="grid h-12 w-12 place-items-center text-charcoal-500 hover:bg-ivory-100 hover:text-charcoal-900"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button onClick={onAdd} className="btn-outline">
        {added || inList ? (
          <>
            <Check className="h-4 w-4 text-emerald-600" /> Added
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" /> Add to RFQ
          </>
        )}
      </button>
      <button onClick={onAddAndGo} className="btn-primary">
        Request Quote <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
