import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { hero } from "@/content/homepage";
import { stockImages } from "@/content/stock-images";

export function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-brand-navy pb-24 pt-28 sm:pb-28 lg:min-h-[860px] lg:pt-32"
      aria-labelledby="hero-heading"
    >
      {/* ── Full-bleed background photo ── */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={stockImages.heroRooftop.src}
          alt={hero.imageAlt || stockImages.heroRooftop.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center motion-safe:animate-ken-burns"
        />
      </div>

      {/* ── Layered gradient overlay — dark-to-light left → right keeps the
          text block legible while letting the photo breathe on the right.
          A second bottom wash grounds the stats bar. ── */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/35 sm:via-brand-navy/80 sm:to-brand-navy/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy/95 via-transparent to-transparent"
        aria-hidden="true"
      />
      {/* Subtle warm glow, upper right — a whisper of gold, not a wash */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[480px] w-[480px] rounded-full bg-brand-gold/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-[0.06]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,640px)_1fr]">
          {/* ── Text column — generous width, natural line breaks ── */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {hero.eyebrow.replace(/^[^\p{L}]+/u, "")}
            </span>

            <h1
              id="hero-heading"
              className="mt-7 text-[2.75rem] font-heading font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.05]"
            >
              {hero.headline}
            </h1>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {hero.body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outlineWhite" size="lg">
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>

            {/* Trust badges — a single elegant glass row instead of a boxy 2×2 grid */}
            <ul
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-7"
              aria-label="Trust indicators"
            >
              {hero.trustBadges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
                  <Icon className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Quality card — stacks in normal flow on mobile/tablet; becomes an
              absolutely-positioned floating card over the photo at lg+, well
              clear of the stats bar anchored at the very bottom. */}
          <Reveal type="fade" delay={0.15} className="relative lg:block">
            <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/95 p-5 shadow-floating backdrop-blur-sm lg:absolute lg:right-0 lg:top-4 lg:w-72 xl:w-80">
              <p className="text-small font-bold text-brand-navy">{hero.floatingCard.title}</p>
              <ul className="mt-3 space-y-2">
                {hero.floatingCard.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-small text-brand-charcoal/80">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-state-success" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* ── Stats bar — anchored to the hero's bottom edge, straddling into
          the next section for that premium "floating metrics" feel. ── */}
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1/2 px-4">
        <Container className="!px-0">
          <StaggerGroup className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-white shadow-floating sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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
        </Container>
      </div>
    </section>
  );
}
