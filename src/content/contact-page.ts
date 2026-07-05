import { MessageSquareHeart, ClipboardCheck, Zap, ClipboardList, MapPin } from "lucide-react";

export const contactHero = {
  heading: "Let's Talk About Your Energy Needs",
  body: "Whether you're ready to install a solar system, need expert advice, or simply have questions, our team is here to help.",
};

export const serviceOptions = [
  "Solar Panel Installation",
  "Hybrid Inverter Installation",
  "Inverter & Charge Controller Systems",
  "Lithium Battery Installation & Replacement",
  "System Maintenance & Upgrades",
  "Site Inspection & Energy Consultation",
  "CCTV Installation",
  "Electrical Wiring & Installations",
  "Custom Solar Solutions",
  "Not sure, I need advice",
] as const;

export const whyContactSunLife = {
  heading: "Why Contact SunLife",
  points: [
    { icon: MessageSquareHeart, label: "Honest advice" },
    { icon: ClipboardCheck, label: "Professional consultation" },
    { icon: Zap, label: "Fast response" },
    { icon: ClipboardList, label: "Tailored recommendations" },
    { icon: MapPin, label: "Nationwide support" },
  ],
};

export const contactFinalCta = {
  heading: "Need Reliable Power?",
  body: "Let's design the right solution together.",
};
