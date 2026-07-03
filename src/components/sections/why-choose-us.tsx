import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { whyChooseUs } from "@/content/homepage";

export function WhyChooseUsSection() {
  const { sectionLabel, heading, intro, features, supportingHeading, supportingBody, ctaHeading, ctaSubtext, primaryCta, secondaryCta } = whyChooseUs;

  return (
    <section className="relative overflow-hidden bg-surface-light section-padding" aria-labelledby="why-heading">
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            label={sectionLabel}
            heading={heading}
            headingId="why-heading"
            intro={intro.split("\n\n")[0]}
            headingClassName="max-w-3xl mx-auto"
          />
        </Reveal>

        {/* Feature cards grid */}
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
          {features.map(({ icon: Icon, title, description }, i) => (
            <StaggerItem key={title}>
              <Card hoverLift accentTop={i % 3 === 2 ? "gold" : "blue"} className="flex h-full flex-col gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${i % 3 === 2 ? "bg-brand-gold/15" : "bg-brand-blue-light"}`}>
                  <Icon className={`h-6 w-6 ${i % 3 === 2 ? "text-brand-gold-dark" : "text-brand-blue"}`} aria-hidden="true" />
                </div>
                <h3 className="text-h4 font-heading font-semibold text-brand-navy">{title}</h3>
                <p className="flex-1 text-small text-brand-charcoal/75">{description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Supporting copy + CTA block */}
        <Reveal className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-white p-8 text-center shadow-card sm:p-10">
          <h3 className="text-h3 font-heading font-bold text-brand-navy">{supportingHeading}</h3>
          <div className="mt-4 space-y-3 text-body text-brand-charcoal/80">
            {supportingBody.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <h4 className="mt-8 text-h4 font-heading font-semibold text-brand-navy">{ctaHeading}</h4>
          <p className="mt-2 text-body text-brand-charcoal/70">{ctaSubtext}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
