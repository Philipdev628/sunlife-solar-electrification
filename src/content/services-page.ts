import {
  ClipboardCheck,
  Wrench as WrenchIcon,
  Sparkles,
  Award,
  MessageSquareHeart,
  HeadphonesIcon,
  MapPin,
  Users,
} from "lucide-react";

// ─── 8.1 Services Hero ───────────────────────────────────────────────────────
export const servicesHero = {
  pageLabel: "Our Services",
  heading: "Complete Solar & Electrical Solutions Designed Around Your Energy Needs",
  body: [
    "Whether you're looking to install a brand-new solar system, upgrade an existing setup, improve your property's electrical infrastructure, or enhance security with CCTV, SunLife Solar Electrification delivers reliable, professional solutions tailored to your requirements.",
    "From consultation and site inspection to installation, maintenance, and long-term support, our experienced team is committed to helping homes, businesses, schools, churches, and commercial facilities enjoy dependable, efficient, and sustainable power.",
  ],
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  imageAlt:
    "A complete SunLife Solar Electrification installation featuring solar panels, a hybrid inverter, lithium batteries, and technicians at work.",
};

// ─── 8.2 Services Overview ───────────────────────────────────────────────────
export const servicesOverview = {
  sectionLabel: "What We Offer",
  heading: "Professional Solutions for Every Energy Need",
  intro:
    "At SunLife Solar Electrification, we provide a comprehensive range of solar and electrical services designed to deliver reliable power, improve energy efficiency, and give you peace of mind. Every solution is tailored to your property, energy consumption, and budget.",
};

// ─── 8.12 Why Choose SunLife for Your Project ───────────────────────────────
export const whyChooseForProject = {
  sectionLabel: "Why Choose Us",
  heading: "A Partner You Can Trust From Start to Finish",
  intro:
    "Choosing a solar company is about more than comparing prices. It's about finding a team that understands your needs, delivers quality workmanship, and stands behind every installation. At SunLife Solar Electrification, we're committed to providing dependable solutions, honest recommendations, and exceptional customer service every step of the way.",
  points: [
    { icon: ClipboardCheck, label: "Tailored system designs" },
    { icon: Award, label: "Professional workmanship" },
    { icon: Sparkles, label: "Clean installations" },
    { icon: WrenchIcon, label: "Premium equipment" },
    { icon: MessageSquareHeart, label: "Honest advice" },
    { icon: HeadphonesIcon, label: "Reliable after-sales support" },
    { icon: MapPin, label: "Nationwide service" },
    { icon: Users, label: "Experienced team" },
  ],
  cta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
};

// ─── 8.13 Services Final CTA ─────────────────────────────────────────────────
export const servicesFinalCta = {
  heading: "Ready to Switch to Reliable Solar Energy?",
  body: [
    "Whether you're planning your first solar installation, upgrading your existing system, or simply looking for expert advice, SunLife Solar Electrification is here to help.",
    "Let's design a solution that delivers dependable power, long-term savings, and peace of mind.",
  ],
  primaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  secondaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
};
