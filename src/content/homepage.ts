/**
 * Homepage content — Spec Sections 6.2 – 6.11.
 * Every piece of text, stat, and card data lives here.
 * Section components import from this file; they contain zero hardcoded strings.
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
  ClipboardList,
  FileText,
  CheckCircle,
  ShieldCheck,
  Sun,
  Award,
} from "lucide-react";

// ─── Hero (Section 6.2) ──────────────────────────────────────────────────────
export const hero = {
  eyebrow: "☀️ Reliable Solar & Electrical Solutions Across Nigeria",
  headline: "Power Your Home & Business with Reliable Solar Energy Solutions",
  body: "At SunLife Solar Electrification, we help homes, businesses, schools, churches, and commercial facilities enjoy dependable electricity through professionally designed solar systems. From solar panel installations and hybrid inverter systems to lithium batteries, CCTV solutions, electrical wiring, and system upgrades, we deliver clean, reliable power backed by expert workmanship and trusted products.\n\nWhether you're installing a new system or upgrading an existing one, our team provides honest advice, quality materials, and seamless installation tailored to your energy needs.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  trustBadges: [
    { icon: ShieldCheck, label: "Nationwide Service" },
    { icon: Award, label: "Premium Quality Products" },
    { icon: Sun, label: "Professional Installation" },
    { icon: HeadphonesIcon, label: "Excellent After-Sales Support" },
  ],
  stats: [
    { value: "2020", label: "Established", sublabel: "Providing reliable solar solutions" },
    { value: "Nationwide", label: "Coverage", sublabel: "Residential & commercial customers" },
    { value: "5+", label: "Trusted Brands", sublabel: "Cartel · SRNE · Deye · Felicity · 5Star" },
  ],
  floatingCard: {
    title: "Why Customers Choose SunLife",
    points: ["Clean & Professional Installations", "Honest Recommendations", "Reliable After-Sales Support"],
  },
  imageAlt:
    "Professional SunLife Solar installation showing rooftop solar panels, hybrid inverter, lithium battery system, and clean electrical installation.",
} as const;

// ─── Problem & Solution (Section 6.3) ────────────────────────────────────────
export const problemSolution = {
  sectionLabel: "Reliable Energy Starts with the Right Solution",
  heading: "Is Unreliable Electricity Holding You Back?",
  intro:
    "Whether it's unexpected blackouts, rising fuel prices, or the constant cost of running a generator, unreliable electricity affects the way we live and work every day. Homes struggle to keep essential appliances running, while businesses face interruptions that reduce productivity and increase operating costs.\n\nAt SunLife Solar Electrification, we provide dependable solar energy solutions that help you reduce your dependence on the grid and enjoy reliable electricity designed around your specific energy needs.",
  challenges: [
    {
      icon: Zap,
      title: "Frequent Power Outages",
      description:
        "Power interruptions can disrupt your daily routine, damage productivity, and make it difficult to enjoy a comfortable home or operate a successful business.",
    },
    {
      icon: Fuel,
      title: "Rising Fuel Costs",
      description:
        "Running generators every day is becoming increasingly expensive. Fuel costs continue to rise, making traditional backup power less practical over time.",
    },
    {
      icon: CircleDollarSign,
      title: "High Electricity Bills",
      description:
        "Many homes and businesses spend more on electricity than necessary. A properly designed solar system helps reduce long-term energy costs while improving reliability.",
    },
    {
      icon: ShieldAlert,
      title: "Poor Quality Installations",
      description:
        "Incorrect system sizing, untidy wiring, and poor workmanship often result in disappointing performance. Professional installation ensures your investment performs efficiently for years to come.",
    },
  ],
  solution: {
    heading: "Smart Solar Solutions Designed for You",
    body: "Every property is different, which is why we don't believe in one-size-fits-all systems.\n\nOur team carries out a detailed assessment of your energy requirements before recommending the most suitable combination of solar panels, hybrid inverters, lithium batteries, and electrical components.\n\nFrom consultation and site inspection to installation, testing, and after-sales support, every project is completed with attention to detail, quality workmanship, and long-term reliability.",
    cta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
    ctaSubtext:
      "Not sure what system is right for you? Speak with our team for honest advice and a solution tailored to your energy needs and budget.",
  },
  imageAlt: "Completed SunLife Solar installation at a residential property showcasing professional workmanship.",
} as const;

// ─── Why Choose SunLife (Section 6.4) ────────────────────────────────────────
export const whyChooseUs = {
  sectionLabel: "Why Choose SunLife",
  heading: "More Than Solar Installers — We're Your Long-Term Energy Partner",
  intro:
    "Choosing the right solar company is just as important as choosing the right equipment. At SunLife Solar Electrification, we don't believe in selling the biggest system—we believe in recommending the right system for your energy needs.\n\nFrom your first consultation to installation and ongoing support, our goal is to deliver reliable power solutions with professionalism, transparency, and attention to detail.",
  features: [
    {
      icon: Lightbulb,
      title: "Tailored Energy Solutions",
      description:
        "Every home and business has unique energy needs. We carefully assess your requirements before recommending a system designed specifically for your lifestyle, energy consumption, and budget.",
    },
    {
      icon: Wrench,
      title: "Clean & Professional Installation",
      description:
        "A great solar system deserves a clean installation. We pay close attention to cable management, equipment placement, and finishing to ensure every project looks professional and performs reliably.",
    },
    {
      icon: Shield,
      title: "Premium Quality Products",
      description:
        "We install trusted products from leading manufacturers, including Cartel, SRNE, Deye, Felicity, and 5Star, helping ensure dependable performance and long-term reliability.",
    },
    {
      icon: Handshake,
      title: "Honest Advice, No Pressure",
      description:
        "We focus on understanding your needs before making recommendations. Our team provides clear, honest guidance so you can make informed decisions without unnecessary upselling.",
    },
    {
      icon: HeadphonesIcon,
      title: "Reliable After-Sales Support",
      description:
        "Our relationship doesn't end after installation. Whether you need maintenance, troubleshooting, upgrades, or technical advice, we're here to support you long after your system is installed.",
    },
    {
      icon: MapPin,
      title: "Nationwide Service",
      description:
        "No matter where you're located in Nigeria, our team is committed to delivering professional solar and electrical solutions with the same attention to quality and customer satisfaction.",
    },
  ],
  supportingHeading: "Your Investment Deserves the Right Partner",
  supportingBody:
    "Installing a solar system is an investment in your home or business. That's why we take the time to understand your goals, answer your questions, and recommend solutions that provide long-term value—not just short-term results.\n\nWhen you choose SunLife Solar Electrification, you're choosing a team that values quality workmanship, reliable performance, and customer satisfaction every step of the way.",
  ctaHeading: "Let's Build the Right Solar Solution for You",
  ctaSubtext:
    "Whether you're installing a new system, upgrading an existing one, or simply exploring your options, we're here to help.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
} as const;

// ─── Services overview (Section 6.5) — actual service data is in content/services.ts
export const servicesSection = {
  sectionLabel: "Our Services",
  heading: "Complete Solar & Electrical Solutions for Homes and Businesses",
  intro:
    "Whether you're looking to install a brand-new solar system, upgrade your existing setup, or improve your property's electrical infrastructure, SunLife Solar Electrification provides reliable solutions tailored to your needs. Our experienced team delivers quality workmanship, trusted products, and professional support from consultation to completion.",
  supportingHeading: "Not Sure Which Service You Need?",
  supportingBody:
    "Our team is always available to guide you. We'll assess your energy needs, answer your questions, and recommend the most suitable solution—without unnecessary upselling or pressure.",
  ctaHeading: "Let's Find the Right Solution for You",
  ctaBody:
    "Whether you're powering a single home, a growing business, or a large commercial facility, we're ready to help you make the switch to reliable energy.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
} as const;

// ─── Installation Process (Section 6.6) ──────────────────────────────────────
export const processSection = {
  sectionLabel: "Our Process",
  heading: "From Consultation to Reliable Power — We've Got You Covered",
  intro:
    "We believe installing a solar system should be straightforward and stress-free. Our structured process ensures every project is carefully planned, professionally installed, and thoroughly tested before handover.",
  steps: [
    {
      number: "01",
      icon: MessageCircle,
      title: "Consultation",
      description:
        "Every project begins with a conversation. We take the time to understand your energy challenges, answer your questions, and discuss the best options for your home or business.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Site Inspection",
      description:
        "Our team visits your property to assess your energy requirements, inspect the installation area, take necessary measurements, and recommend the most suitable system based on your needs.",
    },
    {
      number: "03",
      icon: FileText,
      title: "System Design & Quotation",
      description:
        "Based on our assessment, we prepare a customized solution outlining the recommended equipment, expected performance, and project cost. We explain everything clearly so you can make an informed decision.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Once approved, our experienced installers carry out the installation using quality materials and clean workmanship. We ensure all components are securely installed and neatly finished.",
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Testing & Commissioning",
      description:
        "Before handover, we thoroughly test the entire system to ensure it operates safely and efficiently. We also walk you through how your new system works and answer any questions you may have.",
    },
    {
      number: "06",
      icon: HeadphonesIcon,
      title: "After-Sales Support",
      description:
        "Our commitment doesn't end after installation. Whether you need maintenance, technical support, upgrades, or advice, we're here to help you get the best performance from your solar system.",
    },
  ],
  supportingHeading: "A Professional Process You Can Trust",
  supportingBody:
    "Every installation is completed with attention to detail, quality workmanship, and a commitment to customer satisfaction. Our goal is not just to install equipment, but to provide a dependable energy solution that serves you for years to come.",
  ctaHeading: "Ready to Start Your Solar Journey?",
  ctaSubtext: "Let's discuss your energy needs and recommend the right solution for your property.",
  primaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  secondaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
} as const;

// ─── Featured Projects (Section 6.7) ─────────────────────────────────────────
export const featuredProjectsSection = {
  sectionLabel: "Our Recent Projects",
  heading: "Delivering Reliable Solar Solutions Across Nigeria",
  intro:
    "Every installation tells a story of reliability, quality, and customer satisfaction. From residential homes to commercial properties, we design and install solar systems that provide dependable power while maintaining clean, professional workmanship.",
  ctaHeading: "Want Your Property to Be Our Next Success Story?",
  ctaSubtext: "Let's design a solar solution that fits your energy needs.",
  cta: { label: "Request a Free Quote", href: "/contact?intent=quote" },
  viewAllCta: { label: "View All Projects", href: "/projects" },
} as const;

// ─── Brands (Section 6.8) ─────────────────────────────────────────────────────
export const brandsSection = {
  sectionLabel: "Trusted Brands",
  heading: "We Install Products We Trust",
  intro:
    "The performance of any solar system depends on the quality of the equipment installed. That's why we work with trusted manufacturers known for reliability, efficiency, and long-term performance.",
  brands: [
    { name: "Cartel", note: "Preferred" },
    { name: "SRNE", note: "Preferred" },
    { name: "Deye", note: "" },
    { name: "Felicity", note: "" },
    { name: "5Star", note: "" },
  ],
  supporting:
    "We carefully select products based on your energy requirements, budget, and long-term performance expectations. Every recommendation is made with reliability and value in mind.",
  ctaNote: "Need help choosing the right equipment?",
  ctaSubtext: "Our team will recommend the best solution based on your needs.",
  cta: { label: "Speak with an Expert", href: "/contact" },
} as const;

// ─── Testimonials (Section 6.9) ───────────────────────────────────────────────
export const testimonialsSection = {
  sectionLabel: "Customer Reviews",
  heading: "Trusted by Homeowners and Businesses",
  intro:
    "Customer satisfaction is at the heart of everything we do. We're proud to deliver reliable installations and ongoing support that our customers can depend on.",
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
  body: "Whether you're planning a new solar installation, upgrading your current system, or simply exploring your options, our team is ready to help you find the right solution.\n\nLet's build a dependable energy system that serves your home or business for years to come.",
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
} as const;
