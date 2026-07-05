export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Optional: relative path to a circular profile photo under /public/images/team/ */
  photo?: string;
};

/**
 * Section 6.9 — testimonials use anonymous, role-based identifiers rather
 * than real names, since customer permission to publish names wasn't
 * obtained. Photo field is optional; if omitted, an initials avatar is
 * rendered instead so no layout change is needed when real photos arrive.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "SunLife handled the installation professionally and explained everything clearly. The workmanship was neat, and the system has been performing perfectly.",
    name: "Residential Customer",
    location: "Abeokuta",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The team recommended the right system instead of the most expensive one. I appreciated their honesty and professionalism.",
    name: "Business Owner",
    location: "Lagos",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Excellent service from consultation to installation. Their after sales support has been outstanding.",
    name: "Homeowner",
    location: "Ibadan",
    rating: 5,
  },
];
