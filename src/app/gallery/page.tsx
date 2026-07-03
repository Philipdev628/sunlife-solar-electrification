import type { Metadata } from "next";
import Link from "next/link";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/motion";
import { FilterableGallery } from "@/components/gallery/filterable-gallery";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { projects } from "@/content/projects";
import { galleryHero, videoGallery, galleryCta } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of completed solar, hybrid inverter, lithium battery, CCTV, and electrical installations by SunLife Solar Electrification across Nigeria.",
  alternates: { canonical: absoluteUrl("/gallery") },
  openGraph: {
    title: "Gallery | SunLife Solar Electrification",
    description: "Real project photos showcasing the quality behind every SunLife installation.",
    url: absoluteUrl("/gallery"),
  },
};

export default function GalleryPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── 10.1 Gallery Hero ── */}
      <section className="relative overflow-hidden bg-surface-light section-padding" aria-labelledby="gallery-hero-heading">
        <div className="pointer-events-none absolute inset-0 bg-radial-blue-wash" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 id="gallery-hero-heading" className="text-4xl font-heading font-bold tracking-tight text-brand-navy sm:text-h1">
              {galleryHero.heading}
            </h1>
            <p className="mt-5 text-body-lg text-brand-charcoal/80">{galleryHero.body}</p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={galleryHero.cta.href}>{galleryHero.cta.label}</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 10.2 Filterable Gallery + 10.3 Lightbox ── */}
      <section className="bg-white section-padding" aria-labelledby="gallery-grid-heading">
        <Container>
          <h2 id="gallery-grid-heading" className="sr-only">Project Gallery</h2>
          <FilterableGallery projects={projects} />
        </Container>
      </section>

      {/* ── 10.4 Video Gallery (Future Ready) ── */}
      <section className="bg-surface-light section-padding" aria-labelledby="video-gallery-heading">
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-white p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light">
              <Video className="h-7 w-7 text-brand-blue" aria-hidden="true" />
            </div>
            <h2 id="video-gallery-heading" className="text-h4 font-heading font-bold text-brand-navy">
              {videoGallery.heading}
            </h2>
            <p className="text-body text-brand-charcoal/70">{videoGallery.body}</p>
          </Reveal>
        </Container>
      </section>

      {/* ── 10.5 CTA ── */}
      <section className="relative bg-brand-blue section-padding overflow-hidden" aria-labelledby="gallery-cta-heading">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-white/5" />
          <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-white/5" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 id="gallery-cta-heading" className="text-3xl font-heading font-bold text-white sm:text-h2">
              {galleryCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-white/85">{galleryCta.body}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="solidWhite">
                <Link href={galleryCta.primaryCta.href}>{galleryCta.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outlineWhite">
                <Link href={galleryCta.secondaryCta.href}>{galleryCta.secondaryCta.label}</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
