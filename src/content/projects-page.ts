import { Home, Building2, Church, GraduationCap, Zap, Camera } from "lucide-react";

// ─── 9.1 Projects Hero ───────────────────────────────────────────────────────
export const projectsHero = {
  pageLabel: "Our Projects",
  heading: "See the Quality Behind Every Installation",
  body: [
    "Every project we complete reflects our commitment to quality, professionalism, and reliable energy solutions. From residential solar systems to commercial installations and electrical projects, we take pride in delivering clean workmanship and dependable performance.",
    "Explore some of our completed projects and discover why customers trust SunLife Solar Electrification for their solar and electrical needs.",
  ],
  cta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  imageAlt: "One of SunLife Solar Electrification's strongest completed installations.",
};

// ─── 9.2 Installation Categories ─────────────────────────────────────────────
export const installationCategories = {
  heading: "Projects Across Different Sectors",
  intro:
    "Our experience spans a wide range of properties and industries, allowing us to design and install systems that meet unique energy requirements.",
  categories: [
    { icon: Home, title: "Residential Solar Installations", description: "Reliable solar systems designed for homes and apartments." },
    { icon: Building2, title: "Commercial Installations", description: "Power solutions for offices, retail spaces, and businesses." },
    { icon: Church, title: "Churches & Religious Centres", description: "Dependable energy systems for places of worship." },
    { icon: GraduationCap, title: "Schools & Educational Institutions", description: "Reliable electricity that supports uninterrupted learning." },
    { icon: Zap, title: "Electrical Projects", description: "Professional wiring and electrical upgrades." },
    { icon: Camera, title: "CCTV Installations", description: "Modern surveillance solutions for improved security." },
  ],
};

// ─── 9.3 Project Gallery (heading/intro only — project data lives in projects.ts) ──
export const projectGallery = {
  heading: "Our Recent Installations",
  intro:
    "Browse a selection of our completed projects showcasing the quality, precision, and professionalism that define every SunLife installation.",
};

// ─── 9.4 Project Statistics ──────────────────────────────────────────────────
export const projectStats: {
  heading: string;
  stats: { value: number; suffix: string; label: string; displayAs?: string }[];
} = {
  heading: "Growing Through Every Installation",
  stats: [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "+", label: "Satisfied Customers" },
    { value: 10, suffix: "+", label: "States Served" },
    { value: 2020, suffix: "", label: "Years of Experience", displayAs: "Since 2020" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
  ],
};

// ─── 9.6 Our Workmanship Promise ─────────────────────────────────────────────
export const workmanshipPromise = {
  heading: "Every Installation Reflects Our Standards",
  body: [
    "We believe every installation should deliver more than reliable electricity, it should demonstrate professionalism, attention to detail, and long term reliability.",
    "Our team takes pride in neat cable management, quality equipment, proper testing, and ensuring every customer understands how their new system works before we leave.",
    "When you choose SunLife Solar Electrification, you're investing in workmanship designed to stand the test of time.",
  ],
  cta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
};

// ─── 9.7 Projects Final CTA ──────────────────────────────────────────────────
export const projectsFinalCta = {
  heading: "Let's Make Your Property Our Next Success Story",
  body: [
    "Whether you're planning a residential installation, commercial project, electrical upgrade, or security solution, we're ready to deliver the same quality and professionalism showcased throughout our portfolio.",
  ],
  primaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  secondaryCta: { label: "Request a Free Quote", href: "/contact?intent=quote" },
};
