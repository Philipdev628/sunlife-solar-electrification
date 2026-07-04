import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

/**
 * Official SunLife Solar Electrification logo.
 * Source: /public/images/brand/sunlife-logo.png — the icon mark plus the
 * "Sunlife" / "Solar" wordmark is baked into the asset itself, so it's
 * rendered as a single image rather than recombined with site-rendered text.
 */
export function Logo({
  className,
  compact = false,
  onDark = false,
}: {
  className?: string;
  compact?: boolean;
  /** Set on dark backgrounds (e.g. the footer) — adds a light backing chip so the mark's navy elements stay legible. */
  onDark?: boolean;
}) {
  const imageHeight = compact ? 44 : 56;
  const imageWidth = Math.round(imageHeight * (267 / 208)); // native asset aspect ratio

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={cn("flex items-center shrink-0", className)}
    >
      <span
        className={cn(
          "flex shrink-0 items-center rounded-lg transition-all duration-fast",
          onDark && "bg-white/95 px-2 py-1.5 shadow-sm"
        )}
      >
        <Image
          src="/images/brand/sunlife-logo.png"
          alt="SunLife Solar Electrification"
          height={imageHeight}
          width={imageWidth}
          style={{ height: imageHeight, width: "auto" }}
          priority
        />
      </span>
    </Link>
  );
}