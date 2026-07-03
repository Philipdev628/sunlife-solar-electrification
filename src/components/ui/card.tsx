import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card — Spec 5.6: white bg, 16px radius, soft shadow, thin gray border,
 * consistent padding, hover lift. `hoverLift` is opt-in since not every
 * card (e.g. a static info card) should react to hover.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
  /** Thin accent bar along the top edge — reserved for featured/highlighted cards (testimonials, featured projects). Omit on ordinary cards. */
  accentTop?: "blue" | "gold" | false;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverLift = false, accentTop = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-card border border-border bg-white p-6 shadow-card",
        hoverLift &&
          "transition-all duration-default ease-brand hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-blue/30",
        accentTop && "border-t-[3px]",
        accentTop === "blue" && "border-t-brand-blue",
        accentTop === "gold" && "border-t-brand-gold",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
