import type { NextConfig } from "next";

/**
 * Deployment note:
 * We deploy via Netlify's official Next.js Runtime (@netlify/plugin-nextjs),
 * configured in netlify.toml. This (rather than `output: "export"`) lets us
 * keep full next/image optimization, the Metadata API, and route handlers
 * (e.g. the contact form's serverless endpoint, sitemap/robots routes) while
 * the site itself remains 100% static content with zero database/auth —
 * so we get the simplicity of a static site with none of next/image's
 * static-export limitations.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    // Stock photography (src/content/stock-images.ts) is served directly from
    // Unsplash's CDN — no local files to manage until real company photos are
    // ready. Swap next/image `src` values to local /images/... paths later;
    // no other code changes needed.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
