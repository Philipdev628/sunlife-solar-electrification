export type FAQ = {
  id: string;
  question: string;
  answer: string;
  /** Show on the homepage FAQ preview section (Section 6.10) */
  showOnHomepage?: boolean;
};

/**
 * All 25 FAQs from Spec Section 10. Items marked `showOnHomepage: true`
 * render in the compact accordion on the homepage; the /faq page shows all.
 */
export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "Do you install nationwide?",
    answer:
      "Yes. We provide professional solar and electrical installation services across Nigeria.",
    showOnHomepage: true,
  },
  {
    id: "f2",
    question: "How do I know what size system I need?",
    answer:
      "We carry out a consultation and site inspection before recommending a solution tailored to your energy requirements.",
    showOnHomepage: true,
  },
  {
    id: "f3",
    question: "Do your products come with a warranty?",
    answer:
      "Yes. Manufacturer warranties apply to all eligible products supplied and installed.",
    showOnHomepage: true,
  },
  {
    id: "f4",
    question: "How long does installation take?",
    answer:
      "Installation time depends on the project size, but most residential systems are completed within one to three days after all equipment is available.",
    showOnHomepage: true,
  },
  {
    id: "f5",
    question: "Do you offer maintenance services?",
    answer:
      "Yes. We provide maintenance, troubleshooting, repairs, upgrades, and technical support for existing systems.",
    showOnHomepage: true,
  },
  {
    id: "f6",
    question: "Can you upgrade my existing solar system?",
    answer:
      "Absolutely. We can assess your current system and recommend upgrades such as additional panels, larger batteries, or a higher capacity inverter.",
    showOnHomepage: true,
  },
  // Additional FAQs rendered on the /faq page (Phase 4)
  {
    id: "f7",
    question: "What brands of solar equipment do you install?",
    answer:
      "We install trusted products from Cartel, SRNE, Deye, Felicity, and 5Star. We select the most suitable brand based on your energy requirements, budget, and long term expectations.",
  },
  {
    id: "f8",
    question: "What is the difference between a hybrid inverter and a regular inverter?",
    answer:
      "A hybrid inverter intelligently manages power from solar panels, batteries, and the national grid simultaneously, maximizing efficiency and reliability. A conventional inverter typically relies on battery power alone for backup, without direct solar integration.",
  },
  {
    id: "f9",
    question: "Why are lithium batteries better than lead-acid batteries?",
    answer:
      "Lithium batteries charge faster, last significantly longer (typically 8–15 years versus 3–5 years for lead-acid), require less maintenance, and offer better depth of discharge, meaning you can use more of the stored energy without reducing battery lifespan.",
  },
  {
    id: "f10",
    question: "What happens to my solar system during heavy rain or cloudy weather?",
    answer:
      "Solar panels continue to generate electricity even on cloudy days, although at reduced output. A properly sized battery bank ensures your home or business maintains power during overcast periods.",
  },
  {
    id: "f11",
    question: "How much does a solar system cost in Nigeria?",
    answer:
      "System costs vary depending on your energy requirements, equipment choice, and installation complexity. We provide detailed quotations after assessing your needs so you receive an accurate, transparent price.",
  },
  {
    id: "f12",
    question: "Can solar panels power an entire home or business?",
    answer:
      "Yes, with the right system design. After assessing your energy consumption, we recommend a system capable of meeting your requirements. Many of our customers run their homes and businesses entirely on solar power.",
  },
  {
    id: "f13",
    question: "How long do lithium batteries last?",
    answer:
      "With proper use, our lithium batteries typically last between 8 and 15 years, significantly outperforming traditional lead-acid batteries in both lifespan and performance.",
  },
  {
    id: "f14",
    question: "Can I power my air conditioner with a solar system?",
    answer:
      "Yes, with the right system sizing. Air conditioners require higher power output, so we assess your total energy load carefully and recommend a hybrid inverter and battery configuration capable of handling it comfortably.",
  },
  {
    id: "f15",
    question: "What happens during a power outage?",
    answer:
      "Your hybrid inverter automatically switches to battery or solar power the moment grid electricity is lost, so your home or business continues running without any manual intervention.",
  },
  {
    id: "f16",
    question: "Can you inspect my current solar system?",
    answer:
      "Yes. We offer inspection services for existing systems — whether we installed them or not — to diagnose faults, check performance, and recommend improvements.",
  },
  {
    id: "f17",
    question: "Do you replace batteries?",
    answer:
      "Yes. We replace aging or underperforming batteries and can advise whether a lithium upgrade would improve your system's overall backup performance.",
  },
  {
    id: "f18",
    question: "Do you install CCTV?",
    answer:
      "Yes. We install HD CCTV systems with remote mobile viewing for homes, offices, shops, schools, and other commercial properties nationwide.",
  },
  {
    id: "f19",
    question: "Do you do electrical wiring?",
    answer:
      "Yes. Our team handles residential and commercial wiring, distribution board installation, lighting, power outlets, and general electrical troubleshooting.",
  },
  {
    id: "f20",
    question: "How do I request a quotation?",
    answer:
      "Simply fill out the contact form on our Contact page, call us, or message us on WhatsApp with details of your property and energy needs. We'll respond promptly with next steps.",
  },
  {
    id: "f21",
    question: "Do you provide after sales support?",
    answer:
      "Yes. Our relationship doesn't end at installation — we're available for maintenance, troubleshooting, and support long after your system is up and running.",
  },
  {
    id: "f22",
    question: "Can solar completely replace PHCN electricity?",
    answer:
      "For many homes and businesses, yes — with a properly sized system covering your full energy load. We assess your consumption during consultation to determine if full independence is realistic for your property.",
  },
  {
    id: "f23",
    question: "What affects battery backup time?",
    answer:
      "Backup duration depends on battery capacity, the number and type of appliances running, how efficiently power is used, and how well the system was originally sized for your needs.",
  },
  {
    id: "f24",
    question: "Can I add more panels later?",
    answer:
      "In most cases, yes. We design systems with future expansion in mind wherever possible, and can assess your current setup to confirm what additional capacity it can support.",
  },
  {
    id: "f25",
    question: "How long do solar panels last?",
    answer:
      "Quality solar panels typically last 20 to 25 years or more, with a gradual, minor decline in efficiency over time.",
  },
  {
    id: "f26",
    question: "Is a site inspection necessary before installation?",
    answer:
      "Yes. A site inspection allows us to assess your property, calculate your energy usage accurately, and recommend the right system — this helps avoid costly sizing mistakes.",
  },
  {
    id: "f27",
    question: "Which payment methods do you accept?",
    answer:
      "We accept bank transfers and other standard payment methods. Our team will confirm the available options for your project during the quotation process.",
  },
  {
    id: "f28",
    question: "How quickly can installation begin?",
    answer:
      "Once your quotation is approved and equipment is confirmed available, most residential installations can begin within a few days to a couple of weeks, depending on project scope.",
  },
];

export const homepageFaqs = faqs.filter((f) => f.showOnHomepage);
