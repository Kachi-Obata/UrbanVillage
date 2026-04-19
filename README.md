# Urban Village by Terivik — Official Website

> The official website for Urban Village by Terivik, Abuja's premier outdoor relaxation park and leisure destination in Maitama.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Images:** next/image (WebP/AVIF via Vercel)
- **Fonts:** next/font/google — Cormorant Garamond + DM Sans
- **Deployment:** Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  layout.jsx          — Root layout: fonts, metadata, Navbar, CustomCursor
  page.jsx            — Home page
  globals.css         — Design tokens & base reset

components/
  layout/
    Navbar.jsx
    Footer.jsx
    MobileMenu.jsx
    CustomCursor.jsx
  sections/
    LoadingScreen.jsx
    Hero.jsx
    Manifesto.jsx
    ExperiencePanels.jsx
    SpaceGallery.jsx
    MenuPreview.jsx
    VisitUs.jsx
  ui/
    FadeInView.jsx
    SectionLabel.jsx
    Button.jsx
    ImageWithOverlay.jsx

public/
  images/             — All site images (WebP, self-hosted from Instagram/Maps)
```

---

## Design Reference

All design decisions, copy, color tokens, typography, animation specs, and section-by-section layout instructions are in [`CREATIVE_PRD.md`](./CREATIVE_PRD.md).

Read it fully before writing code.

---

## Images

All images come from Urban Village's Instagram (@urbanvillagebyterivik) and their Google Maps listing. They are downloaded, optimized to WebP, and self-hosted in `/public/images/`.

**Do not hotlink Instagram URLs** — they expire.

Required images:
```
hero.webp
panel-01-dining.webp
panel-02-bar.webp
panel-03-cafe.webp
panel-04-wellness.webp
panel-05-games.webp
panel-06-events.webp
gallery-01.webp through gallery-07.webp
og-image.jpg (1200×630)
```

---

## Deployment

Connected to Vercel. Every push to `main` deploys to production. Every PR generates a preview URL.

```bash
git push origin main
```

---

## Business Info

- **Address:** Terivik Park, Alvan Ikoku, Nile Street Junction, Maitama, Abuja
- **Phone:** +234 803 333 7998
- **Email:** terivikparkurbanvillage@gmail.com
- **Instagram:** [@urbanvillagebyterivik](https://www.instagram.com/urbanvillagebyterivik/)
- **Hours:** Mon–Sat 10am–11pm · Sun 2pm–Late
