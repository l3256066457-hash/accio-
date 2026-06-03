"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { useInquiry } from "@/components/InquiryProvider";

export default function InquiryPage() {
  const { items, remove, setQty, clear } = useInquiry();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle"
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, items }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      clear();
    } catch {
      setStatus("err");
    }
  };

  if (status === "ok") {
    return (
      <section className="container-x py-28">
        <div className="mx-auto max-w-xl rounded-card border border-emerald-500/30 bg-emerald-50 p-12 text-center shadow-card">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
          <h1 className="mt-5 font-display text-3xl font-medium text-charcoal-900">
            Inquiry <span className="italic text-brass-600">received.</span>
          </h1>
          <p className="mt-3 text-sm text-charcoal-600">
            Thank you. A specialist will email you within one working day at{" "}
            <strong className="text-brass-600">
              {form.email || "the address you provided"}
            </strong>
            .
          </p>
          <Link href="/products" className="btn-primary mt-8">
            Back to Catalogue
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-sand-200 bg-ivory-50 text-charcoal-900">
        <div className="container-x relative py-16 md:py-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal-500 transition hover:text-brass-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Keep Browsing
          </Link>
          <h1 className="mt-6 font-display text-balance text-[44px] font-medium leading-[1.05] tracking-[-0.012em] text-charcoal-900 sm:text-[58px] md:text-[68px]">
            Your <span className="italic text-brass-600">RFQ List.</span>
          </h1>
          <p className="mt-5 max-w-2xl lead">
            Send your selection in one batch. We quote within 24 hours
            (Monday–Saturday, GMT+8).
          </p>
        </div>
      </section>

      <section className="section-y bg-ivory-50">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="label-eyebrow">
              {items.length === 0
                ? "Empty"
                : `${items.length} ${items.length === 1 ? "Item" : "Items"}`}
            </span>
            <h2 className="heading-section mt-5 text-charcoal-900">
              Selected <span className="italic text-brass-600">items</span>
            </h2>

            {items.length === 0 ? (
              <div className="mt-10 rounded-card border border-dashed border-sand-300 bg-ivory-100 py-20 text-center">
                <p className="text-charcoal-500">
                  Your RFQ list is empty.{" "}
                  <Link
                    href="/products"
                    className="text-brass-600 underline transition hover:text-brass-700"
                  >
                    Browse products
                  </Link>{" "}
                  and tap the + button on any card.
                </p>
              </div>
            ) : (
              <ul className="mt-10 space-y-3">
                {items.map((item) => (
                  <li
                    key={item.slug}
                    className="flex items-center gap-4 rounded-card border border-sand-200 bg-ivory-100 p-4 transition hover:border-brass-400 hover:shadow-card"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-editorial border border-sand-200 bg-ivory-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/products/${item.slug}`}
                        className="line-clamp-2 font-display text-base font-medium text-charcoal-900 transition hover:text-brass-600"
                      >
                        {item.title}
                      </Link>
                      <div className="mt-3 inline-flex items-center rounded-editorial border border-sand-300 bg-ivory-50">
                        <button
                          onClick={() =>
                            setQty(item.slug, Math.max(1, item.qty - 100))
                          }
                          className="grid h-9 w-9 place-items-center text-charcoal-500 hover:bg-sand-100 hover:text-charcoal-900"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) =>
                            setQty(item.slug, Number(e.target.value) || 1)
                          }
                          className="w-20 bg-transparent text-center text-sm font-semibold text-charcoal-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                          onClick={() => setQty(item.slug, item.qty + 100)}
                          className="grid h-9 w-9 place-items-center text-charcoal-500 hover:bg-sand-100 hover:text-charcoal-900"
                          aria-label="Increase"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-[10px] uppercase tracking-[0.22em] text-charcoal-500">
                          pcs
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => remove(item.slug)}
                      className="grid h-10 w-10 place-items-center text-charcoal-400 transition hover:bg-sand-100 hover:text-red-600"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-5">
            <div className="sticky top-24 rounded-card border border-sand-200 bg-ivory-100 p-7 shadow-card">
              <span className="label-eyebrow">Send</span>
              <h2 className="mt-4 font-display text-3xl font-medium text-charcoal-900">
                Send to <span className="italic text-brass-600">Hehui</span>
              </h2>
              <p className="mt-2 text-sm text-charcoal-600">
                Reply within 24 h on working days.
              </p>

              <div className="mt-6 grid gap-4">
                <Field
                  label="Your Name *"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label="Company"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />
                <Field
                  label="Business Email *"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label="Country / Region"
                  value={form.country}
                  onChange={(v) => setForm({ ...form, country: v })}
                />
                <label className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    placeholder="Target packaging, logo, timeline, port…"
                    className="rounded-editorial border border-sand-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 outline-none transition focus:border-brass-500 focus:ring-2 focus:ring-brass-200"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || items.length === 0}
                className="btn-primary mt-6 w-full justify-center disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send RFQ ({items.length}{" "}
                    {items.length === 1 ? "item" : "items"})
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === "err" && (
                <p className="mt-3 text-sm text-red-600">
                  Sorry, something went wrong. Please retry or email
                  sales@yjhehui.com directly.
                </p>
              )}
              <p className="mt-4 text-[11px] leading-relaxed text-charcoal-500">
                We use your details only to respond to this inquiry. No
                marketing emails without your opt-in.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
        {label}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-editorial border border-sand-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 outline-none transition focus:border-brass-500 focus:ring-2 focus:ring-brass-200"
      />
    </label>
  );
}
