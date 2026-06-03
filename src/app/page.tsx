import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Cog,
  FileCheck2,
  FlaskConical,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Marquee } from "@/components/Marquee";

const capabilities = [
  {
    icon: FlaskConical,
    title: "In-house Tooling",
    desc: "Three injection-mould workshops handle plastic, silicone and metal parts under one roof.",
  },
  {
    icon: Cog,
    title: "5-Step Prototyping",
    desc: "From sketch to first sample in 14 days. 3D rendering, CAD, CNC pre-mould, T1 sample, pilot run.",
  },
  {
    icon: PackageCheck,
    title: "Mixed-Container Loading",
    desc: "Combine multiple SKUs in a single 20'/40'HQ container. We optimise carton plans for you.",
  },
  {
    icon: ShieldCheck,
    title: "In-line QC",
    desc: "AQL 2.5 sampling at three production stages. Final random inspection before container seal.",
  },
];

const oemSteps = [
  ["01", "Brief & Spec", "Share sketch, reference or RFQ — we respond in 24 h with feasibility & price band."],
  ["02", "3D Render", "Industrial designers deliver 3 concept renders within 5 working days."],
  ["03", "Tooling CAD", "Engineering-grade CAD ready for mould opening within 2 weeks."],
  ["04", "T1 Sample", "First production sample in 30 days; revisions until sign-off."],
  ["05", "Mass Production", "Pilot run, full QC, packaging and DDP shipping in 45–60 days."],
];

const compliance = [
  { code: "FDA", label: "Food Contact (US)" },
  { code: "LFGB", label: "Food Contact (EU)" },
  { code: "BSCI", label: "Social Compliance Audit" },
  { code: "SEDEX", label: "Ethical Sourcing" },
  { code: "ISO 9001", label: "Quality Management" },
  { code: "CE / RoHS", label: "Electrical Compliance" },
];

// Editorial Michelin-kitchen-style hero (warm tone, natural light)
const HERO_IMG =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2600&q=85";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ============ 1. EDITORIAL HERO — Michelin Kitchen, Natural Light ============ */}
      <section className="relative isolate overflow-hidden bg-ivory-50 text-charcoal-900">
        {/* Full-bleed editorial photograph */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Premium kitchen craftsmanship — Yangjiang Hehui"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Warm ivory veil — keeps the light, lifts the typography */}
          <div className="absolute inset-0 bg-hero-veil" />
          <div className="absolute inset-0 bg-bottom-fade md:hidden" />
        </div>

        <div className="container-x relative flex min-h-[92vh] items-end py-24 md:items-center md:py-32">
          {/* Floating editorial overlay — bottom-left on desktop */}
          <div className="w-full max-w-[680px] glass-panel p-9 md:p-12 animate-fade-up">
            <span className="label-eyebrow">
              Yangjiang Hehui · Est. 2008
            </span>

            <h1 className="mt-7 font-display text-[44px] font-medium leading-[1.04] tracking-[-0.012em] text-charcoal-900 sm:text-[58px] md:text-[68px] lg:text-[78px]">
              Kitchenware,
              <br />
              <span className="italic text-brass-600">made for the craft.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[16px] leading-[1.7] text-charcoal-700 md:text-[17px]">
              A 140-worker atelier in China&rsquo;s cookware capital, quietly
              supplying Michelin kitchens, hospitality groups and retail brands
              across 60+ countries with OEM, ODM and wholesale kitchenware.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/capabilities" className="btn-outline">
                The Atelier
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-sand-200 pt-7">
              <div>
                <p className="font-display text-3xl font-semibold text-charcoal-900">
                  140
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal-500">
                  Artisans
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-charcoal-900">
                  60+
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal-500">
                  Countries
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-charcoal-900">
                  1,200+
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal-500">
                  Active SKUs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial corner label */}
        <div className="pointer-events-none absolute bottom-6 right-6 hidden text-right text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory-50/70 drop-shadow-md md:block">
          Cookware · Drinkware · Storage · Silicone · Small Appliances
        </div>
      </section>

      {/* ============ 2. TRUST MARQUEE ============ */}
      <Marquee
        items={[
          "OEM / ODM Atelier",
          "FDA & LFGB Compliant",
          "BSCI & SEDEX Audited",
          "ISO 9001 Quality System",
          "Mixed Container Loading",
          "60+ Buyer Countries",
          "Trusted by Hospitality & Retail",
          "Carrefour · Walmart · AliExpress Supplier",
        ]}
      />

      {/* ============ 3. THE COLLECTION — Categories ============ */}
      <section className="section-y bg-ivory-50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-sand-200 pb-10">
            <div className="max-w-2xl">
              <span className="label-eyebrow">01 — The Collection</span>
              <h2 className="heading-section mt-5">
                Six disciplines.
                <br />
                <span className="italic text-brass-600">
                  One vertically integrated atelier.
                </span>
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brass-600 transition hover:text-brass-700"
            >
              View Full Catalogue <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. THE ATELIER — Manufacturing ============ */}
      <section className="relative section-y border-y border-sand-200 bg-ivory-100">
        <div className="container-x relative">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="label-eyebrow">02 — The Atelier</span>
              <h2 className="heading-section mt-5 text-balance">
                Built on three workshops,
                <br className="hidden md:block" />{" "}
                <span className="italic text-brass-600">not three middlemen.</span>
              </h2>
            </div>
            <p className="lead md:col-span-5">
              We control tooling, injection, assembly, decoration and quality —
              so we control price, lead time and consistency. No trader
              mark-ups, no surprise sub-contracting.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group card-feature p-7 transition hover:-translate-y-1 hover:shadow-editorial"
              >
                <span className="grid h-12 w-12 place-items-center rounded-editorial border border-brass-300 bg-ivory-50 text-brass-600 transition group-hover:bg-brass-500 group-hover:text-ivory-50 group-hover:border-brass-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-[22px] font-medium tracking-[-0.012em] text-charcoal-900">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brass-600 transition hover:text-brass-700"
            >
              Full Capability Sheet <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. WHOLESALE PICKS ============ */}
      <section className="section-y bg-ivory-50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-sand-200 pb-10">
            <div className="max-w-2xl">
              <span className="label-eyebrow">03 — Wholesale Picks</span>
              <h2 className="heading-section mt-5">
                What buyers reorder.
              </h2>
              <p className="lead mt-4">
                FOB prices, MOQ and lead time at a glance. Add to your RFQ list
                and request a quote in seconds.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brass-600 transition hover:text-brass-700"
            >
              See Full Catalogue <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. THE PROCESS — OEM / ODM ============ */}
      <section className="section-y bg-ivory-100">
        <div className="container-x">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="label-eyebrow">04 — The Process</span>
              <h2 className="heading-section mt-5 text-balance">
                From brief to first container
                <br className="hidden md:block" />{" "}
                <span className="italic text-brass-600">in 60 days.</span>
              </h2>
            </div>
            <p className="lead md:col-span-5">
              A predictable 5-step pipeline so your buyers, your warehouse and
              your finance team can plan around the same dates.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-5">
            {oemSteps.map(([n, title, desc]) => (
              <li
                key={n}
                className="card-feature p-7 relative overflow-hidden"
              >
                <span className="absolute -right-2 -top-2 font-display text-[88px] leading-none font-medium text-sand-200/70 select-none">
                  {n}
                </span>
                <p className="relative font-display text-2xl font-semibold text-brass-600">
                  {n}
                </p>
                <p className="relative mt-4 font-display text-[18px] font-medium tracking-[-0.01em] text-charcoal-900">
                  {title}
                </p>
                <p className="relative mt-3 text-[13.5px] leading-relaxed text-charcoal-600">
                  {desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/capabilities" className="btn-primary">
              See Full Process <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 7. COMPLIANCE ============ */}
      <section className="section-y bg-ivory-50">
        <div className="container-x">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="label-eyebrow">05 — Compliance</span>
              <h2 className="heading-section mt-5 text-balance">
                Audited, tested,
                <br />
                <span className="italic text-brass-600">ready for your shelf.</span>
              </h2>
              <p className="lead mt-6">
                Every container is backed by third-party audits and lab
                certificates — the paperwork your QA, customs broker and
                retail buyer expect from day one.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-charcoal-600">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="h-5 w-5 text-brass-500" />
                  <span>AQL 2.5 final inspection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-brass-500" />
                  <span>Drop-test &amp; load-test reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-brass-500" />
                  <span>Tooling kept for 5 years</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 sm:grid-cols-2 lg:grid-cols-3">
                {compliance.map((c) => (
                  <div
                    key={c.code}
                    className="bg-ivory-50 p-7 transition hover:bg-ivory-100"
                  >
                    <p className="font-display text-[28px] font-semibold tracking-[-0.012em] text-brass-600">
                      {c.code}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-charcoal-500">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. FINAL CTA — Editorial ============ */}
      <section className="relative overflow-hidden border-t border-sand-200 bg-ivory-100">
        <div className="absolute inset-0 bg-radial-spot opacity-90" />
        <div className="container-x relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-chip mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
              Ready to source direct
            </span>
            <h2 className="mt-7 font-display text-[44px] font-medium leading-[1.05] tracking-[-0.015em] text-charcoal-900 sm:text-[56px] md:text-[72px] text-balance">
              Skip the middleman.
              <br />
              <span className="italic text-brass-600">Talk to the atelier.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl lead">
              Send your spec, MOQ and target landed price. We reply within 24
              hours — same hands that engineer, mould and ship your order.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/inquiry" className="btn-outline">
                View My RFQ List
              </Link>
            </div>
            <p className="mt-10 text-[11px] uppercase tracking-[0.28em] text-charcoal-500">
              Direct factory · No marketplace fees · Reply in 24 h
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
