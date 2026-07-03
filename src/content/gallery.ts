import type { GalleryCategory } from "./projects";

export const galleryHero = {
  heading: "Explore Our Work",
  body:
    "Every installation tells a story of quality, precision, and reliability. Browse our gallery to see real projects completed by SunLife Solar Electrification across homes, businesses, schools, churches, and commercial properties throughout Nigeria.",
  cta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
};

export const galleryCategories: ("All Projects" | GalleryCategory)[] = [
  "All Projects",
  "Residential",
  "Commercial",
  "Hybrid Systems",
  "CCTV Installations",
  "Electrical Works",
  "Maintenance & Upgrades",
];

export const videoGallery = {
  heading: "Installation Videos",
  body: "Installation Videos Coming Soon",
};

export const galleryCta = {
  heading: "Inspired by Our Work?",
  body: "Let's build a reliable solar solution for your property.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
};
