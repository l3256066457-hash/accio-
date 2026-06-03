import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { company } from "@/data/company";
import { categories } from "@/data/categories";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-sand-200 bg-ivory-100 text-charcoal-700">
      <div className="hairline-brass" />
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-editorial border border-brass-300 bg-brass-sheen text-ivory-50 shadow-brass">
              <span className="font-display text-xl font-semibold leading-none">H</span>
            </span>
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight text-charcoal-900">
                Hehui
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-brass-600">
                Yangjiang · Guangdong · China
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-600">
            A {company.staff}-worker kitchenware atelier in China&rsquo;s
            cookware capital — quietly supplying Michelin kitchens, premium
            hospitality groups, and retail brands across 60+ countries since
            2008.
          </p>

          <ul className="mt-7 space-y-3 text-[14px]">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brass-500" />
              <span>{company.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brass-500" />
              <a
                href={`mailto:${company.contact.email}`}
                className="hover:text-brass-600"
              >
                {company.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brass-500" />
              <span>{company.contact.phone}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-eyebrow !text-brass-600">Categories</p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products?category=${c.slug}`}
                  className="text-charcoal-700 transition hover:text-brass-600"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-eyebrow !text-brass-600">Company</p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            <li><Link className="hover:text-brass-600" href="/about">About</Link></li>
            <li><Link className="hover:text-brass-600" href="/capabilities">Capabilities</Link></li>
            <li><Link className="hover:text-brass-600" href="/products">Products</Link></li>
            <li><Link className="hover:text-brass-600" href="/inquiry">RFQ List</Link></li>
            <li><Link className="hover:text-brass-600" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-eyebrow !text-brass-600">Trade Channels</p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-charcoal-700 hover:text-brass-600"
                href={company.contact.alibaba}
                target="_blank"
                rel="noreferrer"
              >
                Alibaba Store <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </li>
            <li className="text-charcoal-500">Direct Wholesale</li>
            <li className="text-charcoal-500">OEM / ODM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-200">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-[11px] uppercase tracking-[0.22em] text-charcoal-500 md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {company.name}
          </p>
          <p>Independently operated · Editorial trade portal</p>
        </div>
      </div>
    </footer>
  );
}
