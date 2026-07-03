import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/motion";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo } from "@/content/site-config";
import { services, getServiceBySlug } from "@/content/services";
import { stockImages, serviceImageMap } from "@/content/stock-images";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: absoluteUrl(`/services/${slug}`) },
    openGraph: {
      title: `${service.title} | SunLife Solar Electrification`,
      description: service.shortDescription,
      url: absoluteUrl(`/services/${slug}`),
    },
  };
}

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const { overview, lists, ctaLabel } = service.detail;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  // Other services, for cross-navigation at the foot of the page.
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const heroImage = stockImages[serviceImageMap[service.slug] ?? "heroRooftop"];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Service hero ── */}
      <section className="relative overflow-hidden bg-surface-light section-padding" aria-labelledby="service-heading">
        <div className="pointer-events-none absolute inset-0 bg-radial-blue-wash" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-[55fr_45fr]">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-small text-brand-charcoal/60">
                <Link href="/services" className="hover:text-brand-blue">Services</Link>
                <span aria-hidden="true">/</span>
                <span className="text-brand-navy">{service.title}</span>
              </nav>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light">
                <Icon className="h-7 w-7 text-brand-blue" aria-hidden="true" />
              </div>
              <h1 id="service-heading" className="text-3xl font-heading font-bold tracking-tight text-brand-navy sm:text-h1">
                {service.title}
              </h1>
              <div className="mt-5 space-y-4 text-body-lg text-brand-charcoal/80">
                {overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal type="fade" delay={0.12}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-floating ring-1 ring-black/5">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Detail lists (What's Included / Ideal For / Benefits / Brands / etc.) ── */}
      <section className="bg-surface-blue-tint section-padding" aria-labelledby="service-details-heading">
        <Container>
          <h2 id="service-details-heading" className="sr-only">{service.title} details</h2>
          <div className={`grid gap-6 ${lists.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-2xl"}`}>
            {lists.map((list, i) => (
              <Reveal key={list.label}>
                <Card accentTop={i === 1 ? "gold" : "blue"} className="h-full">
                  <h3 className="text-h4 font-heading font-bold text-brand-navy">{list.label}</h3>
                  <ul className="mt-4 space-y-3">
                    {list.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-brand-charcoal/80">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-state-success" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-2xl bg-brand-blue-light p-8 text-center sm:p-10">
            <p className="text-h4 font-heading font-bold text-brand-navy">
              Ready to get started with {service.title.toLowerCase()}?
            </p>
            <p className="mt-2 text-body text-brand-charcoal/70">
              Tell us about your property and energy needs — we'll recommend the right solution and next steps.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={`/contact?intent=quote&service=${service.slug}`}>{ctaLabel}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Browse All Services</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Related services ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="related-services-heading">
        <Container>
          <Reveal>
            <h2 id="related-services-heading" className="text-h3 font-heading font-bold text-brand-navy">
              You Might Also Need
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((s) => {
              const OtherIcon = s.icon;
              return (
                <Reveal key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-card transition-all duration-default ease-brand hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light transition-colors duration-fast group-hover:bg-brand-blue">
                      <OtherIcon className="h-5 w-5 text-brand-blue transition-colors duration-fast group-hover:text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1.5 text-body-lg font-heading font-semibold text-brand-navy">{s.title}</h3>
                    <p className="flex-1 text-small text-brand-charcoal/70">{s.shortDescription}</p>
                    <div className="mt-3 flex items-center gap-1 text-small font-semibold text-brand-blue">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Contact strip ── */}
      <section className="bg-white pb-20 pt-4 text-center">
        <Container>
          <p className="text-body text-brand-charcoal/70">
            Prefer to talk it through first? Call{" "}
            <a href={contactInfo.phones[0].href} className="font-semibold text-brand-blue hover:underline">
              {contactInfo.phones[0].number}
            </a>{" "}
            or email{" "}
            <a href={contactInfo.email.href} className="font-semibold text-brand-blue hover:underline">
              {contactInfo.email.address}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
