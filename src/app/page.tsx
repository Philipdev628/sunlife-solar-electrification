import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ServicesSection } from "@/components/sections/services-grid";
import { ProcessSection } from "@/components/sections/process";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { BrandsSection } from "@/components/sections/brands";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqPreviewSection } from "@/components/sections/faq-preview";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Reliable Solar Installation in Nigeria",
  description:
    "SunLife Solar Electrification provides professional solar panel installation, hybrid inverter systems, lithium batteries, CCTV installation, electrical wiring, maintenance, and system upgrades across Nigeria. Get a free quote today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const breadcrumb = buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/*
       * Section order mirrors Spec Sections 6.2 – 6.11.
       * Alternating white / light-gray backgrounds create visual rhythm (Spec 5.9).
       * White:      Hero, Problem & Solution, Services, Featured Projects, Testimonials, FAQ Preview
       * Light Gray: Why Choose Us, Process, Brands
       * Blue:       Final CTA
       */}
      <HeroSection />
      <ProblemSolutionSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <BrandsSection />
      <TestimonialsSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </>
  );
}
