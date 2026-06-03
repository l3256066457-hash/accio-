import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Boxes,
  Palette,
  ScanLine,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { categories } from "@/data/categories";
import { AddToInquiry } from "@/components/AddToInquiry";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.title} — Hehui Wholesale`,
    description: product.shortDesc,
  };
}

const customizationOptions = [
  {
    icon: Palette,
    title: "Colour & Finish",
    desc: "Pantone matching, matte / glossy / brushed finishes, soft-touch coatings.",
  },
  {
    icon: ScanLine,
    title: "Logo Application",
    desc: "Silk-print, pad-print, laser engraving, hot-stamp, debossing on metal & silicone.",
  },
  {
    icon: Package,
    title: "Retail Packaging",
    desc: "Colour box, sleeve, blister, hangtag, gift set — full structural design support.",
  },
  {
    icon: Boxes,
    title: "Mixed Loading",
    desc: "Combine multiple SKUs in one 20'/40'HQ container with optimised carton plan.",
  },
];

const buyerScenarios = [
  {
    title: "Retail Chain",
    desc: "Private-label SKUs for supermarket and homeware chain buyers. EAN/UPC, retail packaging, planogram-ready.",
  },
  {
    title: "Wholesale Distributor",
    desc: "Bulk packs and mixed containers for regional distributors. Flexible MOQ on stock items.",
  },
  {
    title: "E-commerce Brand",
    desc: "Amazon / Shopify / TikTok Shop ready. FNSKU labelling, FBA-compliant cartons, photo-ready samples.",
  },
];

const qualityChecks = [
  "Incoming material inspection — food-grade certificates retained",
  "In-process check every 2 hours on each production line",
  "Pre-shipment AQL 2.5 random sampling (third-party welcome)",
  "Function, drop & load tests per category",
  "Container loading supervised and photographed",
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const specs: Array<[string, string]> = [
    ["MOQ", `${product.moq.toLocaleString()} pcs`],
    ["Lead Time", product.leadTime],
    ["Material", product.material],
    ["Packing", product.packing],
    ["Carton Qty", `${product.cartonQty} pcs/ctn`],
    ["Trade Terms", "EXW / FOB / CIF / DDP"],
    ["Payment", "T/T 30/70, L/C at sight, Trade Assurance"],
    ["Logo Options", "Silk-print, laser, hot-stamp, debossing"],
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-sand-200 bg-ivory-100">
        <div className="container-x flex items-center gap-3 py-5 text-[11px] uppercase tracking-[0.22em] text-charcoal-500">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 transition hover:text-brass-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Products
          </Link>
          <span className="text-sand-300">/</span>
          {category && (
            <>
              <Link
                href={`/products?category=${category.slug}`}
                className="transition hover:text-brass-600"
              >
                {category.name}
              </Link>
              <span className="text-sand-300">/</span>
            </>
          )}
          <span className="truncate text-charcoal-900">{product.title}</span>
        </div>
      </div>

      {/* ============ 1. PRODUCT HERO + RFQ CTA ============ */}
      <section className="relative overflow-hidden bg-ivory-50">
        <div className="container-x relative grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-sand-200 bg-ivory-100 shadow-editorial">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <span className="label-eyebrow">
              {category?.name ?? "Wholesale"}
            </span>

            {product.tags && product.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-editorial border border-brass-400/50 bg-ivory-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <h1 className="mt-5 font-display text-3xl font-medium leading-[1.1] tracking-[-0.012em] text-charcoal-900 sm:text-4xl md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-600">
              {product.longDesc}
            </p>

            <div className="mt-8 rounded-card border border-sand-200 bg-ivory-100 p-6 shadow-card">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                FOB Yangjiang · Wholesale Price Band
              </p>
              <p className="mt-2 font-display text-4xl font-medium text-charcoal-900">
                ${product.priceFrom.toFixed(2)}
                <span className="text-lg font-normal text-charcoal-500">
                  {" "}– ${product.priceTo.toFixed(2)}
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                Final price depends on volume, customisation and packaging.
                Add to your RFQ list — we reply within 24 hours.
              </p>
              <AddToInquiry product={product} />
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
              {[
                "Free sample on stock",
                "Custom logo & colour",
                "3rd-party QC welcome",
                "DDP / FBA shipping",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 rounded-editorial border border-sand-200 bg-ivory-50 px-3 py-2.5 text-charcoal-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-brass-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 2. KEY SPECIFICATIONS ============ */}
      <section className="section-y border-t border-sand-200 bg-ivory-100">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-sand-200 pb-8">
            <div>
              <span className="label-eyebrow">01 — Key Specifications</span>
              <h2 className="heading-section mt-5 text-charcoal-900">
                Engineering <span className="italic text-brass-600">data.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-charcoal-600">
              All values verified by factory engineers. Custom specs available
              on request — share your target and we&rsquo;ll quote.
            </p>
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 sm:grid-cols-2">
            {specs.map(([k, v]) => (
              <div
                key={k}
                className="flex items-start justify-between gap-6 bg-ivory-50 px-6 py-5"
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                  {k}
                </dt>
                <dd className="text-right text-sm text-charcoal-900">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ 3. CUSTOMIZATION OPTIONS ============ */}
      <section className="section-y bg-ivory-50">
        <div className="container-x">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="label-eyebrow">02 — Private Label</span>
              <h2 className="heading-section mt-5 text-balance text-charcoal-900">
                Make it yours
                <br className="hidden md:block" />{" "}
                <span className="italic text-brass-600">end to end.</span>
              </h2>
            </div>
            <p className="lead md:col-span-5">
              Tooling, decoration and retail packaging — all handled in-house.
              Send a sketch, a reference or a competitor link and we&rsquo;ll
              respond with feasibility plus indicative cost.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
            {customizationOptions.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-ivory-50 p-7 transition hover:bg-ivory-100"
              >
                <span className="grid h-12 w-12 place-items-center rounded-editorial border border-brass-400/50 bg-ivory-100 text-brass-600 transition group-hover:bg-brass-500 group-hover:text-ivory-50">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-charcoal-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. BUYER SCENARIOS ============ */}
      <section className="section-y border-y border-sand-200 bg-ivory-100">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="label-eyebrow">03 — Built For</span>
            <h2 className="heading-section mt-5 text-charcoal-900">
              Who reorders <span className="italic text-brass-600">this product.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 md:grid-cols-3">
            {buyerScenarios.map((s, i) => (
              <div key={s.title} className="bg-ivory-50 p-7">
                <p className="font-display text-3xl font-medium text-brass-500">
                  0{i + 1}.
                </p>
                <h3 className="mt-4 font-display text-xl font-medium text-charcoal-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. QUALITY CONTROL ============ */}
      <section className="section-y bg-ivory-50">
        <div className="container-x">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="label-eyebrow">04 — Quality Control</span>
              <h2 className="heading-section mt-5 text-balance text-charcoal-900">
                Every container leaves
                <br className="hidden md:block" />{" "}
                <span className="italic text-brass-600">with paperwork.</span>
              </h2>
              <p className="mt-6 lead">
                Material certificates, in-process records, AQL inspection
                reports and loading photos — sent before payment of the
                balance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-charcoal-600">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-brass-500" />
                  <span>FDA · LFGB compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-brass-500" />
                  <span>DDP / FBA shipping</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200">
                {qualityChecks.map((q, i) => (
                  <li
                    key={q}
                    className="flex items-start gap-4 bg-ivory-50 px-6 py-5"
                  >
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-brass-600">
                      0{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-charcoal-700">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. RELATED ============ */}
      {related.length > 0 && (
        <section className="section-y border-t border-sand-200 bg-ivory-100">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-sand-200 pb-8">
              <div>
                <span className="label-eyebrow">05 — Related</span>
                <h2 className="heading-section mt-5 text-charcoal-900">
                  More in <span className="italic text-brass-600">this category.</span>
                </h2>
              </div>
              <Link
                href={`/products${category ? `?category=${category.slug}` : ""}`}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brass-600 transition hover:text-brass-700"
              >
                View Category <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ 7. FINAL CTA ============ */}
      <section className="relative overflow-hidden border-t border-sand-200 bg-ivory-50">
        <div className="container-x relative py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-eyebrow mx-auto inline-block">
              Ready for samples
            </span>
            <h2 className="mt-7 font-display text-balance text-[44px] font-medium leading-[1.05] text-charcoal-900 sm:text-[56px]">
              Let&rsquo;s quote your
              <br />
              <span className="italic text-brass-600">{product.title}.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl lead">
              Share quantity, target landed price and any customisation —
              we&rsquo;ll come back with FOB and DDP options within 24 hours.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/inquiry" className="btn-outline">
                View My RFQ List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
