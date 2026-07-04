import type { Metadata } from "next";
import { siteConfig, contactInfo, businessHours } from "@/content/site-config";

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

/** Base metadata applied via the root layout; pages override title/description per-route. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "solar panel installation Nigeria",
    "hybrid inverter installation",
    "lithium battery installation",
    "CCTV installation Nigeria",
    "electrical wiring services",
    "solar maintenance",
    "renewable energy solutions Nigeria",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

/** LocalBusiness + Organization structured data (Section 17). Rendered once in the root layout. */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contactInfo.phones[0].number,
    email: contactInfo.email.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.line1,
      addressLocality: "Abeokuta",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contactInfo.address.lat,
      longitude: contactInfo.address.lng,
    },
    areaServed: "NG",
    priceRange: "$$",
    openingHoursSpecification: businessHours.map((b) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: b.days,
      description: b.hours,
    })),
    sameAs: [],
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage structured data (Section 17 — Schema.org) for FAQ rich results. */
export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
