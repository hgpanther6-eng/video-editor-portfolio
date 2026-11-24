# Ronak Gadhavi — Portfolio Website

A production-quality personal portfolio built with **Next.js 15**, **TypeScript** and **Tailwind CSS**.

---

## 📋 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Development

```bash
cd "antigravity resources/portfolio"
cp .env.example .env.local   # Then fill in your values
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          ← Global layout, metadata, fonts
│   ├── page.tsx            ← Home page (assembles sections)
│   ├── globals.css         ← Design system, tokens, utilities
│   ├── not-found.tsx       ← Custom 404 page
│   ├── sitemap.ts          ← Auto-generated sitemap
│   ├── robots.ts           ← robots.txt
│   ├── api/
│   │   └── contact/route.ts ← Contact form email handler
│   └── work/
│       └── [slug]/page.tsx  ← Project detail pages (dynamic)
├── components/
│   ├── Navigation.tsx       ← Sticky nav + mobile menu
│   ├── Footer.tsx           ← Footer with socials
│   ├── HeroSection.tsx      ← Hero + showreel area
│   ├── WorkSection.tsx      ← Portfolio grid + filters
│   ├── AboutSection.tsx     ← Bio + tools
│   ├── ServicesSection.tsx  ← Services (editorial rows)
│   ├── ProcessSection.tsx   ← 5-step creative process
│   ├── TestimonialsSection.tsx ← Hidden until real quotes added
│   ├── ContactSection.tsx   ← Inquiry form
│   └── MediaPlaceholder.tsx ← All placeholder components
├── data/
│   └── projects.ts          ← Central project configuration ⭐
└── public/
    └── assets/
        ├── images/           ← All portfolio images
        └── video/            ← All portfolio videos
```

---

## ✏️ Editing Projects

All portfolio projects are defined in one file:

```
data/projects.ts
```

**To edit a project:** Update the relevant object in the `projects` array.  
**To add a project:** Append a new object following the same structure.  
**To remove a project:** Delete the object from the array.

The grid, filters, sitemap and project detail pages all update automatically.

---

## 🖼 Replacing Media Placeholders

See **ASSET-GUIDE.md** for the full list of required assets, dimensions and filenames.

The general pattern:
1. Export/prepare your asset at the recommended spec.
2. Place it at the path shown in `ASSET-GUIDE.md` (e.g., `public/assets/video/showreel.mp4`).
3. The site will serve it automatically — no code changes needed.

---

## 📧 Contact Form Setup (Email Delivery)

The form uses **Nodemailer** to send emails via SMTP.

### Gmail (recommended)

1. Enable 2-Factor Authentication on your Google account.
2. Go to: **Google Account → Security → App Passwords**.
3. Generate a new App Password (select Mail + Windows Computer or any device).
4. Copy the 16-character password.
5. Fill in `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx   ← the App Password (spaces ok)
CONTACT_EMAIL=your.email@gmail.com
```

6. Restart the dev server: `npm run dev`

The form will display a user-friendly error if credentials are missing, so it never silently fails.

---

## 🌐 Updating Your Social Links and Contact Info

Search for `ADD_YOUR_` in these files:

| File | What to update |
|------|---------------|
| `components/Footer.tsx` | Email, Instagram URL, LinkedIn URL, WhatsApp |
| `components/ContactSection.tsx` | Email, Instagram, LinkedIn, WhatsApp, phone number |
| `app/layout.tsx` | Site URL, SEO metadata |
| `.env.local` | SMTP credentials, CONTACT_EMAIL |

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in the Vercel dashboard:
- Project → Settings → Environment Variables
- Add all variables from `.env.example`

### Other Platforms (Netlify, Railway, etc.)

Run `npm run build` then start the Node server:

```bash
npm run build
npm start
```

Set the same environment variables in your platform's dashboard.

---

## 🏷 Updating SEO

Edit `app/layout.tsx` → `metadata` object.

Update:
- `title.default` — your page title
- `description` — meta description  
- `openGraph.url` — your domain
- `openGraph.siteName` — site name
- `verification.google` — your Google Search Console token

---

## 💬 Adding Testimonials

Open `components/TestimonialsSection.tsx`.

Find the `testimonials` array (currently empty).

Add genuine client quotes:

```typescript
const testimonials: Testimonial[] = [
  {
    quote: "Ronak delivered an exceptional product film...",
    name: "Client Full Name",
    role: "Founder",
    company: "Company Name",
  },
];
```

The section is hidden when the array is empty. It automatically appears once you add items.

**Important:** Only add quotes from real clients who have given permission.

---

## 🔄 Canonical URL

Update all references to `https://ronakgadhavi.com` with your actual domain.

Files to update:
- `app/layout.tsx` (canonical link in `<head>`)
- `app/sitemap.ts`
- `app/robots.ts`
- `.env.local` → `NEXT_PUBLIC_SITE_URL`

---

## ♿ Accessibility

- All interactive elements have keyboard focus states.
- All images and media require `alt` / `aria-label`.
- Mobile navigation traps focus and responds to `Escape`.
- Animations respect `prefers-reduced-motion`.
- Semantic HTML throughout (`article`, `section`, `nav`, `dl`).

---

## 🤝 Freelance vs Full-Time Note

The website correctly attributes full-time employment at **OpenEduCat** without implying OpenEduCat endorses freelance services. This is reflected in `AboutSection.tsx`. Do not modify this language without legal review.
