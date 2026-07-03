"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import { primaryNav } from "@/content/nav";
import { contactInfo } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Lock body scroll while open, restore on close.
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape; full focus trap that cycles Tab/Shift+Tab within the panel.
  React.useEffect(() => {
    if (!open) return;

    const FOCUSABLE_SELECTOR =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    function getFocusable(): HTMLElement[] {
      return Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []);
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable.at(0);
const last = focusable.at(-1);

if (!first || !last) return;

const active = document.activeElement;

      if (e.shiftKey) {
        // Shift+Tab on the first element wraps to the last.
        if (active === first || !panelRef.current?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab on the last element wraps to the first.
        if (active === last || !panelRef.current?.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    getFocusable()[0]?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-y-0 right-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-floating"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo compact />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy hover:bg-surface-light"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
              {primaryNav.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg px-3 py-3 text-body-lg font-medium transition-colors ${
                      isActive
                        ? "bg-brand-blue-light text-brand-blue"
                        : "text-brand-navy hover:bg-surface-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4 border-t border-border px-5 py-6">
              <Button asChild size="lg" fullWidthOnMobile className="w-full">
                <Link href="/contact?intent=quote" onClick={onClose}>
                  Get a Free Quote
                </Link>
              </Button>
              <a
                href={contactInfo.phones[0].href}
                className="flex items-center justify-center gap-2 text-body font-semibold text-brand-navy"
              >
                <Phone className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                {contactInfo.phones[0].number}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
