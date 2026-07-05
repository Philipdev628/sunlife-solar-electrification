import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { brandsSection } from "@/content/homepage";

export function BrandsSection() {
  const { sectionLabel, heading, intro, brands, supporting, ctaNote, ctaSubtext, cta } = brandsSection;

  return (
    <section className="bg-surface-gold-tint section-padding" aria-labelledby="brands-heading">
      <Container>
        <Reveal>
          <SectionHeading label={sectionLabel} heading={heading} headingId="brands-heading" intro={intro} />
        </Reveal>

        {/* Brand tiles — grayscale by default, full opacity on hover (Spec 6.8) */}
        <StaggerGroup
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          staggerDelay={0.07}
        >
          {brands.map(({ name, note }) => (
            <StaggerItem key={name}>
              <div className="group flex flex-col items-center justify-center rounded-xl border border-border bg-white px-4 py-6 shadow-card transition-all duration-default hover:border-brand-blue/30 hover:shadow-card-hover">
                {/* Brand name wordmark — replace with <Image> once official logos are supplied */}
                <span className="font-heading text-xl font-bold text-brand-charcoal/40 transition-colors duration-fast group-hover:text-brand-blue">
                  {name}
                </span>
                {note && (
                  <span className="mt-1 rounded-badge bg-brand-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-gold-dark">
                    {note}
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-body text-brand-charcoal/70">{supporting}</p>
          <p className="mt-6 font-heading text-lg font-semibold text-brand-navy">{ctaNote}</p>
          <p className="mt-1 text-body text-brand-charcoal/70">{ctaSubtext}</p>
          <div className="mt-5">
            <Button asChild size="lg">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
