import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/motion";
import { problemSolution } from "@/content/homepage";
import { stockImages } from "@/content/stock-images";

export function ProblemSolutionSection() {
  const { sectionLabel, heading, intro, challenges, solution, imageAlt } = problemSolution;

  return (
    <section className="bg-white pb-section-y-sm pt-32 sm:pt-36 md:pb-section-y lg:pt-40" aria-labelledby="problem-heading">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[45fr_55fr]">
          {/* ── Left: Image ── */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <Image
                src={stockImages.homeSolarAlt.src}
                alt={imageAlt || stockImages.homeSolarAlt.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* ── Right: Content ── */}
          <div>
            <Reveal>
              <Badge variant="blue" className="mb-4">{sectionLabel}</Badge>
              <h2 id="problem-heading" className="text-3xl font-heading font-bold tracking-tight text-brand-navy sm:text-h2">
                {heading}
              </h2>
              <div className="mt-4 space-y-3 text-body text-brand-charcoal/80">
                {intro.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Challenge cards */}
            <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" staggerDelay={0.07}>
              {challenges.map(({ icon: Icon, title, description }) => (
                <StaggerItem key={title}>
                  <Card hoverLift className="h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-light">
                      <Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-h4 font-heading font-semibold text-brand-navy">{title}</h3>
                    <p className="text-small text-brand-charcoal/75">{description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerGroup>

            {/* Solution block */}
            <Reveal className="mt-10 rounded-2xl bg-brand-blue-light p-6 sm:p-8">
              <h3 className="mb-3 text-h4 font-heading font-bold text-brand-navy">{solution.heading}</h3>
              <div className="space-y-3 text-body text-brand-charcoal/80">
                {solution.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link href={solution.cta.href}>{solution.cta.label}</Link>
                </Button>
                <p className="mt-3 text-small text-brand-charcoal/65">{solution.ctaSubtext}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
