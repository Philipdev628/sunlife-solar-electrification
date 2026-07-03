import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-badge px-3 py-1 text-small font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        blue: "bg-brand-blue-light text-brand-blue ring-brand-blue/15",
        gold: "bg-brand-gold/15 text-brand-gold-dark ring-brand-gold/25",
        success: "bg-state-success-bg text-state-success ring-state-success/15",
        outline: "border border-border bg-white text-brand-charcoal ring-transparent",
        navy: "bg-brand-navy text-white ring-white/10",
      },
    },
    defaultVariants: { variant: "blue" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
