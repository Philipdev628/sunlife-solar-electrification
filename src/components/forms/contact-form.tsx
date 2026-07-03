"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { serviceOptions } from "@/content/contact-page";
import { services } from "@/content/services";

/** Encode a plain object as an application/x-www-form-urlencoded string (Netlify Forms' expected body format). */
function encodeFormData(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value ?? "")}`)
    .join("&");
}

export function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Pre-fill service + a starter message when arriving from a service detail
  // page or a "Get a Free Quote" / "Book a Site Inspection" CTA elsewhere.
  const prefillServiceSlug = searchParams.get("service");
  const prefillService = services.find((s) => s.slug === prefillServiceSlug)?.title;
  const intent = searchParams.get("intent");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      location: "",
      serviceNeeded: prefillService ?? "",
      message:
        intent === "inspection"
          ? "I'd like to book a site inspection. "
          : intent === "quote"
          ? "I'd like to request a free quote. "
          : "",
      consent: undefined as unknown as true,
      company: "",
    },
  });

  const serviceNeededValue = watch("serviceNeeded");

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "contact",
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          location: values.location,
          serviceNeeded: values.serviceNeeded,
          message: values.message,
          consent: "yes",
          company: values.company ?? "",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch {
      setSubmitError(
        "Something went wrong sending your enquiry. Please try again, or reach us directly by phone or WhatsApp below."
      );
    }
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      // Netlify Forms detection — the static HTML build must contain a
      // matching plain <form> with these attributes for the bot submissions
      // to be captured. See README "Contact Form" section.
      data-netlify="true"
      netlify-honeypot="company"
    >
      {/* Required for Netlify's static-HTML form detection at build time */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field — hidden from real users via CSS, bots often fill it */}
      <p className="hidden">
        <label>
          Company
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName" required>Full Name</Label>
          <Input id="fullName" placeholder="Your full name" hasError={!!errors.fullName} {...register("fullName")} />
          {errors.fullName && <FieldError message={errors.fullName.message} />}
        </div>
        <div>
          <Label htmlFor="phone" required>Phone Number</Label>
          <Input id="phone" type="tel" placeholder="080X XXX XXXX" hasError={!!errors.phone} {...register("phone")} />
          {errors.phone && <FieldError message={errors.phone.message} />}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email" required>Email Address</Label>
          <Input id="email" type="email" placeholder="you@example.com" hasError={!!errors.email} {...register("email")} />
          {errors.email && <FieldError message={errors.email.message} />}
        </div>
        <div>
          <Label htmlFor="location" required>Location</Label>
          <Input id="location" placeholder="City, State" hasError={!!errors.location} {...register("location")} />
          {errors.location && <FieldError message={errors.location.message} />}
        </div>
      </div>

      <div>
        <Label htmlFor="serviceNeeded" required>Service Needed</Label>
        <Select
          value={serviceNeededValue}
          onValueChange={(value) => setValue("serviceNeeded", value, { shouldValidate: true })}
        >
          <SelectTrigger id="serviceNeeded" hasError={!!errors.serviceNeeded}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.serviceNeeded && <FieldError message={errors.serviceNeeded.message} />}
      </div>

      <div>
        <Label htmlFor="message" required>Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us a bit about your property and energy needs..."
          hasError={!!errors.message}
          {...register("message")}
        />
        {errors.message && <FieldError message={errors.message.message} />}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            hasError={!!errors.consent}
            onCheckedChange={(checked) => setValue("consent", checked === true as true, { shouldValidate: true })}
          />
          <Label htmlFor="consent" className="mb-0 font-normal normal-case text-brand-charcoal/80">
            I agree to be contacted regarding my enquiry.
          </Label>
        </div>
        {errors.consent && <FieldError message={errors.consent.message} />}
      </div>

      {submitError && (
        <div className="flex items-start gap-2 rounded-input bg-state-error-bg p-3 text-small text-state-error">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{submitError}</p>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Request a Free Quote"
        )}
      </Button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-[13px] text-state-error" role="alert">
      {message}
    </p>
  );
}
