import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo, siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "July 2026";

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-surface-light py-14">
        <Container>
          <h1 className="text-3xl font-heading font-bold tracking-tight text-brand-navy sm:text-h1">Privacy Policy</h1>
          <p className="mt-3 text-small text-brand-charcoal/60">Last updated: {LAST_UPDATED}</p>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-body leading-relaxed text-brand-charcoal/85 [&_h2]:mt-2 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-h4 [&_h2]:font-bold [&_h2]:text-brand-navy [&_p]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            <p>
              {siteConfig.name} ("SunLife," "we," "us," or "our") respects your privacy and is
              committed to protecting the personal information you share with us. This Privacy
              Policy explains what information we collect, how we use it, and the choices you
              have, in plain and straightforward language.
            </p>

            <div>
              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information when you interact with our website or services:</p>
              <ul>
                <li>Contact details you provide, such as your full name, phone number, email address, and location.</li>
                <li>Details about the service you're enquiring about and any message you send us through our contact form.</li>
                <li>Basic technical information such as browser type, device type, and pages visited, collected automatically through standard website analytics.</li>
              </ul>
            </div>

            <div>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to enquiries, quotation requests, and site inspection bookings.</li>
                <li>Communicate with you about your project, installation, or after-sales support.</li>
                <li>Improve our website, services, and customer experience.</li>
                <li>Comply with legal obligations where applicable.</li>
              </ul>
              <p>We do not sell or rent your personal information to third parties.</p>
            </div>

            <div>
              <h2>3. Cookies</h2>
              <p>
                Our website may use cookies — small text files stored on your device — to help the
                site function properly and to understand how visitors use our pages. You can
                disable cookies through your browser settings; doing so may affect certain
                website features.
              </p>
            </div>

            <div>
              <h2>4. Analytics</h2>
              <p>
                We may use website analytics tools to understand traffic patterns and improve our
                content and services. Any data collected through analytics is aggregated and does
                not personally identify you.
              </p>
            </div>

            <div>
              <h2>5. Contact Forms</h2>
              <p>
                Information submitted through our contact or quotation form is used solely to
                respond to your enquiry and, where you've agreed, to follow up regarding your
                request. We retain enquiry information only for as long as reasonably necessary to
                handle your request and maintain accurate business records.
              </p>
            </div>

            <div>
              <h2>6. Data Protection</h2>
              <p>
                We take reasonable technical and organizational measures to protect your personal
                information from unauthorized access, loss, misuse, or alteration. While we work
                to protect your data, no method of transmission over the internet is completely
                secure.
              </p>
            </div>

            <div>
              <h2>7. Third-Party Services</h2>
              <p>
                We may use trusted third-party services (such as website hosting, analytics, or
                map providers) to help operate our website. These providers only access
                information necessary to perform their function and are expected to handle it
                responsibly.
              </p>
            </div>

            <div>
              <h2>8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request details of the personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your personal information, subject to legal or legitimate business requirements.</li>
                <li>Withdraw consent to being contacted at any time.</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details below.</p>
            </div>

            <div>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or for legal or regulatory reasons. Updates will be posted on this page
                with a revised "Last updated" date.
              </p>
            </div>

            <div>
              <h2>10. Contact Information</h2>
              <p>If you have questions about this Privacy Policy or how we handle your information, please contact us:</p>
              <ul>
                <li>Email: {contactInfo.email.address}</li>
                <li>Phone: {contactInfo.phones[0].number}</li>
                <li>Address: {contactInfo.address.full}</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
