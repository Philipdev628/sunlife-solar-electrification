import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-input border bg-white px-4 text-body text-brand-charcoal",
        "placeholder:text-brand-charcoal/40",
        "transition-colors duration-fast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
        hasError
          ? "border-state-error focus-visible:ring-state-error"
          : "border-border focus-visible:border-brand-blue",
        className
      )}
      aria-invalid={hasError || undefined}
      {...props}
    />
  )
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }>(
  ({ className, hasError, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[140px] w-full rounded-input border bg-white px-4 py-3 text-body text-brand-charcoal",
        "placeholder:text-brand-charcoal/40",
        "transition-colors duration-fast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
        hasError
          ? "border-state-error focus-visible:ring-state-error"
          : "border-border focus-visible:border-brand-blue",
        className
      )}
      aria-invalid={hasError || undefined}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
