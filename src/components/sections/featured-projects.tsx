import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { featuredProjects } from "@/content/projects";
import { featuredProjectsSection } from "@/content/homepage";
import { stockImages, projectImageMap } from "@/content/stock-images";

export function FeaturedProjectsSection() {
  const { sectionLabel, heading, intro, ctaHeading, ctaSubtext, cta, viewAllCta } = featuredProjectsSection;

  return (
    <section className="bg-surface-blue-tint section-padding" aria-labelledby="projects-heading">
      <Container>
        <Reveal>
          <SectionHeading label={sectionLabel} heading={heading} headingId="projects-heading" intro={intro} />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {featuredProjects.map((project) => {
            const image = stockImages[projectImageMap[project.id] ?? "residentialHome"];
            return (
              <StaggerItem key={project.id}>
                <div className="group relative overflow-hidden rounded-card border border-border bg-surface-light shadow-card transition-shadow duration-default hover:shadow-card-hover">
                  {/* Project image — swap `image` in stock-images.ts for a real
                      project photo path once available; no layout changes needed. */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={project.imageAlt || image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-slow group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-badge bg-brand-gold px-3 py-1 text-small font-semibold text-white shadow-sm">
                      Featured
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/70 opacity-0 transition-opacity duration-default group-hover:opacity-100">
                      <Link
                        href="/projects"
                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-blue hover:text-white transition-colors duration-fast"
                      >
                        View Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <h3 className="font-heading text-[17px] font-bold text-brand-navy">{project.title}</h3>
                    <p className="mt-1.5 text-small text-brand-charcoal/75">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="blue" className="text-[11px]">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-14 rounded-2xl bg-brand-blue-light p-8 text-center">
          <p className="text-h4 font-heading font-bold text-brand-navy">{ctaHeading}</p>
          <p className="mt-2 text-body text-brand-charcoal/70">{ctaSubtext}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={viewAllCta.href}>{viewAllCta.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
