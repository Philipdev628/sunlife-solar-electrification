import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/motion";
import { homepageFaqs } from "@/content/faqs";
import { faqPreviewSection } from "@/content/homepage";

export function FaqPreviewSection() {
  const { sectionLabel, heading, ctaNote, ctaSubtext, cta, viewAllCta } = faqPreviewSection;

  return (
    <section className="bg-white section-padding" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading label={sectionLabel} heading={heading} headingId="faq-heading" />
        </Reveal>

        <Reveal className="mt-10">
          <FaqAccordion faqs={homepageFaqs} />
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
          <div>
            <p className="font-heading font-semibold text-brand-navy">{ctaNote}</p>
            <p className="text-small text-brand-charcoal/70">{ctaSubtext}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={viewAllCta.href}>{viewAllCta.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
