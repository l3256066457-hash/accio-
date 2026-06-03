import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ───── v3 Michelin-light palette ─────
        ivory: {
          50:  "#FFFDF8",
          100: "#FBF6ED",
          200: "#F4EBDD",
          300: "#EADCC7",
          400: "#DDC8AA",
          500: "#CDB28D",
          600: "#B9966A",
          700: "#9B764A",
          800: "#735638",
          900: "#473524",
        },
        sand: {
          50:  "#FAF7F1",
          100: "#F1E8DA",
          200: "#E3D2BB",
          300: "#D2B996",
          400: "#BD9E75",
          500: "#A98258",
          600: "#8C673F",
          700: "#6F4F31",
          800: "#513B27",
          900: "#33271D",
        },
        brass: {
          DEFAULT: "#A97822",
          light: "#D6AD4E",
          dark: "#6B4615",
          50:  "#FFF8E8",
          100: "#F8E8BE",
          200: "#E9CE82",
          300: "#D6AD4E",
          400: "#C4942F",
          500: "#A97822",
          600: "#8C5F19",
          700: "#6B4615",
          800: "#4B3112",
          900: "#2F200D",
        },
        charcoal: {
          50:  "#F5F4F1",
          100: "#E8E5DF",
          200: "#CEC8BC",
          300: "#AFA695",
          400: "#877C6D",
          500: "#62594E",
          600: "#474039",
          700: "#322D28",
          800: "#211E1A",
          900: "#141210",
        },

        // ───── v2 legacy aliases (keep old components working) ─────
        // Old "ink" deep grays now point at charcoal so any existing
        // text-ink-900 / bg-ink-100 etc. degrade gracefully.
        ink: {
          50:  "#FAF7F1",
          100: "#F1E8DA",
          200: "#E3D2BB",
          300: "#AFA695",
          400: "#877C6D",
          500: "#62594E",
          600: "#474039",
          700: "#322D28",
          800: "#211E1A",
          900: "#141210",
          950: "#0A0908",
        },
        // Old ember accent → reuse brass
        ember: {
          50:  "#FFF8E8",
          200: "#E9CE82",
          300: "#D6AD4E",
          400: "#C4942F",
          500: "#A97822",
          600: "#8C5F19",
          700: "#6B4615",
        },
        surface: {
          DEFAULT: "#FFFDF8",
          raised: "#FBF6ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "Cormorant Garamond", "Georgia", "serif"],
        heading: ["var(--font-heading)", "Cormorant Garamond", "Georgia", "serif"],
      },
      letterSpacing: {
        industrial: "0.22em",
      },
      backgroundImage: {
        // Soft warm haze for hero overlays
        "warm-haze":
          "linear-gradient(135deg, rgba(255,253,248,0.62) 0%, rgba(255,253,248,0.18) 45%, rgba(255,253,248,0) 75%)",
        "hero-veil":
          "linear-gradient(to right, rgba(255,253,248,0.78) 0%, rgba(255,253,248,0.30) 38%, rgba(255,253,248,0) 70%)",
        "bottom-fade":
          "linear-gradient(to top, rgba(20,18,16,0.30), transparent 40%)",
        // legacy aliases
        "grid-faint":
          "linear-gradient(to right, rgba(20,18,16,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,18,16,0.04) 1px, transparent 1px)",
        "radial-spot":
          "radial-gradient(circle at 75% 30%, rgba(214,173,78,0.18), transparent 50%), radial-gradient(circle at 10% 90%, rgba(189,158,117,0.14), transparent 55%)",
        "brass-sheen":
          "linear-gradient(135deg, #E9CE82 0%, #C4942F 50%, #8C5F19 100%)",
      },
      boxShadow: {
        soft: "0 18px 50px -22px rgba(50,45,40,0.22)",
        editorial: "0 24px 80px -28px rgba(50,45,40,0.30)",
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 12px 30px -16px rgba(50,45,40,0.18)",
        brass: "0 10px 30px -10px rgba(169,120,34,0.35)",
        brassStrong: "0 14px 36px -10px rgba(169,120,34,0.45)",
        glow: "0 0 0 1px rgba(169,120,34,0.45), 0 14px 36px -12px rgba(169,120,34,0.32)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.85)",
      },
      borderRadius: {
        editorial: "5px",
        card: "6px",
      },
      animation: {
        "fade-up": "fadeUp .8s ease-out both",
        "fade-in": "fadeIn .8s ease-out both",
        marquee: "marquee 42s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
