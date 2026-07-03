import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Wrench, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { contactInfo } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-state-success-bg">
        <CheckCircle2 className="h-9 w-9 text-state-success" aria-hidden="true" />
      </div>

      <h1 className="mt-6 font-heading text-4xl font-bold text-brand-navy sm:text-h1">Thank You!</h1>
      <p className="mt-4 max-w-lg text-body-lg text-brand-charcoal/75">
        We&apos;ve received your enquiry. One of our team members will contact you shortly to
        discuss your requirements.
      </p>
      <p className="mt-2 max-w-lg text-body text-brand-charcoal/60">
        In the meantime, feel free to explore more of our services or contact us directly if your
        enquiry is urgent.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Return Home
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/services">
            <Wrench className="h-4 w-4" aria-hidden="true" />
            Browse Services
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href={contactInfo.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </Container>
  );
}
