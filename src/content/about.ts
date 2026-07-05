/**
 * About page content — Spec Section 7 (7.1 – 7.8).
 * Every piece of copy lives here; the page component stays presentation-only.
 */

import {
  ShieldCheck,
  Award,
  Zap,
  Star,
  HeartHandshake,
  MessageSquareHeart,
  BadgeCheck,
  Sparkles,
  HeadphonesIcon,
  MapPin,
  CalendarCheck,
} from "lucide-react";

// ─── 7.1 About Hero ──────────────────────────────────────────────────────────
export const aboutHero = {
  pageLabel: "About SunLife Solar Electrification",
  heading: "Powering Homes, Businesses, and Brighter Futures Since 2020",
  body: [
    "Since 2020, SunLife Solar Electrification has been helping homes, businesses, schools, churches, and commercial facilities enjoy reliable, efficient, and sustainable energy solutions.",
    "We believe that every customer deserves dependable electricity, honest advice, and professional workmanship. That's why every installation we complete is designed with quality, reliability, and long term performance in mind.",
    "Whether you're installing your first solar system or upgrading an existing one, our team is committed to delivering solutions that provide lasting value and peace of mind.",
  ],
  cta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
  imageAlt: "The SunLife Solar Electrification team on-site beside a completed solar installation.",
};

// ─── 7.2 Our Story ───────────────────────────────────────────────────────────
export const ourStory = {
  heading: "Our Story",
  body: [
    "SunLife Solar Electrification was founded with a simple vision: to make reliable electricity more accessible to homes and businesses across Nigeria.",
    "What began in 2020 as a passion for delivering dependable energy solutions has grown into a company trusted for professional installations, honest recommendations, and exceptional customer service.",
    "Over the years, we've worked with homeowners, businesses, schools, churches, and commercial clients to design solar systems that reduce dependence on unreliable electricity while providing long term value.",
    "Every project we complete reflects our belief that quality workmanship, trusted products, and customer satisfaction should always come first.",
    "As technology continues to evolve, so do we. We remain committed to learning, improving, and delivering solutions that help our customers enjoy cleaner, smarter, and more reliable energy.",
  ],
  imageAlt: "SunLife Solar Electrification technicians at work during an installation.",
};

// ─── 7.3 Mission, Vision & Core Values ──────────────────────────────────────
export const missionVision = {
  mission:
    "To provide reliable, efficient, and affordable solar and electrical solutions that empower homes and businesses with dependable energy while delivering outstanding customer service and long term value.",
  vision:
    "To become one of Nigeria's most trusted solar and electrical solution providers, recognized for quality workmanship, innovation, integrity, and customer satisfaction.",
};

export const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We believe in honest recommendations and transparent communication.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "Every project is completed with attention to detail and high workmanship standards.",
  },
  {
    icon: Zap,
    title: "Reliability",
    description: "We install systems our customers can depend on every day.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We continuously improve our skills, processes, and service delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Every recommendation we make begins with understanding our customer's needs.",
  },
];

// ─── 7.4 Why Customers Trust SunLife ────────────────────────────────────────
export const whyCustomersTrust = {
  heading: "Built on Quality, Honesty, and Reliable Service",
  intro:
    "Trust is earned through consistent results, professional service, and a commitment to doing what's right for every customer. At SunLife Solar Electrification, we focus on building long term relationships by providing solutions that genuinely meet our customers' needs.",
  points: [
    {
      icon: MessageSquareHeart,
      title: "Honest Recommendations",
      description: "We recommend systems based on your actual energy requirements, not the most expensive option.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Products",
      description: "We install trusted brands known for performance and durability.",
    },
    {
      icon: Sparkles,
      title: "Clean Installation",
      description: "Our installations are neat, organized, and professionally finished.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "We're available to assist even after your installation is complete.",
    },
    {
      icon: MapPin,
      title: "Nationwide Service",
      description: "Professional service wherever you are in Nigeria.",
    },
    {
      icon: CalendarCheck,
      title: "Experienced Since 2020",
      description: "Years of practical installation experience across different types of projects.",
    },
  ],
};

// ─── 7.5 Meet Our Team ───────────────────────────────────────────────────────
export const meetTheTeam = {
  heading: "The People Behind Every Installation",
  intro:
    "Behind every successful project is a dedicated team committed to delivering quality workmanship and exceptional customer service. Our installers, technicians, and support team work together to ensure every customer receives a professional experience from consultation to completion.",
  imageAlt: "Group photograph of the SunLife Solar Electrification team.",
};

// ─── 7.6 Why We Do What We Do ────────────────────────────────────────────────
export const whyWeDoIt = {
  heading: "More Than Installing Solar Systems",
  body: [
    "For us, solar is about more than equipment.",
    "It's about helping families enjoy uninterrupted evenings at home, enabling businesses to operate with confidence, supporting schools and places of worship, and giving our customers greater independence from unreliable electricity.",
    "Every installation represents another opportunity to improve someone's daily life through dependable energy.",
    "That purpose continues to inspire everything we do.",
  ],
};

// ─── 7.7 Our Promise ─────────────────────────────────────────────────────────
export const ourPromise = {
  heading: "Our Commitment to Every Customer",
  intro: "When you choose SunLife Solar Electrification, you're choosing a team committed to quality, honesty, and professionalism. We promise to:",
  commitments: [
    "Listen to your needs before making recommendations.",
    "Deliver clean, professional installations.",
    "Use trusted products from reputable manufacturers.",
    "Provide honest advice every step of the way.",
    "Stand by our work with dependable after sales support.",
  ],
  closing:
    "Our goal is simple: to build lasting relationships by delivering energy solutions our customers can trust.",
};

// ─── 7.8 Final CTA ────────────────────────────────────────────────────────────
export const aboutFinalCta = {
  heading: "Let's Build Your Reliable Energy Solution Together",
  body: [
    "Whether you're planning your first solar installation or upgrading an existing system, our team is ready to help.",
    "Let's discuss your energy needs and design a solution that works for your home or business.",
  ],
  primaryCta: { label: "Get a Free Quote", href: "/contact?intent=quote" },
  secondaryCta: { label: "Book a Site Inspection", href: "/contact?intent=inspection" },
};
