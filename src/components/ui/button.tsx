import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — Spec 5.5
 * Primary: brand blue bg, white text, 12px radius, medium shadow.
 *   Hover: 2–4px lift, darker blue, stronger shadow.
 * Secondary: white bg, blue border + text. Hover: blue bg, white text.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-btn font-heading font-semibold",
    "transition-all duration-fast ease-brand",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-brand-blue text-white shadow-btn-sm",
          "hover:bg-brand-blue-dark hover:shadow-btn-hover hover:-translate-y-[3px]",
          "active:translate-y-0",
        ].join(" "),
        secondary: [
          "bg-white text-brand-blue border-2 border-brand-blue",
          "hover:bg-brand-blue hover:text-white",
        ].join(" "),
        ghost: [
          "bg-transparent text-brand-navy",
          "hover:bg-brand-blue-light hover:text-brand-blue",
        ].join(" "),
        outlineWhite: [
          "bg-transparent text-white border-2 border-white/70",
          "hover:bg-white hover:text-brand-blue",
        ].join(" "),
        solidWhite: [
          "bg-white text-brand-blue shadow-btn-sm",
          "hover:bg-white/90 hover:shadow-btn-hover hover:-translate-y-[3px]",
          "active:translate-y-0",
        ].join(" "),
      },
      size: {
        sm: "h-10 px-4 text-small",
        md: "h-12 px-6 text-body",
        lg: "h-14 px-8 text-body-lg",
      },
      fullWidthOnMobile: {
        true: "w-full sm:w-auto",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidthOnMobile: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidthOnMobile, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

 return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidthOnMobile,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);


export { Button, buttonVariants };
