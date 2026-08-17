# Claassical — MakeMyTrip Blue & White Travel Revamp

React + TypeScript + Vite + Tailwind CSS + Framer Motion + lucide-react.

## Setup

This machine doesn't have Node.js installed. Install it first:

1. Download and install Node.js LTS from https://nodejs.org (v18+).
2. Restart your terminal so `node`/`npm` are on PATH.

## Run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/Header.tsx` — floating glass navbar with staggered reveal
- `src/components/Hero.tsx` — headline, sub, destination/date/guest search widget, floating 3D chips
- `src/components/AboutClaassical.tsx` — Personalized Travel / Expert Planning / Memorable Experiences tilt cards
- `src/components/PopularTours.tsx` — Wayanad / Munnar / Kochi / Vagamon image cards with ratings
- `src/components/PackageTypes.tsx` — Family / Honeymoon / Educational / Domestic / International tour tiles
- `src/components/Stats.tsx` — animated stat counters on a navy band
- `src/components/Testimonials.tsx` — traveler reviews with star ratings
- `src/components/Footer.tsx` — CTA + Claassical contact details & socials
- `src/components/TiltCard.tsx` — reusable 3D hover-tilt card (`rotateX/rotateY/z`)
- `src/components/RevealText.tsx` — word-by-word scroll reveal (Framer Motion `whileInView`)
- `src/components/GradientMesh.tsx` — animated MMT-blue gradient mesh background

## Content sourcing

Copy, stats, and contact details are adapted from `site.startupmatricks.in` (place names, package
categories, and business facts kept, headings/descriptions rewritten). Tour and category photos are
hotlinked directly from that site's own media library rather than copied into this repo.
