import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/motion";
import { finalCta } from "@/content/homepage";
import { contactInfo } from "@/content/site-config";

export function FinalCtaSection() {
  const { heading, body, primaryCta, secondaryCta } = finalCta;

  return (
    <section
      className="relative bg-brand-blue section-padding overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle radial glow — adds depth without obscuring the copy */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-white/5" />
        <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-white/5" />
      </div>

      <Container className="relative z-10 text-center">
        <Reveal>
          <h2 id="final-cta-heading" className="text-3xl font-heading font-bold text-white sm:text-h2">
            {heading}
          </h2>
          <div className="mx-auto mt-5 max-w-2xl space-y-3">
            {body.split("\n\n").map((para, i) => (
              <p key={i} className="text-body text-white/85">{para}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="solidWhite">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outlineWhite">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-white/75 sm:flex-row sm:gap-8">
            <a
              href={contactInfo.phones[0].href}
              className="flex items-center gap-2 text-body font-medium hover:text-white transition-colors duration-fast"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phones[0].number}
            </a>
            <a
              href={contactInfo.email.href}
              className="flex items-center gap-2 text-body font-medium hover:text-white transition-colors duration-fast"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactInfo.email.address}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
