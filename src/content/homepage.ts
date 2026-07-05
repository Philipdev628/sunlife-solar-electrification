/**
 * Homepage content — Spec Sections 6.2 – 6.11.
 * Every piece of text, stat, and card data lives here.
 * Section components import from this file; they contain zero hardcoded strings.
 *
 * Content pass: trimmed for a cleaner, more scannable homepage. Detailed
 * explanations now live on their dedicated pages — this file keeps only what
 * earns its place above the fold and below it.
 */

import {
  Zap,
  Fuel,
  CircleDollarSign,
  ShieldAlert,
  Lightbulb,
  Wrench,
  Shield,
  Handshake,
  HeadphonesIcon,
  MapPin,
  MessageCircle,
  FileText,
  CheckCircle,
  ShieldCheck,
  HardHat,
  Award,
} from "lucide-react";

// ─── Hero (Section 6.2) ──────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Reliable Solar & Electrical Solutions Across Nigeria",
  headline: "Reliable Solar Energy for Homes & Businesses",
  body: "From panels to inverters, batteries, and wiring — we design, install, and support power systems built to last.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  trustBadges: [
    { icon: ShieldCheck, label: "Nationwide Service" },
    { icon: Award, label: "Premium Quality Products" },
    { icon: HardHat, label: "Professional Installation" },
    { icon: HeadphonesIcon, label: "Excellent After Sales Support" },
  ],
  stats: [
    { value: "2020", label: "Established", sublabel: "Providing reliable solar solutions" },
    { value: "Nationwide", label: "Coverage", sublabel: "Residential & commercial customers" },
    { value: "5+", label: "Trusted Brands", sublabel: "Cartel · SRNE · Deye · Felicity · 5Star" },
  ],
  floatingCard: {
    title: "Why Customers Choose SunLife",
    points: ["Clean & Professional Installations", "Honest Recommendations", "Reliable After Sales Support"],
  },
  imageAlt:
    "Professional SunLife Solar installation showing rooftop solar panels, hybrid inverter, lithium battery system, and clean electrical installation.",
} as const;

// ─── Problem & Solution (Section 6.3) ────────────────────────────────────────
export const problemSolution = {
  sectionLabel: "Common Energy Challenges",
  heading: "Is Unreliable Electricity Holding You Back?",
  intro:
    "Blackouts, rising fuel costs, and unreliable power affect how you live and work. SunLife designs solar systems that reduce your dependence on the grid.",
  challenges: [
    {
      icon: Zap,
      title: "Frequent Power Outages",
      description: "Interruptions disrupt your routine and cost your business productivity.",
    },
    {
      icon: Fuel,
      title: "Rising Fuel Costs",
      description: "Generators cost more to run every year — and make less sense over time.",
    },
    {
      icon: CircleDollarSign,
      title: "High Electricity Bills",
      description: "A properly sized solar system lowers your long term energy costs.",
    },
    {
      icon: ShieldAlert,
      title: "Poor Quality Installations",
      description: "Incorrect sizing and untidy work lead to disappointing performance.",
    },
  ],
  solution: {
    heading: "Smart Solar Solutions Designed for You",
    body: "We assess your energy needs first, then design the right combination of panels, inverters, and batteries — installed, tested, and supported by our team.",
    cta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
    ctaSubtext: "Not sure what you need? Talk to our team for honest advice.",
  },
  imageAlt: "Completed SunLife Solar installation at a residential property showcasing professional workmanship.",
} as const;

// ─── Why Choose SunLife (Section 6.4) ────────────────────────────────────────
export const whyChooseUs = {
  sectionLabel: "Why Choose SunLife",
  heading: "More Than Installers — Your Energy Partner",
  intro:
    "We recommend the right system for your needs, not the biggest one — with honest guidance from consultation through installation.",
  features: [
    {
      icon: Lightbulb,
      title: "Tailored Energy Solutions",
      description: "Every property is different. We design around your actual needs and budget.",
    },
    {
      icon: Wrench,
      title: "Clean & Professional Installation",
      description: "Neat cable management and careful finishing on every project.",
    },
    {
      icon: Shield,
      title: "Premium Quality Products",
      description: "Trusted brands including Cartel, SRNE, Deye, Felicity, and 5Star.",
    },
    {
      icon: Handshake,
      title: "Honest Advice, No Pressure",
      description: "Clear guidance and no upselling, so you can decide with confidence.",
    },
    {
      icon: HeadphonesIcon,
      title: "Reliable After Sales Support",
      description: "Maintenance, troubleshooting, and upgrades — long after installation.",
    },
    {
      icon: MapPin,
      title: "Nationwide Service",
      description: "The same quality and care, wherever you are in Nigeria.",
    },
  ],
  supportingHeading: "Your Investment Deserves the Right Partner",
  supportingBody:
    "We take the time to understand your goals and recommend solutions built for long term value, not just short term results.",
  learnMoreCta: { label: "Learn More About Us", href: "/about" },
  ctaHeading: "Let's Build the Right Solar Solution for You",
  ctaSubtext: "Whether you're installing new or upgrading, we're here to help.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
} as const;

// ─── Services overview (Section 6.5) — actual service data is in content/services.ts
export const servicesSection = {
  sectionLabel: "Our Services",
  heading: "Complete Solar & Electrical Solutions",
  intro:
    "From new installations to upgrades and electrical work, we deliver reliable solutions tailored to your property.",
  supportingHeading: "Not Sure Which Service You Need?",
  supportingBody: "Tell us your energy needs — we'll recommend the right solution, no pressure.",
  ctaHeading: "Let's Find the Right Solution for You",
  ctaBody: "Ready to switch to reliable energy? We're here to help.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
} as const;

// ─── Installation Process (Section 6.6) ──────────────────────────────────────
export const processSection = {
  sectionLabel: "Our Process",
  heading: "From Consultation to Reliable Power",
  intro: "A clear, structured process from first conversation to fully tested installation.",
  steps: [
    {
      number: "01",
      icon: MessageCircle,
      title: "Consultation",
      description: "We learn about your energy needs and discuss your options.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Site Inspection",
      description: "We assess your property and recommend the right system.",
    },
    {
      number: "03",
      icon: FileText,
      title: "System Design & Quotation",
      description: "A clear proposal covering equipment, performance, and cost.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Professional Installation",
      description: "Quality materials and clean workmanship, properly secured.",
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Testing & Commissioning",
      description: "We test everything and walk you through how it works.",
    },
    {
      number: "06",
      icon: HeadphonesIcon,
      title: "After Sales Support",
      description: "Maintenance and troubleshooting, long after installation.",
    },
  ],
  supportingHeading: "A Professional Process You Can Trust",
  supportingBody: "Every installation is completed with quality workmanship and long term reliability in mind.",
  ctaHeading: "Ready to Start Your Solar Journey?",
  ctaSubtext: "Let's discuss your energy needs and find the right fit.",
  primaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  secondaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
} as const;

// ─── Featured Projects (Section 6.7) ─────────────────────────────────────────
export const featuredProjectsSection = {
  sectionLabel: "Our Recent Projects",
  heading: "Delivering Reliable Solar Solutions Across Nigeria",
  intro: "Real installations, reliable power, and satisfied customers across Nigeria.",
  ctaHeading: "Want Your Property to Be Our Next Success Story?",
  ctaSubtext: "Let's design a solar solution that fits your energy needs.",
  cta: { label: "Request a Free Quote", href: "/contact?intent=quote" },
  viewAllCta: { label: "View All Projects", href: "/projects" },
} as const;

// ─── Brands (Section 6.8) ─────────────────────────────────────────────────────
export const brandsSection = {
  sectionLabel: "Trusted Brands",
  heading: "We Install Products We Trust",
  intro: "We only work with manufacturers known for reliability and long term performance.",
  brands: [
    { name: "Cartel", note: "Preferred" },
    { name: "SRNE", note: "Preferred" },
    { name: "Deye", note: "" },
    { name: "Felicity", note: "" },
    { name: "5Star", note: "" },
  ],
  supporting: "Every recommendation is based on your needs, budget, and long term value.",
  ctaNote: "Need help choosing the right equipment?",
  ctaSubtext: "Our team will recommend the best solution based on your needs.",
  cta: { label: "Speak with an Expert", href: "/contact" },
} as const;

// ─── Testimonials (Section 6.9) ───────────────────────────────────────────────
export const testimonialsSection = {
  sectionLabel: "Customer Reviews",
  heading: "Trusted by Homeowners and Businesses",
  intro: "Real feedback from customers who trust SunLife for reliable power.",
  cta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  ctaHeading: "Become our next satisfied customer.",
} as const;

// ─── FAQ preview (Section 6.10) ───────────────────────────────────────────────
export const faqPreviewSection = {
  sectionLabel: "Frequently Asked Questions",
  heading: "Answers to Common Questions",
  ctaNote: "Still have questions?",
  ctaSubtext: "Our team is happy to help.",
  cta: { label: "Contact Us", href: "/contact" },
  viewAllCta: { label: "View All FAQs", href: "/faq" },
} as const;

// ─── Final CTA (Section 6.11) ─────────────────────────────────────────────────
export const finalCta = {
  heading: "Ready to Enjoy Reliable Power?",
  body: "Let's design a dependable energy system built around your home or business.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
} as const;
