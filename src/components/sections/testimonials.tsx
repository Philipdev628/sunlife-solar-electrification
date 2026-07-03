import Link from "next/link";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { testimonials } from "@/content/testimonials";
import { testimonialsSection } from "@/content/homepage";

export function TestimonialsSection() {
  const { sectionLabel, heading, intro, cta, ctaHeading } = testimonialsSection;

  return (
    <section className="relative overflow-hidden bg-surface-blue-tint section-padding" aria-labelledby="testimonials-heading">
      {/* Large decorative quote mark, very low opacity — premium texture without noise */}
      <Quote
        className="pointer-events-none absolute -left-6 -top-6 h-48 w-48 text-brand-blue/[0.04] sm:h-64 sm:w-64"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading label={sectionLabel} heading={heading} headingId="testimonials-heading" intro={intro} />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card accentTop="gold" hoverLift className="flex h-full flex-col">
                {/* Stars */}
                <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-brand-gold text-brand-gold" : "text-border"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote icon in a soft gold badge */}
                <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold/15">
                  <Quote className="h-4 w-4 text-brand-gold-dark" aria-hidden="true" />
                </div>

                {/* Quote text */}
                <blockquote className="mt-3 flex-1 text-body text-brand-charcoal/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  {testimonial.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/images/team/${testimonial.photo}`}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-small font-bold text-brand-blue"
                      aria-hidden="true"
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-small font-bold text-brand-navy">{testimonial.name}</p>
                    <p className="text-[12px] text-brand-charcoal/60">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 text-center">
          <p className="text-body font-semibold text-brand-navy">{ctaHeading}</p>
          <div className="mt-4">
            <Button asChild size="lg">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
