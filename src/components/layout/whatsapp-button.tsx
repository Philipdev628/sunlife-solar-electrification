"use client";

import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/content/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SunLife Solar on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-floating transition-transform duration-fast ease-brand hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-brand-navy px-3 py-1.5 text-small text-white opacity-0 transition-opacity duration-fast group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
