import Image from "next/image";
import {
  Boxes,
  ClipboardCheck,
  Cog,
  Hammer,
  PencilRuler,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Capabilities — OEM/ODM Manufacturing",
  description:
    "End-to-end OEM/ODM manufacturing for kitchenware: design, tooling, injection, silicone, assembly, QC and global logistics.",
};

const CAP_HERO =
  "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=2400&q=85";

const steps = [
  {
    icon: PencilRuler,
    n: "01",
    title: "Design & Engineering",
    desc: "5 industrial designers + 2 structural engineers. Mood-board → 3D render in 5 days; tooling-ready CAD in 14 days.",
    bullets: [
      "Keyshot photoreal renders",
      "DFM (design for manufacturing) review",
      "Patent search & clearance support",
    ],
  },
  {
    icon: Hammer,
    n: "02",
    title: "Tooling",
    desc: "In-house mould shop + 3 audited partners. Steel grades 718H / S136 / NAK80 to match volume.",
    bullets: [
      "First shot in 25–35 days",
      "Tooling warranty up to 500K shots",
      "Buy-out or amortised pricing",
    ],
  },
  {
    icon: Cog,
    n: "03",
    title: "Production",
    desc: "8 plastic injection lines, 4 silicone vulcanising lines, dedicated small-appliance assembly cells.",
    bullets: [
      "Capacity 3.6M units / year",
      "Pantone-matched colour masterbatch",
      "PFOA-free non-stick coating partner",
    ],
  },
  {
    icon: ClipboardCheck,
    n: "04",
    title: "Quality Control",
    desc: "ISO 9001-aligned QC system. IQC on inbound material, IPQC on the line, OQC pre-shipment AQL 2.5 / 4.0.",
    bullets: [
      "FDA / LFGB / Prop-65 testing",
      "Drop, salt-spray, life-cycle testing",
      "Third-party (SGS / BV / Intertek) welcome",
    ],
  },
  {
    icon: Boxes,
    n: "05",
    title: "Packaging",
    desc: "Retail-ready packaging in 7 days. White-box, gift box, blister, header card, FSC-certified options.",
    bullets: [
      "Structural & graphic design service",
      "Amazon FNSKU labelling",
      "Walmart / Target / Costco compliance",
    ],
  },
  {
    icon: Truck,
    n: "06",
    title: "Logistics",
    desc: "Yantian and Shenzhen forwarders on retainer. EXW, FOB, CIF, DDP, FBA direct — your call.",
    bullets: [
      "DDP to US, EU, UK warehouses",
      "Amazon FBA partnered carriers",
      "Door-to-door tracking dashboard",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-sand-200 bg-ivory-50 text-charcoal-900">
        <div className="absolute inset-0">
          <Image
            src={CAP_HERO}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-50 via-ivory-50/85 to-ivory-50/30" />
        </div>
        <div className="container-x relative py-24 md:py-32">
          <span className="label-eyebrow">Capabilities · OEM / ODM</span>
          <h1 className="mt-7 font-display text-balance text-[44px] font-medium leading-[1.05] tracking-[-0.012em] text-charcoal-900 sm:text-[58px] md:text-[72px] max-w-4xl">
            From a sketch on a napkin
            <br />
            <span className="italic text-brass-600">
              to a container at your DC.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl lead">
            Six in-house stages, one accountable team. You talk to the same
            project manager from kickoff to delivery — no hand-offs, no
            broken-telephone briefs.
          </p>
        </div>
      </section>

      {/* STEPS GRID */}
      <section className="section-y bg-ivory-50">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <span className="label-eyebrow">The Six Stages</span>
            <h2 className="heading-section mt-5 text-charcoal-900">
              Six rooms, <span className="italic text-brass-600">one workshop.</span>
            </h2>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, n, title, desc, bullets }) => (
              <li
                key={title}
                className="group flex flex-col gap-4 bg-ivory-50 p-8 transition hover:bg-ivory-100"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-editorial border border-brass-400/50 bg-ivory-100 text-brass-600 transition group-hover:bg-brass-500 group-hover:text-ivory-50">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-medium text-brass-500">
                    {n}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium tracking-tight text-charcoal-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-600">
                  {desc}
                </p>
                <ul className="mt-2 space-y-2 border-t border-sand-200 pt-4 text-sm text-charcoal-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-brass-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-sand-200 bg-ivory-100">
        <div className="container-x relative py-24 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-eyebrow mx-auto inline-block">
              Have a project in mind?
            </span>
            <h2 className="mt-7 font-display text-balance text-[44px] font-medium leading-[1.05] text-charcoal-900 sm:text-[56px]">
              Tell us what you
              <br />
              <span className="italic text-brass-600">want to build.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl lead">
              Share your brief or reference photos. We&rsquo;ll respond within
              one working day with a feasibility note and indicative pricing —
              no spec sheet too rough.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="btn-outline">
                Browse Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
