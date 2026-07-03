/**
 * Site-wide configuration: company identity, contact details, business
 * hours, and social links. This is the single place to update when any
 * of this information changes — every component (header, footer, contact
 * page, JSON-LD schema) reads from here rather than hardcoding values.
 */

export const siteConfig = {
  name: "SunLife Solar Electrification",
  shortName: "SunLife Solar",
  tagline: "Reliable Solar & Electrical Solutions Across Nigeria",
  description:
    "SunLife Solar Electrification provides professional solar panel installation, hybrid inverter systems, lithium batteries, CCTV installation, electrical wiring, maintenance, and system upgrades across Nigeria. Get a free quote today.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunlifesolarelectrification.com",
  establishedYear: 2020,
  serviceArea: "Nationwide",
} as const;

export const contactInfo = {
  phones: [
    { label: "Primary", number: "070 6590 7711", href: "tel:+2347065907711" },
    { label: "Secondary", number: "070 3555 8965", href: "tel:+2347035558965" },
  ],
  whatsapp: {
    number: "070 6590 7711",
    href: "https://wa.me/2347065907711",
  },
  email: {
    address: "sunlifesolarelectric@gmail.com",
    href: "mailto:sunlifesolarelectric@gmail.com",
  },
  address: {
    line1: "3 Road F, Olorunsogo 2, Somorin, Obantoko",
    line2: "Abeokuta, Ogun State, Nigeria",
    full: "3 Road F, Olorunsogo 2, Somorin, Obantoko, Abeokuta, Ogun State, Nigeria",
    // Approximate coordinates for Obantoko, Abeokuta — replace with exact
    // pin coordinates once available (see Section 11.4 of the spec).
    lat: 7.1881,
    lng: 3.3850,
  },
  serviceCoverage: "Nationwide",
} as const;

export const businessHours = [
  { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { days: "Sunday", hours: "Emergency enquiries only" },
] as const;

export const socialLinks = {
  // Populate as accounts are created — components should hide any
  // platform with an empty href rather than rendering a dead link.
  facebook: "",
  instagram: "",
  twitter: "",
  linkedin: "",
  youtube: "",
} as const;

export const trustedBrands = [
  "Cartel",
  "SRNE",
  "Deye",
  "Felicity",
  "5Star",
] as const;
