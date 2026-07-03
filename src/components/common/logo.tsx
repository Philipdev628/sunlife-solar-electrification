import Link from "next/link";
import { Sun } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

/**
 * Placeholder wordmark logo. Spec 6.1 calls for "the official SunLife Solar
 * Electrification logo" on a clean white background, replaceable without
 * affecting layout. To swap in the real logo file:
 *   1. Drop the logo image into /public/images/logo.svg (or .png)
 *   2. Replace the contents of this component with an <Image> tag pointing
 *      to it, keeping the same height (h-9 / h-7) so the header layout
 *      doesn't shift.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={cn("flex items-center gap-2 shrink-0", className)}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white">
        <Sun className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-heading font-bold text-brand-navy transition-all duration-fast",
            compact ? "text-base" : "text-lg"
          )}
        >
          SunLife Solar
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wide text-brand-blue">
          Electrification
        </span>
      </span>
    </Link>
  );
}
