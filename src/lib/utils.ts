import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names safely with Tailwind's own conflict
 * resolution (e.g. px-2 vs px-4 won't both survive). Use this anywhere
 * a component accepts a `className` prop or composes variants.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
