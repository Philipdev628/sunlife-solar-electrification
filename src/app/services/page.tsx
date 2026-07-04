import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo } from "@/content/site-config";
import { services } from "@/content/services";
import { stockImages } from "@/content/stock-images";
import { servicesHero, servicesOverview, whyChooseForProject, servicesFinalCta } from "@/content/services-page";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Solar panel installation, hybrid inverters, lithium batteries, CCTV, electrical wiring, maintenance, and custom solar solutions — delivered by SunLife Solar Electrification across Nigeria.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    title: "Our Services | SunLife Solar Electrification",
    description:
      "Complete solar & electrical solutions designed around your energy needs — from installation to long-term support.",
    url: absoluteUrl("/services"),
  },
};

export default function ServicesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── 8.1 Services Hero ── */}
      <section className="relative overflow-hidden bg-surface-light" aria-labelledby="services-hero-heading">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[50fr_50fr] md:py-24">
          <Reveal>
            <Badge variant="blue" className="mb-5 text-sm">{servicesHero.pageLabel}</Badge>
            <h1
              id="services-hero-heading"
              className="text-4xl font-heading font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-h1"
            >
              {servicesHero.heading}
            </h1>
            <div className="mt-5 space-y-4 text-body text-brand-charcoal/80 sm:text-body-lg">
              {servicesHero.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" fullWidthOnMobile>
                <Link href={servicesHero.primaryCta.href}>{servicesHero.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" fullWidthOnMobile>
                <Link href={servicesHero.secondaryCta.href}>{servicesHero.secondaryCta.label}</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal type="fade" delay={0.12}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-floating ring-1 ring-black/5 lg:aspect-[5/4]">
              <Image
                src={stockImages.realServicesHero.src}
                alt={servicesHero.imageAlt || stockImages.realServicesHero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 8.2 Services Overview grid ── */}
      <section className="bg-white section-padding" aria-labelledby="services-overview-heading">
        <Container>
          <Reveal>
            <SectionHeading
              label={servicesOverview.sectionLabel}
              heading={servicesOverview.heading}
              headingId="services-overview-heading"
              intro={servicesOverview.intro}
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
                    <h3 className="mb-2 text-h4 font-heading font-semibold text-brand-navy">{service.title}</h3>
                    <p className="flex-1 text-small text-brand-charcoal/75">{service.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-1 text-small font-semibold text-brand-blue">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 8.12 Why Choose SunLife for Your Project ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="why-project-heading">
        <Container>
          <Reveal>
            <SectionHeading
              label={whyChooseForProject.sectionLabel}
              heading={whyChooseForProject.heading}
              headingId="why-project-heading"
              intro={whyChooseForProject.intro}
              headingClassName="max-w-3xl mx-auto"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" staggerDelay={0.05}>
            {whyChooseForProject.points.map(({ icon: Icon, label }, i) => (
              <StaggerItem key={label}>
                <div className="flex h-full flex-col items-center gap-3 rounded-card border border-border bg-white p-5 text-center shadow-card">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${i % 3 === 1 ? "bg-brand-gold/15" : "bg-brand-blue-light"}`}>
                    <Icon className={`h-5 w-5 ${i % 3 === 1 ? "text-brand-gold-dark" : "text-brand-blue"}`} aria-hidden="true" />
                  </div>
                  <p className="text-small font-semibold text-brand-navy">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href={whyChooseForProject.cta.href}>{whyChooseForProject.cta.label}</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ── 8.13 Final CTA ── */}
      <section className="relative bg-brand-blue section-padding overflow-hidden" aria-labelledby="services-cta-heading">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-white/5" />
          <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-white/5" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 id="services-cta-heading" className="text-3xl font-heading font-bold text-white sm:text-h2">
              {servicesFinalCta.heading}
            </h2>
            <div className="mx-auto mt-5 max-w-2xl space-y-3">
              {servicesFinalCta.body.map((para, i) => (
                <p key={i} className="text-body text-white/85">{para}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="solidWhite">
                <Link href={servicesFinalCta.primaryCta.href}>{servicesFinalCta.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outlineWhite">
                <Link href={servicesFinalCta.secondaryCta.href}>{servicesFinalCta.secondaryCta.label}</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-white/75 sm:flex-row sm:gap-8">
              <a href={contactInfo.phones[0].href} className="text-body font-medium hover:text-white transition-colors duration-fast">
                {contactInfo.phones[0].number}
              </a>
              <a href={contactInfo.email.href} className="text-body font-medium hover:text-white transition-colors duration-fast">
                {contactInfo.email.address}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
