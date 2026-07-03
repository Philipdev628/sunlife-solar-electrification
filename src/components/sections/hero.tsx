import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { hero } from "@/content/homepage";
import { stockImages } from "@/content/stock-images";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-surface-light"
      aria-labelledby="hero-heading"
    >
      {/* Layered decorative background — dot grid + radial color washes.
          Purely atmospheric: aria-hidden, no interaction, sits behind content. */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-radial-blue-wash" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-12 py-16 md:grid-cols-[45fr_55fr] md:py-24 lg:py-32">
        {/* ── Left column ── */}
        <Reveal>
          <Badge variant="blue" className="mb-5 text-sm">
            {hero.eyebrow}
          </Badge>
          <h1
            id="hero-heading"
            className="text-4xl font-heading font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-h1"
          >
            {hero.headline}
          </h1>
          <div className="mt-5 space-y-4 text-body text-brand-charcoal/80 sm:text-body-lg">
            {hero.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" fullWidthOnMobile>
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" fullWidthOnMobile>
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>

          {/* Trust badges — refined into a bordered strip rather than a bare list */}
          <ul
            className="mt-8 grid grid-cols-2 gap-x-2 gap-y-2 rounded-2xl border border-border/70 bg-white/60 p-3 backdrop-blur-sm sm:gap-x-4"
            aria-label="Trust indicators"
          >
            {hero.trustBadges.map(({ icon: Icon, label }, i) => (
              <li key={label} className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-small font-medium text-brand-navy">
                <span
                  className={
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg " +
                    (i % 3 === 1 ? "bg-brand-gold/15" : "bg-brand-blue-light")
                  }
                >
                  <Icon className={"h-4 w-4 " + (i % 3 === 1 ? "text-brand-gold-dark" : "text-brand-blue")} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── Right column — hero image + floating card ── */}
        <Reveal type="fade" delay={0.12} className="relative pb-10 sm:pb-4">
          {/* Image itself keeps overflow-hidden for its rounded corners; the floating
              card lives outside this wrapper so it's never clipped by it. */}
          <div className="relative overflow-hidden rounded-2xl shadow-floating ring-1 ring-black/5">
            <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
              <Image
                src={stockImages.heroRooftop.src}
                alt={hero.imageAlt || stockImages.heroRooftop.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/* Subtle navy gradient at the base so the floating card's edge
                  and any future overlay text stay legible over any photo. */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy/30 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Floating "Why Customers Choose" card — positioned with non-negative
              offsets so it never pushes past the viewport edge on narrow screens. */}
          <div className="absolute bottom-0 left-4 right-4 max-w-xs rounded-xl border border-border bg-white p-4 shadow-floating sm:bottom-4 sm:left-4 sm:right-auto">
            <p className="mb-2 text-small font-bold text-brand-navy">
              {hero.floatingCard.title}
            </p>
            <ul className="space-y-1.5">
              {hero.floatingCard.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-small text-brand-charcoal/80">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-state-success" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Stat strip below image — middle stat gets the gold accent for warmth/rhythm */}
          <StaggerGroup className="mt-6 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-white shadow-card">
            {hero.stats.map((stat, i) => (
              <StaggerItem key={stat.value}>
                <div className="px-4 py-4 text-center">
                  <p
                    className={
                      "font-heading text-lg font-bold sm:text-xl " +
                      (i === 1 ? "text-brand-gold-dark" : "text-brand-blue")
                    }
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 hidden text-[11px] text-brand-charcoal/60 sm:block">
                    {stat.sublabel}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </Container>
    </section>
  );
}
