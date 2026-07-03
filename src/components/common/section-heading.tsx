import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  label,
  heading,
  headingId,
  intro,
  align = "center",
  className,
  headingClassName,
}: {
  label?: string;
  heading: React.ReactNode;
  /** id applied to the <h2> — pass this to match the parent <section>'s aria-labelledby */
  headingId?: string;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  headingClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && <Badge variant="blue" className="mb-4">{label}</Badge>}
      <h2 id={headingId} className={cn("text-3xl sm:text-h2 text-brand-navy", headingClassName)}>{heading}</h2>
      {intro && <p className="mt-4 text-body-lg text-brand-charcoal/80">{intro}</p>}
    </div>
  );
}
