import type { Metadata } from "next";
import Link from "next/link";
import { Home, Wrench, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      {/* Solar panel illustration, lights off, subtle pulse animation */}
      <svg
        viewBox="0 0 220 160"
        className="h-40 w-auto sm:h-48"
        role="img"
        aria-label="Illustration of a solar panel with its lights off"
      >
        {/* Panel frame */}
        <rect x="20" y="40" width="180" height="90" rx="8" fill="#0B172A" opacity="0.06" />
        <rect x="20" y="40" width="180" height="90" rx="8" fill="none" stroke="#0B172A" strokeOpacity="0.25" strokeWidth="2" />
        {/* Grid lines (panel cells) */}
        {[1, 2, 3, 4].map((col) => (
          <line key={col} x1={20 + col * 36} y1="40" x2={20 + col * 36} y2="130" stroke="#0B172A" strokeOpacity="0.12" strokeWidth="1.5" />
        ))}
        <line x1="20" y1="85" x2="200" y2="85" stroke="#0B172A" strokeOpacity="0.12" strokeWidth="1.5" />
        {/* Support leg */}
        <line x1="110" y1="130" x2="110" y2="150" stroke="#0B172A" strokeOpacity="0.25" strokeWidth="3" />
        {/* "Off" indicator dot, gently pulsing */}
        <circle cx="184" cy="52" r="6" fill="#DC2626" className="animate-pulse" />
      </svg>

      <p className="mt-8 font-heading text-6xl font-bold text-brand-blue/15 sm:text-7xl">404</p>
      <h1 className="mt-3 max-w-lg font-heading text-3xl font-bold text-brand-navy sm:text-h2">
        Looks Like This Page Has Gone Off-Grid
      </h1>
      <p className="mt-4 max-w-md text-body text-brand-charcoal/70">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s help you get back on track.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Home
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/services">
            <Wrench className="h-4 w-4" aria-hidden="true" />
            Services
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/contact">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </Link>
        </Button>
      </div>
    </Container>
  );
}
