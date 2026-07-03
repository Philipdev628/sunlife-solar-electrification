# SunLife Solar Electrification — Website

Premium corporate website for SunLife Solar Electrification, built with **Next.js 15** (App Router),
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed on **Netlify** via the official
Next.js Runtime plugin.

Status: **complete** — every page in the Website Specification (Sections 6–16) is built and
production-ready.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Edit .env.local — only NEXT_PUBLIC_SITE_URL is required for production

# 3. Run the development server
npm run dev
# → http://localhost:3000

# 4. Type-check
npm run typecheck

# 5. Lint
npm run lint

# 6. Build for production
npm run build
```

---

## What's Built

| Page | Route | Notes |
|---|---|---|
| Homepage | `/` | All 10 spec sections (hero → final CTA) |
| About | `/about` | Story, mission/vision, 5 core values, trust points, team, promise |
| Services overview | `/services` | 9-card grid linking to individual service pages |
| Service detail ×9 | `/services/[slug]` | One data-driven template, 9 static pages |
| Projects | `/projects` | Categories, 6-project showcase, animated stats |
| Gallery | `/gallery` | Filterable grid (7 categories) + accessible lightbox |
| FAQ | `/faq` | 28 questions, accordion, FAQPage schema |
| Contact | `/contact` | Form (RHF + Zod), map embed, hours, info cards |
| Privacy Policy | `/privacy-policy` | Full 10-section policy |
| Terms & Conditions | `/terms` | Full 11-section terms |
| 404 | (automatic) | Custom illustration + Home/Services/Contact |
| Thank You | `/thank-you` | Shown after a successful form submission |

Every page ships with unique metadata, a canonical URL, Open Graph tags, and BreadcrumbList
JSON-LD. The homepage additionally carries Organization/LocalBusiness JSON-LD (root layout), and
the FAQ page carries FAQPage JSON-LD.

---

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx             # Root layout (fonts, header, footer, JSON-LD)
│   ├── page.tsx                # Homepage
│   ├── about/
│   ├── services/
│   │   ├── page.tsx             # Overview
│   │   └── [slug]/page.tsx      # Detail template (9 static pages)
│   ├── projects/
│   ├── gallery/
│   ├── faq/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms/
│   ├── thank-you/
│   ├── not-found.tsx           # Custom 404
│   ├── sitemap.ts              # Dynamic XML sitemap
│   └── robots.ts               # robots.txt
├── components/
│   ├── layout/                 # Header, Footer, MobileNav, WhatsAppButton
│   ├── sections/                # One component per homepage section
│   ├── gallery/                  # FilterableGallery, Lightbox
│   ├── forms/                     # ContactForm (RHF + Zod)
│   ├── ui/                        # Button, Card, Badge, Input, Select, Checkbox, FaqAccordion...
│   └── common/                     # Container, SectionHeading, motion wrappers, StatCounter
├── content/                    # ⭐ ALL EDITABLE COPY LIVES HERE — no copy in components
│   ├── site-config.ts           # Company name, phones, email, address, hours
│   ├── nav.ts                   # Navigation links
│   ├── homepage.ts              # Homepage section copy
│   ├── about.ts                 # About page copy
│   ├── services.ts               # 9 services + full detail-page content
│   ├── services-page.ts          # Services overview page copy
│   ├── projects.ts               # Project/gallery items (single source of truth)
│   ├── projects-page.ts          # Projects page copy
│   ├── gallery.ts                # Gallery page copy + category list
│   ├── contact-page.ts           # Contact page copy
│   ├── faqs.ts                   # All 28 FAQs
│   ├── faq-page.ts               # FAQ page copy
│   └── testimonials.ts
├── lib/
│   ├── seo.ts                   # Metadata + JSON-LD helpers
│   ├── validations.ts            # Zod schema (contact form)
│   └── utils.ts
└── types/
```

**To add a service, project, FAQ, or testimonial**, edit the relevant array in `src/content/` —
no component code changes needed. This was a hard requirement from the spec and is true throughout
the codebase.

---

## Contact Form — How It Works

The form on `/contact` uses **Netlify Forms** (no backend needed):

- The `<form>` carries `data-netlify="true"`, `name="contact"`, and a hidden `form-name` input —
  this is what Netlify's build bot scans for to register the form.
- A hidden honeypot field (`netlify-honeypot="company"`) filters spam bots server-side.
- On submit, the form POSTs to `/` as `application/x-www-form-urlencoded` and redirects to
  `/thank-you` on success.
- Submissions appear in **Netlify → your site → Forms** and can be forwarded to email/Slack from
  there (see deployment steps below).

If you'd rather use a different provider (Formspree, a serverless function, etc.), swap the
`fetch` call in `src/components/forms/contact-form.tsx` — the form fields and validation
(`src/lib/validations.ts`) don't need to change.

---

## Deploying to Netlify — Step by Step

### 1. Push the code to a Git repository
Netlify deploys from Git (GitHub, GitLab, or Bitbucket).
```bash
cd sunlife-solar
git init
git add .
git commit -m "Initial commit — SunLife Solar Electrification website"
```
Create a new repository on GitHub (or your provider of choice) and push:
```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

### 2. Create the Netlify site
1. Log in at [app.netlify.com](https://app.netlify.com).
2. Click **Add new site → Import an existing project**.
3. Choose your Git provider and select the repository you just pushed.

### 3. Confirm build settings
Netlify should auto-detect these from `netlify.toml`, but double-check on the "Configure build"
screen:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- The `@netlify/plugin-nextjs` plugin is installed automatically (it's declared in `netlify.toml`).

### 4. Set environment variables
In **Site configuration → Environment variables**, add:
| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-real-domain.com` (or the Netlify subdomain, e.g. `https://sunlife-solar.netlify.app`) |
| `NODE_VERSION` | `20` (recommended — matches local dev) |

Leave `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` and `CONTACT_FORM_ENDPOINT` blank unless you're switching
those integrations (see `.env.example` for what each one does).

### 5. Deploy
Click **Deploy site**. Netlify will install dependencies, run the build, and publish. First builds
typically take 2–4 minutes.

### 6. Enable form notifications
1. Go to **Site configuration → Forms → Form notifications**.
2. Add an **Email notification** (or Slack) so someone actually sees new enquiries — Netlify Forms
   stores submissions, but won't alert anyone unless you set this up.
3. Submit a test enquiry through the live `/contact` page and confirm it shows up under
   **Forms → contact**.

### 7. Connect your real domain
1. **Domain settings → Add a domain**, enter your domain (e.g. `sunlifesolarelectrification.com`).
2. Either transfer DNS to Netlify DNS (simplest) or add the CNAME/A records Netlify shows you at
   your current registrar.
3. Netlify auto-provisions a free HTTPS certificate once DNS resolves — this can take a few
   minutes to a few hours.
4. Once the domain is live, update `NEXT_PUBLIC_SITE_URL` in your environment variables to match,
   then trigger a redeploy (**Deploys → Trigger deploy → Deploy site**) so canonical URLs, the
   sitemap, and JSON-LD all reference the final domain.

### 8. Post-launch checklist
- [ ] Submit `https://your-domain.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
- [ ] Replace every placeholder image block (marked in code comments as `PLACEHOLDER`, mostly in
      `hero.tsx`, `about/page.tsx`, `services-hero`, and the gallery/project cards) with real
      photography per Section 18 of the spec.
- [ ] Update `NEXT_PUBLIC_SITE_URL` and confirm Open Graph previews look right (test with
      [opengraph.xyz](https://www.opengraph.xyz/)).
- [ ] Run a Lighthouse audit in Chrome DevTools against the live URL — the site was built to hit
      95+/100/100/100.
- [ ] Send a real test enquiry through `/contact` and confirm the email notification arrives.

---

## Design System

All design tokens (colors, type scale, spacing, radii, shadows, motion timing) live in
`tailwind.config.ts`, sourced directly from Spec Section 5. Don't add one-off hex values or pixel
sizes in components — extend the token scale instead so the whole site stays visually consistent.

## Accessibility

Built to WCAG AA: full keyboard operability, visible focus rings, proper heading hierarchy,
`aria-labelledby` wired to every section heading, a real focus trap in the mobile nav dialog and
gallery lightbox, and `prefers-reduced-motion` respected globally.
