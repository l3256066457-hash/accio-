"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useInquiry } from "./InquiryProvider";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count } = useInquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-sand-200 bg-ivory-50/85 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="grid h-10 w-10 place-items-center rounded-editorial border border-brass-300 bg-brass-sheen text-ivory-50 shadow-brass">
            <span className="font-display text-xl font-semibold leading-none">H</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-charcoal-900">
              Hehui
            </span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-brass-600">
              Kitchenware Atelier
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-[12px] font-medium uppercase tracking-[0.22em] transition relative",
                  active
                    ? "text-charcoal-900"
                    : "text-charcoal-500 hover:text-brass-600",
                ].join(" ")}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-6 bg-brass-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/inquiry"
            className="relative hidden items-center gap-2 rounded-editorial border border-charcoal-900/15 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-700 transition hover:border-brass-500 hover:text-brass-600 sm:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>RFQ List</span>
            {count > 0 && (
              <span className="ml-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-brass-500 px-1.5 text-[10px] font-bold text-ivory-50">
                {count}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary !px-5 !py-3"
          >
            Request Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-editorial border border-charcoal-900/15 text-charcoal-700 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-ivory-50 md:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-charcoal-700 hover:bg-ivory-100 hover:text-brass-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              className="flex items-center justify-between border-t border-sand-200 px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal-900 hover:bg-ivory-100"
            >
              <span className="inline-flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" /> RFQ List
              </span>
              {count > 0 && (
                <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-brass-500 px-1.5 text-[10px] font-bold text-ivory-50">
                  {count}
                </span>
              )}
            </Link>
            <Link href="/contact" className="mt-2 btn-primary justify-center">
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
