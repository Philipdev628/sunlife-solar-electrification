import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Tell tailwind-merge about our custom font-size scale (text-h1, text-body-lg,
// etc.) so it stops treating them as conflicting with text-color utilities
// like text-white — without this, tailwind-merge silently drops whichever
// one comes later in the class string, since both start with "text-".
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-h1", "text-h2", "text-h3", "text-h4", "text-body-lg", "text-body", "text-small"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}