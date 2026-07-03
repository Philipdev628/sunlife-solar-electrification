import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { processSection } from "@/content/homepage";

export function ProcessSection() {
  const { sectionLabel, heading, intro, steps, supportingHeading, supportingBody, ctaHeading, ctaSubtext, primaryCta, secondaryCta } = processSection;

  return (
    <section className="bg-surface-light section-padding" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <SectionHeading
            label={sectionLabel}
            heading={heading}
            headingId="process-heading"
            intro={intro}
          />
        </Reveal>

        {/* Timeline — horizontal on md+, vertical on mobile */}
        <div className="relative mt-14">
          {/* Connecting line (desktop only) — offset to align with the center of the step bubbles */}
          <div
            className="absolute left-0 right-0 top-[calc(2rem+1px)] hidden h-px bg-brand-blue/20 md:block"
            aria-hidden="true"
          />

          <StaggerGroup
            className="relative grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6"
            staggerDelay={0.08}
          >
            {steps.map(({ number, icon: Icon, title, description }, i) => {
              const isLast = i === steps.length - 1;
              return (
                <StaggerItem key={number}>
                  <div className="flex flex-col items-center text-center md:items-start md:text-left lg:items-center lg:text-center">
                    {/* Step number bubble */}
                    <div
                      className={`relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border-2 bg-white shadow-btn-sm ${isLast ? "border-brand-gold" : "border-brand-blue"}`}
                    >
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isLast ? "text-brand-gold-dark" : "text-brand-blue"}`}>
                        {number}
                      </span>
                      <Icon className={`h-5 w-5 ${isLast ? "text-brand-gold-dark" : "text-brand-blue"}`} aria-hidden="true" />
                    </div>

                    {/* Connector line (mobile) */}
                    <div className="my-2 h-6 w-px bg-brand-blue/20 md:hidden" aria-hidden="true" />

                    <h3 className="mt-3 font-heading text-[15px] font-bold text-brand-navy">{title}</h3>
                    <p className="mt-1.5 text-small text-brand-charcoal/70">{description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Supporting copy */}
        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-h3 font-heading font-bold text-brand-navy">{supportingHeading}</h3>
          <div className="mt-3 space-y-2 text-body text-brand-charcoal/80">
            {supportingBody.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="mt-6 font-heading text-lg font-semibold text-brand-navy">{ctaHeading}</p>
          <p className="mt-1 text-body text-brand-charcoal/70">{ctaSubtext}</p>
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
