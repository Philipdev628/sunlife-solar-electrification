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
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-brand-navy pb-40 pt-40 sm:min-h-[680px] sm:pb-44 sm:pt-44 lg:min-h-[760px] lg:pb-48 lg:pt-48"
      aria-labelledby="hero-heading"
    >
      {/* ── Full-bleed background photo — a real moment (technician at work
          against open sky), not a texture. A shorter, wider container than
          before keeps the crop natural rather than cutting into a tight slice. ── */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={stockImages.technicianInstalling.src}
          alt={hero.imageAlt || stockImages.technicianInstalling.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] motion-safe:animate-ken-burns"
        />
      </div>

      {/* ── Overlay — concentrated behind the text column only, fading out
          well before the frame's midpoint so most of the photo stays clearly
          visible rather than being washed out edge-to-edge. ── */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(11,23,42,0.92)_0%,rgba(11,23,42,0.72)_32%,rgba(11,23,42,0.32)_58%,rgba(11,23,42,0.05)_78%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-brand-navy via-brand-navy/65 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[420px] w-[420px] rounded-full bg-brand-gold/15 blur-[110px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
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

          {/* Quality card — sits in normal flow on mobile/tablet (stacked
              below trust indicators); becomes a frosted glass panel floating
              over the photo, vertically centered on the right, at lg+. Glass
              treatment (not a solid white box) so it reads as part of the
              same composition instead of an overlay pasted on top. */}
          <Reveal
            delay={0.14}
            className="mt-8 lg:absolute lg:left-[calc(100%+5rem)] lg:top-1/2 lg:mt-0 lg:w-72 lg:-translate-y-1/2 xl:w-80"
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
      </Container>

      {/* ── Stats bar — anchored to the hero's bottom edge, straddling into
          the next section for that premium "floating metrics" feel. ── */}
      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-[20%] px-4">
        <Container className="!px-0">
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
        </Container>
      </div>
    </section>
  );
}
