import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { hero } from "@/content/homepage";
import { stockImages } from "@/content/stock-images";

export function HeroSection() {
  return (
    <section
      className="relative isolate bg-brand-navy pb-16 pt-40 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-48"
      aria-labelledby="hero-heading"
    >
      {/* ── Background layer — everything here is clipped to the hero's own
          box (photo, Ken Burns zoom, gradients, glow). Deliberately scoped to
          its own wrapper rather than the whole <section>, so it never affects
          the layout/height of the real content below. ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={stockImages.technicianInstalling.src}
          alt={hero.imageAlt || stockImages.technicianInstalling.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] motion-safe:animate-ken-burns"
        />

        {/* Overlay — concentrated behind the text column only, fading out
            well before the frame's midpoint so most of the photo stays
            clearly visible rather than being washed out edge-to-edge. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,23,42,0.92)_0%,rgba(11,23,42,0.72)_32%,rgba(11,23,42,0.32)_58%,rgba(11,23,42,0.05)_78%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-brand-navy via-brand-navy/65 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-brand-gold/15 blur-[110px]"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        {/* Below lg: a single block column — text, trust list, then the
            card, stacked in normal document order with normal gaps. At lg+:
            a real flex row, so the text column and the card sit side by
            side with a guaranteed gap — no absolute positioning, so there's
            no width or height to miscalculate at any screen size. */}
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            {/* Kicker — a quiet editorial label, not a boxed badge */}
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                <Sun className="h-4 w-4" aria-hidden="true" />
                {hero.eyebrow.replace(/^[^\p{L}]+/u, "")}
              </p>

              <h1
                id="hero-heading"
                className="mt-6 text-4xl font-heading font-bold leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-h1 lg:leading-[1.1]"
              >
                {hero.headline}
              </h1>

              <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-white/75">
                {hero.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="shadow-[0_12px_32px_-4px_rgba(10,110,189,0.55)] hover:shadow-[0_16px_40px_-4px_rgba(10,110,189,0.65)]"
                >
                  <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
                </Button>
                <Button asChild variant="outlineWhite" size="lg">
                  <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                </Button>
              </div>
            </Reveal>

            {/* Trust indicators — pure whitespace-separated list, no boxes,
                no divider line. Quiet by design so it doesn't compete with the CTAs. */}
            <Reveal delay={0.08}>
              <ul
                className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3"
                aria-label="Trust indicators"
              >
                {hero.trustBadges.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-small font-medium text-white/70">
                    <Icon className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Quality card — sits in normal flow on mobile/tablet (stacked
              below trust indicators, full width); becomes a fixed-width flex
              sibling beside the text column at lg+, vertically centered by
              the parent's items-center. */}
          <Reveal
            delay={0.14}
            className="mt-8 w-full max-w-sm lg:mt-0 lg:w-72 lg:shrink-0 xl:w-80"
          >
            <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/8 p-6 shadow-floating backdrop-blur-xl">
              <p className="text-small font-bold uppercase tracking-wide text-white/60">
                {hero.floatingCard.title}
              </p>
              <ul className="mt-4 space-y-3">
                {hero.floatingCard.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-small text-white/85">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ── Stats bar — a normal block that simply comes after everything
            above it. On mobile there is no overlap at all: it's just the
            next element, with a plain positive gap, so it can never cover
            the quality card no matter how tall that card gets on any device.
            At sm+ a small FIXED negative margin (not a percentage of its own
            height) pulls it up slightly for a subtle "floating" feel — fixed
            amounts can't blow up the way translate-y-1/2 did when the bar's
            own height changed between breakpoints. ── */}
        <div className="relative z-10 mt-12 sm:mt-14 lg:mt-16">
          <StaggerGroup className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border rounded-2xl border border-white/60 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.18)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {hero.stats.map((stat, i) => (
              <StaggerItem key={stat.value}>
                <div className="px-6 py-5 text-center sm:py-6">
                  <p
                    className={
                      "font-heading text-xl font-bold sm:text-2xl " +
                      (i === 1 ? "text-brand-gold-dark" : "text-brand-blue")
                    }
                  >
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-navy">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[11px] text-brand-charcoal/60">{stat.sublabel}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
