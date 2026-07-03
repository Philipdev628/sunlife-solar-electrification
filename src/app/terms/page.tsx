import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { contactInfo, siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions governing use of the ${siteConfig.name} website and services.`,
  alternates: { canonical: absoluteUrl("/terms") },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "July 2026";

export default function TermsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms & Conditions", path: "/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-surface-light py-14">
        <Container>
          <h1 className="text-3xl font-heading font-bold tracking-tight text-brand-navy sm:text-h1">Terms & Conditions</h1>
          <p className="mt-3 text-small text-brand-charcoal/60">Last updated: {LAST_UPDATED}</p>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-body leading-relaxed text-brand-charcoal/85 [&_h2]:mt-2 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-h4 [&_h2]:font-bold [&_h2]:text-brand-navy [&_p]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            <p>
              These Terms & Conditions govern your use of the {siteConfig.name} website and the
              services we provide. By using our website or engaging our services, you agree to
              the terms outlined below.
            </p>

            <div>
              <h2>1. Website Usage</h2>
              <p>
                This website is provided for informational purposes to help you learn about our
                solar and electrical services and to request a quotation or consultation. You
                agree not to misuse the website, attempt unauthorized access to our systems, or
                use its content for unlawful purposes.
              </p>
            </div>

            <div>
              <h2>2. Quotations</h2>
              <p>
                Quotations provided by SunLife Solar Electrification are estimates based on the
                information available at the time of assessment. Final pricing may be adjusted
                following a full site inspection, changes in project scope, or fluctuations in
                equipment cost. Quotations are valid for the period stated on the quotation
                document.
              </p>
            </div>

            <div>
              <h2>3. Product Availability</h2>
              <p>
                While we work with trusted suppliers, product availability may occasionally
                change due to factors outside our control. Where a specified brand or model is
                unavailable, we will recommend a comparable alternative and inform you before
                proceeding.
              </p>
            </div>

            <div>
              <h2>4. Manufacturer Warranties</h2>
              <p>
                Warranties on solar panels, inverters, batteries, and other equipment are provided
                by the respective manufacturers, not by SunLife Solar Electrification. Warranty
                terms, duration, and conditions vary by brand and product. We will assist
                customers in facilitating manufacturer warranty claims where applicable, but the
                warranty obligation itself rests with the manufacturer.
              </p>
            </div>

            <div>
              <h2>5. Payments</h2>
              <p>
                Payment terms will be communicated during the quotation process. Installation
                work typically requires an agreed deposit before scheduling, with the balance due
                according to the payment schedule outlined in your quotation or invoice.
              </p>
            </div>

            <div>
              <h2>6. Installation Scheduling</h2>
              <p>
                Installation timelines depend on project scope, equipment availability, and site
                readiness. We will provide an estimated schedule in advance; unforeseen delays
                (such as weather, logistics, or site access issues) will be communicated as soon
                as they arise.
              </p>
            </div>

            <div>
              <h2>7. Customer Responsibilities</h2>
              <p>
                Customers are responsible for providing accurate information about their property
                and energy needs, ensuring safe and reasonable site access for our team, and
                promptly raising any concerns about installed systems so we can address them.
              </p>
            </div>

            <div>
              <h2>8. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, and design elements —
                is the property of {siteConfig.name} unless otherwise stated, and may not be
                reproduced or used without our prior written consent.
              </p>
            </div>

            <div>
              <h2>9. Limitation of Liability</h2>
              <p>
                SunLife Solar Electrification will exercise reasonable skill and care in every
                installation. To the extent permitted by law, we are not liable for indirect or
                consequential losses arising from equipment failure covered under manufacturer
                warranty, force majeure events, or misuse of installed systems outside our
                recommended guidelines.
              </p>
            </div>

            <div>
              <h2>10. Governing Law</h2>
              <p>
                These Terms & Conditions are governed by the laws of the Federal Republic of
                Nigeria. Any disputes arising from these terms will be subject to the jurisdiction
                of the Nigerian courts.
              </p>
            </div>

            <div>
              <h2>11. Contact Information</h2>
              <p>Questions about these Terms & Conditions can be directed to:</p>
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
