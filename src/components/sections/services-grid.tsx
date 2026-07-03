import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { services } from "@/content/services";
import { servicesSection } from "@/content/homepage";

export function ServicesSection() {
  const { sectionLabel, heading, intro, primaryCta, secondaryCta } = servicesSection;

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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-card transition-all duration-default ease-brand hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light transition-colors duration-fast group-hover:bg-brand-blue">
                    <Icon
                      className="h-6 w-6 text-brand-blue transition-colors duration-fast group-hover:text-white"
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

        <Reveal className="mt-14 text-center">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
