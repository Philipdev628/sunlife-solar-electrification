import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { services } from "@/content/services";
import { servicesSection } from "@/content/homepage";

export function ServicesSection() {
  const { sectionLabel, heading, intro, ctaHeading, ctaBody, primaryCta, secondaryCta } = servicesSection;

  return (
    <section className="bg-white section-padding" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <SectionHeading
            label={sectionLabel}
            heading={heading}
            headingId="services-heading"
            intro={intro}
            headingClassName="max-w-3xl mx-auto"
          />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
          {services.map((service, i) => {
            const Icon = service.icon;
            const isGold = i % 3 === 1;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-card transition-all duration-default ease-brand hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-fast group-hover:bg-brand-blue ${isGold ? "bg-brand-gold/15" : "bg-brand-blue-light"}`}
                  >
                    <Icon
                      className={`h-6 w-6 transition-colors duration-fast group-hover:text-white ${isGold ? "text-brand-gold-dark" : "text-brand-blue"}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-h4 font-heading font-semibold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-small text-brand-charcoal/75">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-small font-semibold text-brand-blue">
                    Learn More
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="relative mt-14 overflow-hidden rounded-2xl bg-brand-blue p-8 text-center sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" aria-hidden="true" />
          <h3 className="text-h4 font-heading font-bold text-white">{ctaHeading}</h3>
          <p className="mx-auto mt-2 max-w-xl text-body text-white/85">{ctaBody}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="solidWhite">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outlineWhite">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
