import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  location: z.string().trim().min(2, "Please tell us your location."),
  serviceNeeded: z.string().min(1, "Please select a service."),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters)."),
  consent: z.boolean().refine((value) => value === true, {
  message: "Please confirm you agree to be contacted.",
}),
  // Honeypot — real users never see or fill this field; bots often do.
  company: z.string().max(0, "").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
