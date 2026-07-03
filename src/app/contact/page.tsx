import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { ContactForm } from "@/components/forms/contact-form";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo, businessHours } from "@/content/site-config";
import { contactHero, whyContactSunLife, contactFinalCta } from "@/content/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SunLife Solar Electrification for a free quote, site inspection, or expert advice on solar, inverter, battery, CCTV, and electrical installations across Nigeria.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact SunLife Solar Electrification",
    description: "Let's talk about your energy needs — request a free quote today.",
    url: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const mapQuery = encodeURIComponent(contactInfo.address.full);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── 11.1 Contact Hero ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="contact-hero-heading">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 id="contact-hero-heading" className="text-4xl font-heading font-bold tracking-tight text-brand-navy sm:text-h1">
              {contactHero.heading}
            </h1>
            <p className="mt-5 text-body-lg text-brand-charcoal/80">{contactHero.body}</p>
          </Reveal>
        </Container>
      </section>

      {/* ── 11.2 Contact Information strip ── */}
      <section className="bg-white pt-14" aria-labelledby="contact-info-heading">
        <Container>
          <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.06}>
            <StaggerItem>
              <Card className="flex h-full flex-col gap-3">
                <MapPin className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <p className="font-heading text-[15px] font-bold text-brand-navy">Office Address</p>
                <p className="text-small text-brand-charcoal/75">{contactInfo.address.full}</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="flex h-full flex-col gap-3">
                <Phone className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <p className="font-heading text-[15px] font-bold text-brand-navy">Phone</p>
                <div className="space-y-1 text-small">
                  {contactInfo.phones.map((p) => (
                    <a key={p.number} href={p.href} className="block text-brand-charcoal/75 hover:text-brand-blue">
                      {p.number}
                    </a>
                  ))}
                </div>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="flex h-full flex-col gap-3">
                <MessageCircle className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <p className="font-heading text-[15px] font-bold text-brand-navy">WhatsApp</p>
                <a href={contactInfo.whatsapp.href} target="_blank" rel="noopener noreferrer" className="text-small text-brand-charcoal/75 hover:text-brand-blue">
                  {contactInfo.whatsapp.number}
                </a>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="flex h-full flex-col gap-3">
                <Mail className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <p className="font-heading text-[15px] font-bold text-brand-navy">Email</p>
                <a href={contactInfo.email.href} className="break-all text-small text-brand-charcoal/75 hover:text-brand-blue">
                  {contactInfo.email.address}
                </a>
                <p className="text-[12px] font-medium text-brand-blue">Service Coverage: {contactInfo.serviceCoverage}</p>
              </Card>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 11.3 Contact Form + 11.4 Map + 11.5 Business Hours ── */}
      <section className="bg-white section-padding" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[60fr_40fr]">
            <Reveal>
              <h2 id="contact-form-heading" className="text-h3 font-heading font-bold text-brand-navy">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-body text-brand-charcoal/70">
                Fill in the form below and a member of our team will get back to you shortly.
              </p>
              <div className="mt-6">
                <Suspense fallback={<div className="h-96 animate-pulse rounded-card bg-surface-light" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="space-y-6">
              {/* 11.4 Google Maps embed — no API key required for the basic query embed */}
              <div className="overflow-hidden rounded-card border border-border shadow-card">
                <iframe
                  title="SunLife Solar Electrification office location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* 11.5 Business Hours */}
              <Card>
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  <p className="font-heading text-[15px] font-bold text-brand-navy">Business Hours</p>
                </div>
                <dl className="space-y-2">
                  {businessHours.map((row) => (
                    <div key={row.days} className="flex items-center justify-between text-small">
                      <dt className="text-brand-charcoal/70">{row.days}</dt>
                      <dd className="font-medium text-brand-navy">{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </Card>

              {/* 11.6 Why Contact SunLife */}
              <Card>
                <p className="mb-3 font-heading text-[15px] font-bold text-brand-navy">{whyContactSunLife.heading}</p>
                <ul className="space-y-2.5">
                  {whyContactSunLife.points.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5 text-small text-brand-charcoal/80">
                      <Icon className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 11.7 CTA ── */}
      <section className="relative bg-brand-blue py-14 overflow-hidden" aria-labelledby="contact-cta-heading">
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 id="contact-cta-heading" className="text-h4 font-heading font-bold text-white sm:text-h3">
              {contactFinalCta.heading}
            </h2>
            <p className="mt-2 text-body text-white/85">{contactFinalCta.body}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
