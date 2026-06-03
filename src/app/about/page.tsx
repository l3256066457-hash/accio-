import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Globe2,
  Users,
  CalendarDays,
} from "lucide-react";
import { company } from "@/data/company";

export const metadata = {
  title: "About Hehui",
  description:
    "Hehui Kitchenware is a 140-staff manufacturer in Yangjiang — China's kitchenware capital. OEM/ODM partner for global brands.",
};

const ABOUT_HERO =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2400&q=85";

const timeline = [
  ["2009", "Founded as a single-line workshop in Yangjiang."],
  ["2014", "Opened in-house silicone vulcanising line."],
  ["2018", "Passed BSCI / SEDEX audits; first US chain account."],
  ["2021", "Direct export team launched — 12 countries in year one."],
  ["2024", "140 staff · serving buyers in 60+ countries."],
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-sand-200 bg-ivory-50 text-charcoal-900">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_HERO}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-50 via-ivory-50/80 to-ivory-50/20" />
        </div>
        <div className="container-x relative grid items-end gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <span className="label-eyebrow">About · Yangjiang Hehui</span>
            <h1 className="mt-7 font-display text-balance text-[44px] font-medium leading-[1.05] tracking-[-0.012em] text-charcoal-900 sm:text-[58px] md:text-[72px]">
              A family-run atelier
              <br />
              <span className="italic text-brass-600">
                with a {company.staff}-person craft team.
              </span>
            </h1>
          </div>
          <p className="lead md:col-span-5">
            Founded in {company.established}, Hehui has grown from a single
            workshop into a multi-line manufacturer shipping kitchenware to
            buyers in 60+ countries. We make tools we&rsquo;d use in our own
            kitchens.
          </p>
        </div>
      </section>

      {/* STORY + GALLERY */}
      <section className="section-y bg-ivory-50">
        <div className="container-x grid items-start gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-sand-200 bg-ivory-100 shadow-editorial">
              <Image
                src="https://images.unsplash.com/photo-1565939140869-3da27a04c92a?auto=format&fit=crop&w=1600&q=80"
                alt="Hehui factory"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-sand-200">
                <Image
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80"
                  alt="Assembly line"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-sand-200">
                <Image
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80"
                  alt="QC station"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <span className="label-eyebrow">Our Story</span>
            <h2 className="heading-section mt-5 text-balance text-charcoal-900">
              From Yangjiang —
              <br />
              <span className="italic text-brass-600">
                China&rsquo;s kitchenware capital.
              </span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-charcoal-700">
              <p>
                Yangjiang has been forging blades and shaping cookware for over
                1,400 years. We&rsquo;re the latest generation of makers in
                that lineage — but our edge comes from pairing old-school
                craftsmanship with modern injection moulding, silicone
                vulcanising and small-appliance assembly.
              </p>
              <p>
                We own our plastic and silicone moulding lines, partner
                tightly with audited metalwork shops nearby, and run our own
                in-house QC lab. That gives us the speed of a trading company
                with the accountability of a real factory.
              </p>
              <p>
                Today the team is {company.staff} people across design,
                tooling, production, QC, packaging and exports — supporting
                brands on Amazon, Walmart, Carrefour, AliExpress and DTC
                stores worldwide.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200">
              {[
                { icon: Building2, k: "12,000 m²", v: "Production area" },
                { icon: Users, k: `${company.staff}`, v: "Skilled staff" },
                { icon: Globe2, k: "60+", v: "Export countries" },
                { icon: Award, k: "ISO 9001", v: "Quality management" },
              ].map(({ icon: Icon, k, v }) => (
                <li key={v} className="bg-ivory-50 p-5">
                  <Icon className="h-5 w-5 text-brass-500" />
                  <p className="mt-3 font-display text-2xl font-medium text-charcoal-900">
                    {k}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-charcoal-500">
                    {v}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              href="/capabilities"
              className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brass-600 transition hover:text-brass-700"
            >
              Explore Our Capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-y border-t border-sand-200 bg-ivory-100">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-sand-200 pb-8">
            <div>
              <span className="label-eyebrow">Timeline</span>
              <h2 className="heading-section mt-5 text-charcoal-900">
                15 years, <span className="italic text-brass-600">one factory.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-charcoal-600">
              Built the slow way — line by line, audit by audit, container by
              container.
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map(([year, desc]) => (
              <li key={year} className="bg-ivory-50 p-7">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-brass-500" />
                  <p className="font-display text-3xl font-medium text-brass-600">
                    {year}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-sand-200 bg-ivory-50">
        <div className="container-x relative py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-[44px] font-medium leading-[1.05] text-charcoal-900 sm:text-[56px]">
              Want to <span className="italic text-brass-600">visit the factory?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl lead">
              We host buyer visits in Yangjiang year-round. Send us your dates
              and we&rsquo;ll arrange airport pickup and a full plant tour.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Plan a Visit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/capabilities" className="btn-outline">
                Capability Sheet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
