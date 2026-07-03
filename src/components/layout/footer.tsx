import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { primaryNav, footerLegalLinks } from "@/content/nav";
import { services } from "@/content/services";
import { contactInfo, siteConfig } from "@/content/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-[#08111f] text-white/80">
      {/* Thin brand gradient line + soft glow — premium separation from page content */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative z-10 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Company */}
          <div>
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 text-small leading-relaxed text-white/65">
              Reliable solar and electrical solutions for homes and businesses
              across Nigeria since {siteConfig.establishedYear}.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="mb-4 text-small font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/65 transition-colors duration-fast hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Services */}
          <nav aria-label="Services">
            <h3 className="mb-4 text-small font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-small text-white/65 transition-colors duration-fast hover:text-brand-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="mb-4 text-small font-semibold uppercase tracking-wide text-white">
              Contact Information
            </h3>
            <ul className="space-y-3 text-small text-white/65">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{contactInfo.address.full}</span>
              </li>
              <li className="flex flex-col gap-1.5">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="flex items-center gap-2.5 transition-colors duration-fast hover:text-brand-gold"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    {phone.number}
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={contactInfo.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors duration-fast hover:text-brand-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  WhatsApp: {contactInfo.whatsapp.number}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.email.href}
                  className="flex items-center gap-2.5 transition-colors duration-fast hover:text-brand-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  {contactInfo.email.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-small text-white/55 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {footerLegalLinks.map((link, i) => (
              <React.Fragment key={link.href}>
                {i > 0 && <span aria-hidden="true">|</span>}
                <Link href={link.href} className="hover:text-brand-gold">
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
