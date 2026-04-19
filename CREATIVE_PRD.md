# Urban Village by Terivik — Website Creative Direction & PRD

**Prepared for development handoff · Maitama, Abuja, Nigeria**  
**Stack: React (Next.js 14 App Router) · Tailwind CSS · Framer Motion · Vercel**

---

## 0. Preface — What This Document Is

This document contains everything required to design and build the official website for Urban Village by Terivik, a relaxation park and multi-venue destination in Maitama, Abuja. The business has no existing website. This is their first.

Every instruction in this document is intentional. Nothing is a placeholder or a suggestion. Treat this as a complete creative brief, design system, and technical specification — a single source of truth. Build from it with minimal back-and-forth.

> **Note on photography:** All images are sourced from Urban Village's Instagram (@urbanvillagebyterivik) and their Google Maps listing. Images must be downloaded and self-hosted — never hotlinked. See Section 9.

---

## 1. Brand Foundation

### 1.1 Who They Are

Urban Village by Terivik is a multi-acre outdoor park and leisure destination at Terivik Park, Alvan Ikoku, Nile Street Junction, Maitama — one of Abuja's most premium districts. They offer six distinct experiences under one roof: a full-service restaurant (Eyitomi), a bar, a café, a wellness suite (barbershop, salon, spa, gym), outdoor games (tennis, snooker, table tennis), and event hosting.

Approximately two years old. Instagram: @urbanvillagebyterivik. They have no website — their entire digital presence is Instagram, Facebook, and Google Maps. Every person searching for them lands on a third-party page. That is the gap this site fills.

### 1.2 The Core Brand Idea

The name is the whole idea. **Urban** = speed, pressure, modernity. **Village** = slowness, community, nature. The space resolves that tension — lush green parkland inside one of Abuja's fastest-moving districts.

The brand proposition is not "restaurant" or "park." It is **decompression**. What Urban Village sells is the permission to exhale. Food, drinks, wellness, games, events — these are all expressions of one deeper offering: a place where the city's pace does not reach you.

Every design decision flows from this. The website should feel like **arriving**, not browsing.

### 1.3 Positioning Statement

> Urban Village by Terivik is where Abuja's most discerning residents come to slow down. Not a restaurant. Not a park. A full-day escape in Maitama — where the food is serious, the greenery is real, and the only thing on the schedule is nothing at all.

### 1.4 Tone of Voice

Warm authority. Like a friend who knows exactly where to go and is genuinely pleased to tell you.

**Three rules for all copy:**
1. Short sentences. Always. Confidence doesn't need length.
2. Never describe what the imagery already shows.
3. Write for someone who is tired and deserves to be here — not someone who needs to be convinced.

| ✅ YES | ❌ NO |
|--------|-------|
| "Where the city exhales." | "Discover an amazing experience like no other" |
| "A few acres of green, good food on the table, and time that belongs to you." | "Abuja's number one destination for fine dining and relaxation!!!" |
| "Eat well." / "We're here." | "Explore our world-class offerings" |

---

## 2. Design System

### 2.1 Color Palette

Drawn from the physical space: deep park greens, warm earth tones from wooden furniture and paths, terracotta from the Nigerian landscape, and the golden quality of the park's evening light. No pure white exists on this site — all light surfaces use cream.

| CSS Token | Hex | Name | Use |
|-----------|-----|------|-----|
| `--forest` | `#1C2E1A` | Forest | Primary background. Most sections. |
| `--canopy` | `#2D4A28` | Canopy | Secondary backgrounds, nav on scroll. |
| `--night` | `#0F1A0E` | Night | Loading screen, footer, deepest darks. |
| `--earth` | `#4A3728` | Earth | Menu section background. |
| `--bark` | `#7A6147` | Bark | Secondary text, meta labels. |
| `--terracotta` | `#C4692A` | Terracotta | Primary accent. CTAs, hover fills, borders. |
| `--gold` | `#C9A84C` | Gold | Subtle hover glow on loading screen. |
| `--cream` | `#F5EFE6` | Cream | All light text. Never pure white. |
| `--dark` | `#1A1A18` | Dark | High-contrast text on light sections. |

**Background progression through the page (intentional):**
Night (loading) → Forest (hero, experience) → Earth (menu) → Forest (visit) → Night (footer). The page breathes like a full day at the park — from arrival to evening.

Define all tokens in `globals.css` as CSS custom properties and extend them in `tailwind.config.js`.

### 2.2 Typography

Two typefaces only. No exceptions.

| Role | Font | Source |
|------|------|--------|
| Display / Headings | Cormorant Garamond | Google Fonts |
| Body / UI | DM Sans | Google Fonts |

Load via `next/font/google` in `layout.jsx`. Subset to `latin`. `display: swap`.

**Cormorant Garamond** was chosen deliberately. It carries literary weight and old-world elegance without being stuffy. The italic is exceptionally beautiful. Use it large and often.

**Type Scale:**

| Level | Desktop | Mobile | Notes |
|-------|---------|--------|-------|
| Hero Display | 88px | 46px | Cormorant Garamond, weight 400, line-height 1.05 |
| H1 | 64px | 38px | Cormorant Garamond bold |
| H2 | 48px | 30px | Cormorant Garamond bold |
| Experience Name | 72px | 42px | Cormorant Garamond, centered |
| Section Label | 12px | 11px | DM Sans, ALL CAPS, 0.2em tracking, Terracotta |
| Body | 17px | 15px | DM Sans, line-height 1.7 |
| Menu Items | 18px | 16px | Cormorant italic for names, DM Sans for prices |
| Caption / Meta | 12px | 11px | DM Sans, color: Bark |

### 2.3 Spacing & Layout

- Max content width: `1280px`. Centered. `80px` side padding desktop, `20px` mobile.
- Section padding: `120px` vertical desktop, `72px` mobile minimum.
- Hero and experience panels: `100svh` exactly. Use `svh` not `vh` (handles iOS Safari chrome).
- No crowding. If content is fighting for space, remove content, not space.

**Spacing tokens:**
```css
--space-xs:  0.5rem;   /* 8px  */
--space-sm:  1rem;     /* 16px */
--space-md:  2rem;     /* 32px */
--space-lg:  4rem;     /* 64px */
--space-xl:  8rem;     /* 128px */
--space-2xl: 12rem;    /* 192px */
```

---

## 3. Interaction & Animation Language

### 3.1 Core Principle

Every animation should feel like nature — unhurried, organic, never performative. The interaction language mirrors the brand: calm, intentional, confident. Nothing bounces. Nothing spins. Nothing draws attention to itself.

Animations serve the content. They are not the content.

### 3.2 Scroll-Triggered Reveals

All content below the fold enters on scroll via Framer Motion `useInView`. Consistent pattern across the entire site:

- **Enter:** `opacity: 0 → 1`, `translateY: 32px → 0px`
- **Duration:** `0.65s`
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out, soft landing)
- **Stagger:** `0.08s` between sibling elements (menu items, gallery photos)
- **Threshold:** trigger at `15%` element visibility

> Build a single reusable `FadeInView` wrapper component. Accept a `delay` prop for stagger index. All scroll reveals use this component — animation logic lives in one place only.

### 3.3 Hover States

| Element | Behaviour |
|---------|-----------|
| Text links | Underline draws left-to-right. `0.3s ease-out`. Color: Terracotta. |
| CTA Buttons | Background fills left-to-right from Terracotta. Text stays Cream. `0.35s`. |
| Gallery images | `scale(1.0) → scale(1.03)`. `0.45s ease-out`. Parent `overflow: hidden`. |
| Nav items | `opacity 0.6 → 1.0`. No underline. |
| Experience panels | Image `scale(1.0) → scale(1.02)` while panel is active. `1.2s`. Very subtle. |

### 3.4 Custom Cursor (Desktop Only)

A small circle (`10px` diameter, Cream, `60%` opacity) follows the cursor on desktop. On hover over interactive elements: expands to `32px`, opacity drops to `30%`, `1px` Terracotta border appears. Transition: `0.2s ease-out`.

On mobile: no custom cursor — standard OS cursor only.

Implementation: `CustomCursor` component at root layout level. Uses `requestAnimationFrame` for smooth tracking. Hidden on touch devices via `useEffect` check on `navigator.maxTouchPoints > 0`.

### 3.5 Navigation Behaviour

- **Initial:** transparent background, logo and hamburger in Cream.
- **On scroll past 80px:** background becomes `rgba(15, 26, 14, 0.88)` + `backdrop-filter: blur(12px)`. Height compresses `80px → 62px`. `0.4s ease`.
- **On scroll back to top:** returns to transparent. `0.4s ease`.
- **Desktop nav links:** only visible after scroll — hidden at the top intentionally. At the very top, the hero and tagline do the navigating. Showing links immediately crowds the opening moment.

### 3.6 Page Transitions

Route changes: full-page `opacity 0 → 1`, `0.4s`. No slide, no clip. Implemented via Framer Motion `AnimatePresence` at layout level.

### 3.7 Reduced Motion

All animations must respect `@media (prefers-reduced-motion: reduce)`. When active: all `translateY` values become `0`, all durations become `0.01ms`, opacity fades remain as the only motion. Site must be fully usable with motion completely off.

---

## 4. Loading Screen — The Canopy Reveal

### 4.1 Concept

The loading screen does not say "website is loading." It begins the brand experience before the brand has technically started. Its job: make the 2–3 seconds of load time feel like an intentional breath before entering.

**Concept: The Canopy.** You are looking up through tree leaves at the sky. A warm blur of light resolves slowly into legibility — and through that light, the brand name appears.

### 4.2 Visual Sequence

| Time | What Happens |
|------|-------------|
| `t = 0s` | Screen is solid Night `#0F1A0E`. Nothing visible. |
| `t = 0–0.6s` | A radial gradient appears at center: warm orb (`rgba(201,168,76,0.12)` core → transparent edge, `radius 40%`). Pulses gently: `scale 1.0→1.08→1.0` over `3s`, looping until exit. |
| `t = 0.4s` | `"URBAN VILLAGE"` fades in from `translateY(10px)` to `0`, `opacity 0→1`. Cormorant Garamond, `42px`, Cream, `letter-spacing: 0.25em`. Duration `0.9s ease-out`. |
| `t = 0.8s` | `"BY TERIVIK"` fades in below. DM Sans, `11px`, Cream `50%` opacity, `letter-spacing: 0.35em`. Duration `0.6s ease-out`. |
| `t = 2.4s+` | Once hero image is fully loaded: loading screen fades `opacity → 0`. Duration `0.6s`. Unmounts. Hero is visible. |
| Fallback | If hero image hasn't loaded by `t = 4s`: exit anyway. A loading state on the hero handles the graceful fallback. |

### 4.3 Why No Skip Button

The sequence is `2.4 seconds`. That is short enough to never frustrate. A skip button would signal we ourselves find the intro unnecessary — which undermines the whole point. If the animation is good, no one skips.

Exception: if load exceeds `3s` due to slow connection, a `1px` Terracotta line grows across the bottom of the loading screen. Progress, not panic.

---

## 5. Navigation

### 5.1 Desktop

Fixed position. Full width. `z-index` above all content.

- **Left:** Wordmark — `"URBAN VILLAGE"` in Cormorant Garamond, `15px`, Cream, `letter-spacing: 0.18em`.
- **Right (after scroll):** Five links in DM Sans, `13px`, Cream — `Experience · Dine · Wellness · Events · Visit Us`. Pipe separators at `30%` opacity.
- **Far right (always):** `"Reserve a Table"` — small outlined pill. `1px` Cream border, transparent background. Hover: Terracotta fill, `0.35s`.

### 5.2 Mobile

Hamburger icon: three lines `18px` wide, `1.5px` thick, Cream, `6px` gap. Top-right, `20px` from edge. Hit target: `48×48px`.

**Full-screen overlay on tap:**
- Background: Forest `#1C2E1A`
- Close `×` button top-right, Cream
- Five nav items: Cormorant Garamond `48px`, Cream. Each preceded by a numeral `01–05` in DM Sans `12px`, Terracotta, `8px` above the label
- Bottom of overlay: `@urbanvillagebyterivik` and `+234 803 333 7998` in DM Sans `14px`, Cream `60%` opacity
- Overlay enters: `opacity 0→1` + `translateY(-20px)→0`, `0.4s`. Items stagger `0.07s` apart.
- Overlay exits: `opacity 1→0`, `0.25s`. Fast.

---

## 6. Section-by-Section Specifications

---

### 6.1 Hero Section

`id="hero"` · Full viewport (`100svh`)

**Background image:** Full-bleed, `object-fit: cover`. Gradient overlay: `linear-gradient(to top, rgba(15,26,14,0.65) 0%, rgba(15,26,14,0.15) 100%)`. This darkens the bottom third where text lives; lets the top breathe.

**Image:** The widest, most lush park shot available. Priority: golden hour, lush canopy, outdoor dining tables visible in greenery. This is the single most important image choice on the site. Take time selecting it.

**Content** — vertically centered at `58%` from top. Max-width `680px`. Horizontally centered.

```
Location label:    Maitama · Abuja
                   DM Sans, 12px, Cream 70%, letter-spacing 0.2em, ALL CAPS

[24px gap]

Headline:          Where the city exhales.
                   Cormorant Garamond, 88px desktop / 46px mobile
                   Cream, weight 400, line-height 1.05
                   The period is intentional.

[1px horizontal rule — Cream 30% opacity, 48px wide, centered]

Sub-headline:      A park. A table. A moment that's yours.
                   DM Sans, 17px desktop / 14px mobile, Cream 75%, line-height 1.6

[40px gap]

Primary CTA:       Reserve a Table
                   1px Cream border, transparent fill, Cream text
                   DM Sans 13px, letter-spacing 0.12em, 14px/32px padding
                   Hover: Terracotta fill left-to-right, 0.35s

Secondary CTA:     Explore →
                   No border, no background. Cream, DM Sans 13px.
                   Arrow slides 4px right on hover, 0.25s.
```

**Scroll hint:** Bottom-center. A `1px` vertical Cream `40%` line (`40px` tall) with a small circle pulsing at the bottom every `2s`. No text. Fades out after `40px` scroll.

---

### 6.2 Brand Manifesto

`id="manifesto"` · Background: Forest · Padding: `120px/80px`

No images. Centered content. Max-width `640px`.

```
Section label:     About
                   DM Sans 12px, Terracotta, ALL CAPS, letter-spacing 0.2em

Headline:          One place. Everything you need.
                   Cormorant Garamond 52px / 34px, Cream

Body:              Abuja moves fast. We built something that doesn't.
                   A few acres of green, good food on the table,
                   and time that belongs to you.
                   Come for one thing. Stay until you've had everything.
                   DM Sans 17px, Cream 80%, line-height 1.8, max-width 540px

[40px gap]

Italic line:       "Six experiences. One address. Maitama."
                   Cormorant Garamond italic, 22px, Cream 60%
```

---

### 6.3 Experience Panels

`id="experience"` · Six full-viewport panels · One per experience

#### Desktop Behaviour (Sticky Scroll)

Container: `position: sticky`. Total section height: `600vh` (`6 × 100vh`).

Use Framer Motion `useScroll` on the section container. Derive `activePanel` index from `scrollYProgress` (divided into 6 equal segments). Use `AnimatePresence` to crossfade image and text content between panels.

Right edge of section: `2px` vertical progress bar. Forest background, Terracotta fill growing `0% → 100%` as you scroll through all 6 panels.

#### Mobile Behaviour

Drop the sticky approach entirely. Each panel is `100svh`, its own background image, scrolls naturally and sequentially. Simpler, lighter, perfectly suited to thumb-scrolling.

#### Per-Panel Structure (both viewports)

- **Background:** Full-bleed image, `object-fit: cover`, with gradient: `linear-gradient(to top, rgba(15,26,14,0.7) 0% 50%, rgba(15,26,14,0.2) 70% 100%)`
- **Panel number:** Top-left, `24px` from edges. Cormorant Garamond `14px`, Cream `35%` opacity. Format: `"01"` through `"06"`.
- **Category label:** Centered, `8px` above headline. DM Sans `11px`, Terracotta, `letter-spacing: 0.2em`, ALL CAPS.
- **Experience name:** Centered. Cormorant Garamond `72px` / `42px` mobile. Cream, weight 400.
- **Description:** Centered, `20px` below name. DM Sans `16px` / `14px` mobile, Cream `75%` opacity. Max 2 lines. Max-width `480px`.
- **CTA:** Centered, `40px` below description. Small Cream text link with `→`.

---

#### The Six Panels — Complete Copy & Image Spec

---

**Panel 01 — Dining**

```
Category:     Dining
Name:         Eat well.
Description:  Nigerian roots, world-class technique. Eyitomi's kitchen
              brings both to the table with equal confidence.
CTA:          See the Menu →
Image:        Outdoor dining space. Table set with food. Lush greenery
              around it. Warm evening light preferred.
```

---

**Panel 02 — Bar & Drinks**

```
Category:     Bar & Drinks
Name:         Drink slowly.
Description:  From palmwine served straight to frozen daiquiris made
              with care. Every glass here is an occasion.
CTA:          View Drinks →
Image:        A cocktail or the bar area at night. Warm ambient light.
              Rich colours. If a drink is in hand, that works perfectly.
```

---

**Panel 03 — The Café**

```
Category:     The Café
Name:         Start gently.
Description:  Artisanal coffees, fresh pastries. The right beginning —
              or a quiet pause in the middle of the day.
CTA:          Morning Menu →
Image:        Coffee cups and pastries. Soft morning or afternoon light.
              The café interior if available.
```

---

**Panel 04 — Wellness**

```
Category:     Wellness
Name:         Be looked after.
Description:  A barbershop, salon, spa, and gym. The rare luxury of
              giving yourself proper attention.
CTA:          Wellness →
Image:        Spa, salon, or gym interior. Clean, warm, professional.
```

---

**Panel 05 — Outdoor Games**

```
Category:     Outdoor Games
Name:         Play outside.
Description:  Tennis, snooker, table tennis. The park gives you the
              excuse you needed to stay outside all afternoon.
CTA:          Activities →
Image:        Tennis court or games area. Lush park backdrop visible.
```

---

**Panel 06 — Events**

```
Category:     Events
Name:         Make it a moment.
Description:  Birthdays, anniversaries, corporate gatherings.
              We build the setting. You make the memory.
CTA:          Plan an Event →
Image:        A party or event setup. Tables dressed, warm evening
              lighting, people present or implied.
```

---

### 6.4 The Space — Photo Gallery

`id="space"` · Background: Forest · Padding: `120px` top, `80px` bottom

```
Section label:   The Space

Headline:        The space finds you.
                 Cormorant Garamond 56px / 36px, Cream

Sub:             Somewhere between the first course and the last drink,
                 you'll forget what you were rushing towards.
                 DM Sans 16px, Cream 70%, centered, max-width 500px
```

**Grid — Desktop:** 3 columns. Column 1: two portrait images stacked. Column 2: one large landscape spanning full height of both portraits. Column 3: two portrait images stacked. `12px` gaps.

**Grid — Mobile:** 2-column grid, square-cropped (`aspect-ratio: 1/1`), 3 rows deep. `8px` gaps.

No captions. No labels. No frames.

Image hover: `scale(1.03)`, `0.4s ease-out`, `overflow: hidden` on parent.

**Image selection guide (6–7 photos from Instagram/Maps):**
1. Wide shot of the park from a distance — showing canopy and full scope
2. Outdoor dining table with food present
3. Bar or cocktail moment
4. Interior — café or wellness space
5. Games/activity area
6. Evening/night shot showing the warm lighting atmosphere
7. Optional: any unusually beautiful shot that defies category

---

### 6.5 Menu Preview

`id="menu"` · Background: Earth `#4A3728` · Padding: `120px` vertical

The only section with a warm brown background. It signals a shift from "the park" to "the table." It feels like sitting down. The menu shows enough to make someone hungry — not everything.

```
Section label:   Eyitomi Restaurant

Headline:        A table is just the beginning.
                 Cormorant Garamond, centered

Sub:             Nigerian cooking done properly.
                 International flavours done honestly.
                 DM Sans 17px, Cream 80%
```

**Layout:** Two columns desktop / single column mobile. Thin `1px` Cream `20%` vertical rule between columns on desktop.

**Column titles:** DM Sans `11px`, Cream `50%`, ALL CAPS, `letter-spacing: 0.2em`.

**Item rows:** Dish name in Cormorant Garamond italic `18px` Cream (left) · Price in DM Sans `14px` Cream `60%` (right) · Very faint dotted connector between them. `28px` between items.

---

**Kitchen**

| Dish | Price |
|------|-------|
| Chicken Pepper Soup | ₦4,000 |
| Seafood Okro | ₦12,500 |
| Nkwobi | ₦6,500 |
| Grilled Catfish | ₦13,000 |
| Urban Village Special Rice | ₦9,500 |
| Abacha | ₦8,500 |
| Bole & Titus Fish | ₦7,500 |

**Drinks**

| Drink | Price |
|-------|-------|
| Palmwine | ₦1,500 |
| Arabian Tea | ₦4,500 |
| Frozen Mojito | ₦6,500 |
| Frozen Pineapple Daiquiri | ₦8,000 |
| Terivik Vibes | ₦8,500 |
| Frozen Strawberry Daiquiri | ₦8,000 |

Below both columns: full-width `1px` Cream `20%` divider, then centered CTA: `"View Full Menu →"` in DM Sans `14px`, Cream.

> **Note:** "View Full Menu" links to a PDF or a separate `/menu` page — whichever the client provides. If not available at build time, omit this link.

---

### 6.6 Visit Us

`id="visit"` · Background: Forest · Padding: `120px` top, `100px` bottom

```
Section label:   Find Us

Headline:        We're here.
                 Cormorant Garamond, Cream
                 — The simplest headline on the page. After everything
                 the user has seen, this is the brand completing the
                 invitation. Short. Certain. Warm. —

Sub:             Come any day of the week. Stay as long as you like.
                 DM Sans 17px, Cream 80%
```

**Two columns desktop / stacked mobile:**

**Left — Opening Hours**
- Column title: `"Opening Hours"` — DM Sans `11px`, Terracotta, ALL CAPS
- Monday – Saturday: 10:00am – 11:00pm
- Sunday: 2:00pm – Late
- `24px` below: `"Entry fee applies. Walk-ins welcome."` — DM Sans `13px`, Cream `55%`

**Right — Location**
- Column title: `"Location"` — DM Sans `11px`, Terracotta, ALL CAPS
- Address in DM Sans `16px`, Cream, `line-height: 1.7`:
  ```
  Terivik Park
  Alvan Ikoku, Nile Street Junction
  Maitama, Abuja, Nigeria
  ```
- `24px` below: `"Open in Maps →"` — Cream text link, opens Google Maps in new tab

**Contact bar** (full-width, centered, `64px` below columns):
```
+234 803 333 7998  |  terivikparkurbanvillage@gmail.com
DM Sans 15px, Cream 70%
Phone is tel: link. Email is mailto: link.
```

**Reserve CTA** (`48px` below contact bar, centered):
```
Headline:   Ready when you are.
            Cormorant Garamond 36px / 26px, Cream

Button:     Call to Reserve
            → links to tel:+2348033337998
            Solid Terracotta fill (#C4692A)
            Cream text, DM Sans 14px, letter-spacing 0.1em
            18px vertical / 48px horizontal padding
            border-radius: 2px
            Hover: darken to #A3551F
```

> No online booking system in v1. The CTA calls the business directly. A Sevenrooms or similar integration is v2 scope.

---

## 7. Footer

Background: Night `#0F1A0E` · Padding: `64px` vertical

The site closes as it opened — in near-darkness, with just enough light to read. No elaborate columns.

**Content — centered:**
- Wordmark: `"URBAN VILLAGE"` — Cormorant Garamond `18px`, Cream `80%`, `letter-spacing: 0.2em`
- `12px` below: `"by Terivik"` — DM Sans `11px`, Cream `40%`
- `40px` below: three links with pipe separators — DM Sans `12px`, Cream `50%`: `Instagram · Google Maps · Contact`
- `40px` below: `© 2025 Urban Village by Terivik. All rights reserved.` — DM Sans `11px`, Cream `30%`

---

## 8. Component Architecture

### 8.1 File & Folder Structure

```
app/
  layout.jsx              — Root layout: fonts, metadata, CustomCursor, Navbar
  page.jsx                — Home page: assembles all sections in order
  globals.css             — Design tokens (CSS custom properties), base reset

components/
  layout/
    Navbar.jsx            — Transparent → frosted-glass, scroll-aware, mobile toggle
    Footer.jsx            — Dark minimal footer
    MobileMenu.jsx        — Full-screen overlay, AnimatePresence
    CustomCursor.jsx      — Desktop only, rAF-based tracking

  sections/
    LoadingScreen.jsx     — Canopy reveal sequence, Framer Motion
    Hero.jsx              — Full-viewport, preloads image for loading screen exit
    Manifesto.jsx         — Brand statement, fade-in copy
    ExperiencePanels.jsx  — Sticky scroll (desktop) / stacked sections (mobile)
    SpaceGallery.jsx      — Asymmetric photo grid
    MenuPreview.jsx       — Two-column menu display
    VisitUs.jsx           — Hours, address, reserve CTA

  ui/
    FadeInView.jsx        — Framer Motion scroll-reveal wrapper (reusable)
    SectionLabel.jsx      — Small label component (Terracotta, ALL CAPS, tracked)
    Button.jsx            — Primary / outline / text link variants
    ImageWithOverlay.jsx  — next/image with gradient overlay prop

public/
  images/
    hero.webp
    panel-01-dining.webp
    panel-02-bar.webp
    panel-03-cafe.webp
    panel-04-wellness.webp
    panel-05-games.webp
    panel-06-events.webp
    gallery-01.webp  through  gallery-07.webp
    og-image.jpg                — 1200×630, hero image + wordmark overlay
```

### 8.2 Key Implementation Notes

**`FadeInView.jsx`**
Wraps any content that should animate on scroll. Props: `delay` (number, default `0`) for stagger, `threshold` (default `0.15`), `once` (default `true`). Uses Framer Motion `useInView` + `motion.div` internally. This is the only place scroll-reveal animation logic lives.

**`LoadingScreen.jsx`**
Manages `isLoaded` state (boolean). Hero component preloads its background image via a hidden `new Image()` instance. On the `load` event, sets `isLoaded = true`, which triggers the loading screen's exit animation. A `4s` `setTimeout` is the connection-failure fallback. The component unmounts from the DOM after exit completes to avoid any residual z-index stacking.

**`ExperiencePanels.jsx`**
Desktop (`>= 1024px`): wrap in a container, use `useScroll` with a `ref` attached to it, derive `activePanel` (`0–5`) from `scrollYProgress` range. Each panel's image uses `opacity: activePanel === index ? 1 : 0` with a `0.8s` transition. Text content uses `AnimatePresence` to crossfade. On mobile (`< 1024px`): render as plain `<section>` elements stacked vertically — no JS scroll magic.

**`CustomCursor.jsx`**
Renders only when `navigator.maxTouchPoints === 0` (checked in `useEffect` to avoid SSR mismatch). Attaches `mousemove` to `window`. Tracks position via `useRef` (not `useState` — avoids re-renders). Updates cursor `transform: translate()` via `requestAnimationFrame`. Toggles expanded class when hovering elements with `data-cursor="hover"`.

**`Navbar.jsx`**
Uses a simple `scroll` event listener (or Framer Motion `useScroll`). Toggles a `scrolled` boolean at `80px` depth. Tailwind class merging via `clsx`/`cn` handles the two visual states cleanly. Nav link visibility tied to the same boolean.

---

## 9. Photography — Collection & Preparation

### 9.1 Sources
- **Instagram:** @urbanvillagebyterivik — download highest-res images from posts and reels
- **Google Maps:** Photos uploaded by Urban Village themselves (not user-submitted photos)

**Do NOT** hotlink Instagram URLs — they expire. All images must be downloaded, optimized, and self-hosted in `/public/images/`.

### 9.2 Optimization Requirements

- Convert all images to **WebP** format. Next.js Image component will additionally serve AVIF to browsers that support it.
- Hero: ≤ `180KB` at `1920px` wide
- Experience panel images: ≤ `120KB` each at `1440px` wide
- Gallery images: ≤ `80KB` each at `900px` wide
- Use `next/image` for every image. Set `priority={true}` on the hero and the first experience panel. All others lazy-load.
- Hero `sizes`: `"100vw"`. Gallery `sizes`: `"(min-width: 1024px) 33vw, 50vw"`.

### 9.3 What to Prioritise When Selecting Images

- Warm golden-hour or evening light — matches the site palette
- Lush, prominent greenery
- Natural-looking food shots — not over-staged
- Events section only: use photos with people present
- Avoid: heavily filtered images, poor exposure, text baked into the image

---

## 10. Mobile-First Specifications

This site will be experienced predominantly on phones. That is not a secondary concern — it is the primary one.

### 10.1 Breakpoints

| Name | Range |
|------|-------|
| Default (mobile) | 375px – 639px |
| `sm` | 640px – 767px |
| `md` | 768px – 1023px |
| `lg` (desktop) | 1024px+ |
| `xl` | 1280px+ |

### 10.2 Mobile-Specific Rules

- `100svh` everywhere for hero and panels (handles iOS Safari toolbar)
- No sticky scroll in `ExperiencePanels` on mobile
- No custom cursor on mobile
- Touch targets: minimum `48×48px` on all interactive elements
- Tap active state: `opacity: 0.7` for `0.1s` on touch
- No text smaller than `13px`
- Gallery: 2-column grid, `aspect-ratio: 1/1`, `object-fit: cover`
- Menu: single column, `32px` between items
- Footer: fully centered, stacked

**Mobile performance target:** LCP under `2.5s` on a mid-range Android device on 4G. Achievable with WebP images, `priority` loading, and Vercel's CDN edge network.

---

## 11. Performance & Technical Requirements

### 11.1 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS — tokens in CSS vars, extended in `tailwind.config.js` |
| Animations | Framer Motion — `useScroll`, `useTransform`, `useInView`, `AnimatePresence` |
| Images | `next/image` — automatic WebP/AVIF optimization |
| Fonts | `next/font/google` — `Cormorant_Garamond`, `DM_Sans`. Latin subset. `display: swap`. |
| Deployment | Vercel |
| CMS | None (v1 is static) |
| Analytics | Vercel Analytics (privacy-friendly, no cookie banner) |

### 11.2 Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s (mobile 4G) |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| JS bundle (gzipped, excl. images) | < 200KB |

### 11.3 Accessibility

- All images have descriptive `alt` text as specified in each section
- Minimum contrast ratio `4.5:1` for all body text (Cream on Forest = `10.3:1` ✓)
- Focus states: `2px` Terracotta outline on all focusable elements — never suppressed without replacement
- Semantic HTML: `nav`, `main`, `section`, `h1–h3`, `button`, `a` — used correctly
- Loading screen does not trap keyboard focus
- Mobile menu traps focus within overlay while open (`focus-trap-react` or equivalent)
- Skip-to-content link: visually hidden, focusable, first element in DOM, links to `#main-content`
- `prefers-reduced-motion`: fully respected (Section 3.7)

---

## 12. SEO

### 12.1 Metadata

```jsx
// app/layout.jsx
export const metadata = {
  title: 'Urban Village by Terivik | Relaxation Park & Restaurant, Maitama Abuja',
  description: "Abuja's premier outdoor escape. Dine, unwind, and play at Urban Village by Terivik Park — lush gardens, great food, cocktails, spa, and events in Maitama.",
  openGraph: {
    title: 'Urban Village by Terivik — Maitama, Abuja',
    description: 'A park. A table. A moment that\'s yours. Dining, drinks, wellness and events in the heart of Maitama.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}
```

### 12.2 JSON-LD Schema (in `layout.jsx` `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Restaurant"],
  "name": "Urban Village by Terivik",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Terivik Park, Alvan Ikoku, Nile Street Junction",
    "addressLocality": "Maitama, Abuja",
    "addressCountry": "NG"
  },
  "telephone": "+2348033337998",
  "email": "terivikparkurbanvillage@gmail.com",
  "openingHours": ["Mo-Sa 10:00-23:00", "Su 14:00-00:00"],
  "servesCuisine": ["Nigerian", "International"],
  "priceRange": "₦₦₦",
  "geo": { "@type": "GeoCoordinates", "latitude": 9.0970065, "longitude": 7.4802306 },
  "sameAs": [
    "https://www.instagram.com/urbanvillagebyterivik/",
    "https://www.facebook.com/p/Urban-Village-by-TeriVik-61552014205588/"
  ]
}
```

---

## 13. Deployment

1. Create GitHub repo: `urban-village-terivik`
2. Init Next.js 14: `npx create-next-app@latest --app --tailwind --typescript`
3. Connect repo to Vercel dashboard — auto-detects Next.js, no config needed
4. Push to `main` → automatic production deploy
5. No environment variables needed for v1
6. Configure client's domain in Vercel once registered — SSL automatic
7. Every PR generates a preview URL for client review before merging

---

## 14. V2 Scope (Intentionally Out of V1)

These items must not delay v1 launch. Architecture should remain extensible for them:

- Online table reservation (Sevenrooms / OpenTable integration)
- CMS for menu content (Contentful or Sanity)
- Events calendar page
- Blog / press section
- Live Instagram feed pull (replacing static gallery)
- Multi-language support
- Online menu PDF viewer

> **V1 Priority Statement:** Version 1 has one job — to exist, to be beautiful, and to get people through the door. Launch fast, perform well, make the client look like they take themselves seriously. Everything else is v2.

---

## 15. Notes to the Developer

Read this document fully before writing a single line of code. The decisions here are not arbitrary — each one has a reason, and the reasons compound. A loading screen that feels wrong undermines the hero. A hero with the wrong image undermines the manifesto. The site is one experience, not a collection of components.

When in doubt: **do less**. Remove before you add. Leave space before you fill it. Every great reference site that shaped this direction — Gaia, Daikan, Buna — earns its power through restraint.

The client does not have a website today. What we build is their entire first digital impression. Make it one they're proud of.

---

*End of document.*
