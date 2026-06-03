"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ArrowRight,
} from "lucide-react";
import { company } from "@/data/company";

const CONTACT_HERO =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2400&q=85";

export default function ContactPage() {
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
    if (!form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, items: [] }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-sand-200 bg-ivory-50 text-charcoal-900">
        <div className="absolute inset-0">
          <Image
            src={CONTACT_HERO}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-50 via-ivory-50/85 to-ivory-50/30" />
        </div>
        <div className="container-x relative py-20 md:py-28">
          <span className="label-eyebrow">
            <span className="inline-flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5 text-brass-500" />
              Contact · Sales Team
            </span>
          </span>
          <h1 className="mt-7 max-w-4xl font-display text-balance text-[44px] font-medium leading-[1.05] tracking-[-0.012em] text-charcoal-900 sm:text-[58px] md:text-[72px]">
            Talk to a real factory,
            <br />
            <span className="italic text-brass-600">not a chatbot.</span>
          </h1>
          <p className="mt-7 max-w-2xl lead">
            Drop us a line about your project, MOQ, target price or shipping
            window. Our export team responds within one working day.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="section-y bg-ivory-50">
        <div className="container-x grid gap-12 md:grid-cols-12">
          {/* LEFT — contact info */}
          <div className="md:col-span-5">
            <span className="label-eyebrow">Office</span>
            <h2 className="heading-section mt-5 text-charcoal-900">
              Yangjiang <span className="italic text-brass-600">HQ.</span>
            </h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200">
              <li className="flex items-start gap-4 bg-ivory-50 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                    Headquarters
                  </p>
                  <p className="mt-1.5 text-sm text-charcoal-700">
                    {company.contact.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-ivory-50 p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                    Email
                  </p>
                  <a
                    className="mt-1.5 block text-sm text-charcoal-900 hover:text-brass-600"
                    href={`mailto:${company.contact.email}`}
                  >
                    {company.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-ivory-50 p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                    Phone / WeChat
                  </p>
                  <p className="mt-1.5 text-sm text-charcoal-900">
                    {company.contact.phone}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-ivory-50 p-5">
                <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                    Alibaba Store
                  </p>
                  <a
                    className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-charcoal-900 hover:text-brass-600"
                    href={company.contact.alibaba}
                    target="_blank"
                    rel="noreferrer"
                  >
                    yjhehui.en.alibaba.com
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-card border border-sand-200 bg-ivory-100 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                Working Hours
              </p>
              <p className="mt-2 text-sm text-charcoal-700">
                Mon–Sat · 09:00 – 18:30 (GMT+8 · Shanghai time)
              </p>
            </div>

            <Link
              href="/inquiry"
              className="btn-outline mt-6 w-full justify-center"
            >
              Already have a list? View RFQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* RIGHT — form */}
          <form onSubmit={onSubmit} className="md:col-span-7">
            {status === "ok" ? (
              <div className="rounded-card border border-emerald-500/30 bg-emerald-50 p-12 text-center shadow-card">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
                <h2 className="mt-5 font-display text-3xl font-medium text-charcoal-900">
                  Message sent.
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-charcoal-600">
                  Thanks! We&rsquo;ll reply at{" "}
                  <strong className="text-brass-600">{form.email}</strong>{" "}
                  within one working day.
                </p>
              </div>
            ) : (
              <div className="rounded-card border border-sand-200 bg-ivory-100 p-8 shadow-card">
                <span className="label-eyebrow">Request</span>
                <h2 className="mt-4 font-display text-3xl font-medium text-charcoal-900">
                  Send us a <span className="italic text-brass-600">message</span>
                </h2>
                <p className="mt-2 text-sm text-charcoal-600">
                  All fields except those marked optional are required.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
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
                </div>
                <label className="mt-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-600">
                    Message *
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your project — product, MOQ, packaging, target market, timeline…"
                    className="rounded-editorial border border-sand-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 outline-none transition focus:border-brass-500 focus:ring-2 focus:ring-brass-200"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary mt-7 w-full justify-center disabled:opacity-50"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                {status === "err" && (
                  <p className="mt-3 text-sm text-red-600">
                    Sorry — please email{" "}
                    <a
                      className="underline"
                      href={`mailto:${company.contact.email}`}
                    >
                      {company.contact.email}
                    </a>{" "}
                    directly.
                  </p>
                )}
                <p className="mt-4 text-[11px] leading-relaxed text-charcoal-500">
                  We use your details only to respond to this inquiry. No
                  marketing emails without your opt-in.
                </p>
              </div>
            )}
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
