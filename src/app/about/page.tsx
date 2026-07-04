import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo } from "@/content/site-config";
import { stockImages } from "@/content/stock-images";
import {
  aboutHero,
  ourStory,
  missionVision,
  coreValues,
  whyCustomersTrust,
  meetTheTeam,
  whyWeDoIt,
  ourPromise,
  aboutFinalCta,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how SunLife Solar Electrification has delivered reliable solar and electrical installations across Nigeria since 2020 — built on honesty, quality workmanship, and long-term customer support.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About SunLife Solar Electrification",
    description:
      "Since 2020, SunLife Solar Electrification has helped homes, businesses, schools, and churches enjoy reliable, sustainable energy.",
    url: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── 7.1 About Hero ── */}
      <section className="relative overflow-hidden bg-surface-light" aria-labelledby="about-hero-heading">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[50fr_50fr] md:py-24">
          <Reveal>
            <Badge variant="blue" className="mb-5 text-sm">{aboutHero.pageLabel}</Badge>
            <h1
              id="about-hero-heading"
              className="text-4xl font-heading font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-h1"
            >
              {aboutHero.heading}
            </h1>
            <div className="mt-5 space-y-4 text-body text-brand-charcoal/80 sm:text-body-lg">
              {aboutHero.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={aboutHero.cta.href}>{aboutHero.cta.label}</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal type="fade" delay={0.12}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-floating ring-1 ring-black/5 lg:aspect-[5/4]">
              <Image
                src={stockImages.realAboutHero.src}
                alt={aboutHero.imageAlt || stockImages.realAboutHero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 7.2 Our Story ── */}
      <section className="bg-white section-padding" aria-labelledby="story-heading">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[55fr_45fr]">
            <Reveal>
              <h2 id="story-heading" className="text-3xl font-heading font-bold tracking-tight text-brand-navy sm:text-h2">
                {ourStory.heading}
              </h2>
              <div className="mt-5 space-y-4 text-body text-brand-charcoal/80">
                {ourStory.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal type="fade" delay={0.12} className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
                <Image
                  src={stockImages.realAboutStory.src}
                  alt={ourStory.imageAlt || stockImages.realAboutStory.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 7.3 Mission, Vision & Core Values ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="mission-heading">
        <Container>
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="text-left">
                <h2 id="mission-heading" className="text-h4 font-heading font-bold text-brand-navy">Our Mission</h2>
                <p className="mt-3 text-body text-brand-charcoal/80">{missionVision.mission}</p>
              </Card>
              <Card className="text-left">
                <h3 className="text-h4 font-heading font-bold text-brand-navy">Our Vision</h3>
                <p className="mt-3 text-body text-brand-charcoal/80">{missionVision.vision}</p>
              </Card>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-14 max-w-2xl text-center">
            <Badge variant="blue" className="mb-4">Core Values</Badge>
            <h3 className="text-3xl font-heading font-bold text-brand-navy sm:text-h2">What Guides Every Installation</h3>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.06}>
            {coreValues.map(({ icon: Icon, title, description }, i) => (
              <StaggerItem key={title}>
                <Card hoverLift accentTop={i % 2 === 1 ? "gold" : "blue"} className="flex h-full flex-col items-center gap-3 text-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${i % 2 === 1 ? "bg-brand-gold/15" : "bg-brand-blue-light"}`}>
                    <Icon className={`h-6 w-6 ${i % 2 === 1 ? "text-brand-gold-dark" : "text-brand-blue"}`} aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-brand-navy">{title}</h4>
                  <p className="text-small text-brand-charcoal/70">{description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 7.4 Why Customers Trust SunLife ── */}
      <section className="bg-surface-blue-tint section-padding" aria-labelledby="trust-heading">
        <Container>
          <Reveal>
            <SectionHeading
              label="Why Customers Trust Us"
              heading={whyCustomersTrust.heading}
              headingId="trust-heading"
              intro={whyCustomersTrust.intro}
              headingClassName="max-w-3xl mx-auto"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
            {whyCustomersTrust.points.map(({ icon: Icon, title, description }, i) => (
              <StaggerItem key={title}>
                <Card hoverLift accentTop={i % 3 === 1 ? "gold" : "blue"} className="flex h-full flex-col gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${i % 3 === 1 ? "bg-brand-gold/15" : "bg-brand-blue-light"}`}>
                    <Icon className={`h-6 w-6 ${i % 3 === 1 ? "text-brand-gold-dark" : "text-brand-blue"}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-h4 font-heading font-semibold text-brand-navy">{title}</h3>
                  <p className="flex-1 text-small text-brand-charcoal/75">{description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 7.5 Meet Our Team ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="team-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[45fr_55fr]">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
                <Image
                  src={stockImages.technicianInstalling.src}
                  alt={meetTheTeam.imageAlt || stockImages.technicianInstalling.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal type="fade" delay={0.1}>
              <Badge variant="blue" className="mb-4">Our Team</Badge>
              <h2 id="team-heading" className="text-3xl font-heading font-bold tracking-tight text-brand-navy sm:text-h2">
                {meetTheTeam.heading}
              </h2>
              <p className="mt-4 text-body text-brand-charcoal/80">{meetTheTeam.intro}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 7.6 Why We Do What We Do ── */}
      <section className="bg-white section-padding" aria-labelledby="why-we-do-heading">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="why-we-do-heading" className="text-3xl font-heading font-bold text-brand-navy sm:text-h2">
              {whyWeDoIt.heading}
            </h2>
            <div className="mt-5 space-y-3 text-body-lg text-brand-charcoal/80">
              {whyWeDoIt.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 7.7 Our Promise ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="promise-heading">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <h2 id="promise-heading" className="text-3xl font-heading font-bold text-brand-navy sm:text-h2">
                {ourPromise.heading}
              </h2>
              <p className="mt-4 text-body text-brand-charcoal/80">{ourPromise.intro}</p>
            </Reveal>

            <Reveal delay={0.08} className="mt-8 rounded-2xl border border-border bg-white p-8 shadow-card">
              <ul className="space-y-3">
                {ourPromise.commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-brand-charcoal/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-state-success" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-body font-medium text-brand-navy">{ourPromise.closing}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 7.8 Final CTA ── */}
      <section className="relative bg-brand-blue section-padding overflow-hidden" aria-labelledby="about-cta-heading">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-white/5" />
          <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-white/5" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 id="about-cta-heading" className="text-3xl font-heading font-bold text-white sm:text-h2">
              {aboutFinalCta.heading}
            </h2>
            <div className="mx-auto mt-5 max-w-2xl space-y-3">
              {aboutFinalCta.body.map((para, i) => (
                <p key={i} className="text-body text-white/85">{para}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="solidWhite">
                <Link href={aboutFinalCta.primaryCta.href}>{aboutFinalCta.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outlineWhite">
                <Link href={aboutFinalCta.secondaryCta.href}>{aboutFinalCta.secondaryCta.label}</Link>
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
