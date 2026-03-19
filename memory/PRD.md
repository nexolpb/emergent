# PRD — Solera Animal Center Landing Page Preview
**Created:** 2026-03-19
**Client:** Nexo Sites (for Solera Animal Center, Liberia, Guanacaste, Costa Rica)
**Type:** 1-page static landing page preview

---

## Original Problem Statement
Sales preview page for Solera Animal Center built by Nexo Sites. Single-page React app with ES/EN language toggle. All primary CTAs link to Nexo Sites sales WhatsApp. Business contact info is display-only. Must be subpath-safe for deployment at /clients/solera-animal-center-liberia/.

---

## Architecture

- **Frontend:** React (CRA) single-page, no React Router
- **Backend:** FastAPI (unchanged, not used by landing page)
- **Deployment:** Subpath-safe (`"homepage": "."` in package.json), relative asset paths

---

## Core Requirements (Static)

| # | Requirement | Status |
|---|-------------|--------|
| 1 | Tab title: "Solera Animal Center | Liberia, Guanacaste" | Done |
| 2 | ES/EN toggle with localStorage `lang` key, default ES | Done |
| 3 | All primary CTAs → SALES WhatsApp (wa.me/50689939071) | Done |
| 4 | Business phone/WhatsApp/email → display only, no href | Done |
| 5 | Subpath-safe deployment (`homepage: "."`) | Done |
| 6 | No React Router | Done |
| 7 | No fake testimonials, no Google star ratings | Done |

---

## What's Been Implemented (2026-03-19)

### Sections
1. **Header** — Sticky, glassmorphism, pill-shaped; logo + nav anchors + ES|EN toggle + CTA
2. **Hero** — Fraunces serif headline, trust bullets (4), dual CTAs, vet photo, floating "Emergencias 24/7" badge, trust stats row
3. **Emergency Strip** — High-contrast red banner, 24/7 message
4. **Services** — 12 service cards in responsive grid, Lucide icons
5. **Gallery** — 6 stock vet/pet photos (stock, to be replaced with real Solera photos)
6. **Location** — Google Maps iframe + address card
7. **Contact** — Display-only phone/WA/email, hours table (Mon–Sun + Emergencias 24/7)
8. **Pricing Teaser** — Dark green section, price from $349, 6 features, CTA
9. **Footer** — Brand, address, Facebook + Instagram social links, rights, "Vista previa creada por Nexo Sites"
10. **Floating WhatsApp** — Fixed bottom-right, sales WA link

### Design
- Fonts: Fraunces (serif headings) + Outfit (sans body) via Google Fonts
- Palette: Warm green (#4a7c59) + cream (#fbf9f6) + accent (#d4a373)
- Mobile-first, rounded cards, soft shadows, hover micro-animations

---

## Test Results (2026-03-19)
- **20/20 tests passed (100%)** via automated Playwright testing
- All CTAs verified to link to SALES WhatsApp
- Contact info confirmed as display-only
- ES/EN toggle + localStorage confirmed working
- Mobile hamburger menu confirmed working

---

## Prioritized Backlog

### P0 (critical, if requested)
- Replace stock gallery photos with real Solera Animal Center photos

### P1 (nice to have)
- Add smooth entrance animations (fade-in, slide-up on scroll)
- SEO meta tags (og:title, og:description, og:image)
- Add a "Contactar" floating button that also shows phone number on hover

### P2 (future)
- Add a multi-page version with individual service detail pages
- Contact form with WhatsApp redirect
- Blog/news section for vet tips

---

## Key Files

| File | Purpose |
|------|---------|
| `/app/frontend/src/components/SoleraLanding.jsx` | Full landing page — all sections + i18n |
| `/app/frontend/src/App.js` | Simple wrapper, no Router |
| `/app/frontend/public/index.html` | Tab title + Google Fonts |
| `/app/frontend/package.json` | `"homepage": "."` for subpath safety |

---

## Next Tasks
1. Replace gallery stock images with real Solera photos when available
2. Add scroll-triggered entrance animations
3. Optional: SEO meta tags (og tags) for social sharing
