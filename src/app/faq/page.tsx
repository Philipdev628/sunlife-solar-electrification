import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/motion";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { absoluteUrl, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { faqs } from "@/content/faqs";
import { faqHero, faqCta } from "@/content/faq-page";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about solar panel installation, hybrid inverters, lithium batteries, maintenance, warranties, and working with SunLife Solar Electrification.",
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: {
    title: "FAQ | SunLife Solar Electrification",
    description: "Common questions about solar, batteries, inverters, and installation — answered.",
    url: absoluteUrl("/faq"),
  },
};

export default function FaqPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);
  const faqJsonLd = buildFaqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-surface-light section-padding" aria-labelledby="faq-hero-heading">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="blue" className="mb-4">{faqHero.pageLabel}</Badge>
            <h1 id="faq-hero-heading" className="text-4xl font-heading font-bold tracking-tight text-brand-navy sm:text-h1">
              {faqHero.heading}
            </h1>
            <p className="mt-5 text-body-lg text-brand-charcoal/80">{faqHero.intro}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white section-padding" aria-labelledby="faq-list-heading">
        <Container>
          <h2 id="faq-list-heading" className="sr-only">All Frequently Asked Questions</h2>
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-white px-6 shadow-card sm:px-8">
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-light py-16 text-center">
        <Container>
          <Reveal>
            <h2 className="text-h3 font-heading font-bold text-brand-navy">{faqCta.heading}</h2>
            <p className="mt-2 text-body text-brand-charcoal/70">{faqCta.body}</p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href={faqCta.cta.href}>{faqCta.cta.label}</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
