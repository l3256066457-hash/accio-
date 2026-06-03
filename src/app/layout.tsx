import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { InquiryProvider } from "@/components/InquiryProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Hehui Kitchenware — OEM/ODM Cookware Manufacturer · Yangjiang, China",
    template: "%s · Hehui Kitchenware",
  },
  description:
    "Yangjiang Hehui Industry & Trade Co. — a 140-worker Chinese cookware factory supplying Michelin kitchens and premium hospitality with OEM, ODM and wholesale kitchenware across 60+ countries.",
  keywords: [
    "premium cookware factory China",
    "Michelin kitchen supplier",
    "OEM kitchenware manufacturer",
    "wholesale kitchen tools",
    "Yangjiang cookware",
    "silicone kitchenware OEM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="bg-ivory-50 text-charcoal-700 antialiased font-sans">
        <InquiryProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </InquiryProvider>
      </body>
    </html>
  );
}
