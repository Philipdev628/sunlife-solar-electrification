import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { StatCounter } from "@/components/common/stat-counter";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo } from "@/content/site-config";
import { projects } from "@/content/projects";
import { stockImages, projectImageMap } from "@/content/stock-images";
import {
  projectsHero,
  installationCategories,
  projectGallery,
  projectStats,
  workmanshipPromise,
  projectsFinalCta,
} from "@/content/projects-page";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse completed solar, electrical, and CCTV installations by SunLife Solar Electrification across homes, businesses, churches, and schools in Nigeria.",
  alternates: { canonical: absoluteUrl("/projects") },
  openGraph: {
    title: "Our Projects | SunLife Solar Electrification",
    description: "See the quality behind every SunLife Solar Electrification installation.",
    url: absoluteUrl("/projects"),
  },
};

export default function ProjectsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── 9.1 Projects Hero ── */}
      <section className="relative overflow-hidden bg-surface-light" aria-labelledby="projects-hero-heading">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[50fr_50fr] md:py-24">
          <Reveal>
            <Badge variant="blue" className="mb-5 text-sm">{projectsHero.pageLabel}</Badge>
            <h1
              id="projects-hero-heading"
              className="text-4xl font-heading font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-h1"
            >
              {projectsHero.heading}
            </h1>
            <div className="mt-5 space-y-4 text-body text-brand-charcoal/80 sm:text-body-lg">
              {projectsHero.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={projectsHero.cta.href}>{projectsHero.cta.label}</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal type="fade" delay={0.12}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-floating ring-1 ring-black/5 lg:aspect-[5/4]">
              <Image
                src={stockImages.realProjectsHero.src}
                alt={projectsHero.imageAlt || stockImages.realProjectsHero.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 9.2 Installation Categories ── */}
      <section className="bg-white section-padding" aria-labelledby="categories-heading">
        <Container>
          <Reveal>
            <SectionHeading
              heading={installationCategories.heading}
              headingId="categories-heading"
              intro={installationCategories.intro}
              headingClassName="max-w-3xl mx-auto"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
            {installationCategories.categories.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <Card hoverLift className="flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light">
                    <Icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="text-h4 font-heading font-semibold text-brand-navy">{title}</h3>
                  <p className="flex-1 text-small text-brand-charcoal/75">{description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 9.3 Project Gallery ── */}
      <section className="bg-surface-blue-tint section-padding" aria-labelledby="gallery-heading">
        <Container>
          <Reveal>
            <SectionHeading
              heading={projectGallery.heading}
              headingId="gallery-heading"
              intro={projectGallery.intro}
              headingClassName="max-w-3xl mx-auto"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
            {projects.map((project) => {
              const image = stockImages[projectImageMap[project.id] ?? "residentialHome"];
              return (
                <StaggerItem key={project.id}>
                  <div className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow duration-default hover:shadow-card-hover">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={project.imageAlt || image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-heading text-[17px] font-bold text-brand-navy">{project.title}</h3>
                      <p className="mt-1 text-small font-medium text-brand-gold-dark">{project.location}</p>
                      <p className="mt-2 flex-1 text-small text-brand-charcoal/75">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.equipment.map((item) => (
                          <Badge key={item} variant="outline" className="text-[11px]">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 9.4 Project Statistics ── */}
      <section className="bg-brand-navy section-padding" aria-labelledby="stats-heading">
        <Container>
          <Reveal>
            <h2 id="stats-heading" className="text-center text-3xl font-heading font-bold text-white sm:text-h2">
              {projectStats.heading}
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5" staggerDelay={0.06}>
            {projectStats.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                    {stat.displayAs ? (
                      stat.displayAs
                    ) : (
                      <StatCounter to={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-small font-medium text-white/70">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* ── 9.6 Our Workmanship Promise ── */}
      <section className="bg-white section-padding" aria-labelledby="promise-heading">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="promise-heading" className="text-3xl font-heading font-bold text-brand-navy sm:text-h2">
              {workmanshipPromise.heading}
            </h2>
            <div className="mt-5 space-y-3 text-body-lg text-brand-charcoal/80">
              {workmanshipPromise.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={workmanshipPromise.cta.href}>{workmanshipPromise.cta.label}</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 9.7 Final CTA ── */}
      <section className="relative bg-brand-blue section-padding overflow-hidden" aria-labelledby="projects-cta-heading">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-white/5" />
          <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-white/5" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 id="projects-cta-heading" className="text-3xl font-heading font-bold text-white sm:text-h2">
              {projectsFinalCta.heading}
            </h2>
            <div className="mx-auto mt-5 max-w-2xl space-y-3">
              {projectsFinalCta.body.map((para, i) => (
                <p key={i} className="text-body text-white/85">{para}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="solidWhite">
                <Link href={projectsFinalCta.primaryCta.href}>{projectsFinalCta.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outlineWhite">
                <Link href={projectsFinalCta.secondaryCta.href}>{projectsFinalCta.secondaryCta.label}</Link>
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
