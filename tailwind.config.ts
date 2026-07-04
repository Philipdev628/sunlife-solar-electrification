import type { Config } from "tailwindcss";

/**
 * SunLife Solar Electrification — Design Token System
 * Source of truth: Website Master Specification, Section 5 (UI Design System).
 * Every value below is traceable to a spec line so design stays consistent
 * across every page and component. Do not add ad-hoc colors/spacing outside
 * this scale — extend the scale instead.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
    },
    extend: {
      // ---- Layout ---------------------------------------------------------
      maxWidth: {
        content: "1280px", // Spec 5.9 — Maximum content width
      },

      // ---- Color ------------------------------------------------------------
      colors: {
        brand: {
          blue: "#0A6EBD", // Primary Blue — buttons, links, highlights, icons
          "blue-dark": "#085A99", // hover state for primary blue (darker blue)
          "blue-light": "#E8F2FB", // tint for subtle backgrounds/badges
          gold: "#F5A623", // Solar Gold — accents, feature icons, badges (used sparingly)
          "gold-dark": "#D6900F",
          navy: "#0B172A", // Dark Navy — primary heading color
          charcoal: "#1F2937", // Body text
        },
        surface: {
          light: "#F8F9FA", // Section backgrounds
          white: "#FFFFFF", // Cards / page backgrounds
          "blue-tint": "#F3F8FD", // Subtle blue-tinted section background — Premium refinement pass
          "gold-tint": "#FEF9F0", // Subtle warm section background — Premium refinement pass
        },
        state: {
          success: "#16A34A",
          "success-bg": "#F0FDF4",
          error: "#DC2626",
          "error-bg": "#FEF2F2",
        },
        border: {
          DEFAULT: "#E5E7EB", // thin gray border for cards (5.6)
        },
      },

      // ---- Typography ---------------------------------------------------------
      fontFamily: {
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Spec 5.3 — desktop sizes. Mobile scaling is handled per-component
        // with responsive variants (e.g. text-h1 on lg:, smaller base on mobile).
        h1: ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["42px", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h4: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.65", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.65", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },

      // ---- Spacing (8pt grid, Spec 5.4) ---------------------------------------
      spacing: {
        "section-y": "96px", // default vertical section padding (desktop)
        "section-y-sm": "64px", // vertical section padding (mobile)
        "section-y-lg": "120px", // hero / high-emphasis sections
      },

      // ---- Radius (Spec 5.5 buttons = 12px, 5.6 cards = 16px) -----------------
      borderRadius: {
        btn: "12px",
        card: "16px",
        input: "10px",
        badge: "999px",
      },

      // ---- Shadows --------------------------------------------------------
      // Premium refinement pass: layered shadows combine a tight, dark
      // "contact" shadow with a soft, diffuse "ambient" shadow — this reads
      // as real depth, unlike a single uniform shadow.
      boxShadow: {
        "btn-sm": "0 2px 8px rgba(10, 110, 189, 0.18)",
        "btn-hover": "0 8px 20px rgba(10, 110, 189, 0.28)",
        card: "0 1px 2px rgba(11, 23, 42, 0.04), 0 8px 20px -4px rgba(11, 23, 42, 0.08)",
        "card-hover": "0 2px 4px rgba(11, 23, 42, 0.06), 0 20px 40px -8px rgba(11, 23, 42, 0.16)",
        floating: "0 4px 8px rgba(11, 23, 42, 0.08), 0 30px 60px -12px rgba(11, 23, 42, 0.22)",
        header: "0 2px 14px rgba(11, 23, 42, 0.08)",
        // Featured/accent elevation — used sparingly on hero cards, featured badges
        accent: "0 2px 6px rgba(245, 166, 35, 0.18), 0 12px 28px -6px rgba(245, 166, 35, 0.22)",
      },

      // ---- Motion (Spec 5.11 — 250–350ms, subtle only) ------------------------
      transitionDuration: {
        fast: "250ms",
        DEFAULT: "300ms",
        slow: "350ms",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.035)" },
        },
      },
      animation: {
        "fade-in": "fade-in 350ms ease-out forwards",
        "slide-up": "slide-up 350ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "ken-burns": "ken-burns 20s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
