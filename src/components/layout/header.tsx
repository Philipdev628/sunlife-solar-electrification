"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { primaryNav } from "@/content/nav";
import { contactInfo } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full bg-white/95 backdrop-blur transition-all duration-default ease-brand",
          scrolled ? "shadow-header" : "shadow-none"
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-default ease-brand",
              scrolled ? "h-16" : "h-20"
            )}
          >
            <Logo compact={scrolled} />

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {primaryNav.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative px-3.5 py-2 text-small font-semibold transition-colors duration-fast",
                      isActive ? "text-brand-blue" : "text-brand-navy hover:text-brand-blue"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-brand-blue transition-transform duration-fast ease-brand group-hover:scale-x-100",
                        isActive && "scale-x-100"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden items-center gap-5 lg:flex">
              <a
                href={contactInfo.phones[0].href}
                className="flex items-center gap-2 text-small font-semibold text-brand-navy hover:text-brand-blue"
              >
                <Phone className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                {contactInfo.phones[0].number}
              </a>
              <Button asChild>
                <Link href="/contact?intent=quote">Get a Free Quote</Link>
              </Button>
            </div>

            {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-navy hover:bg-surface-light lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
