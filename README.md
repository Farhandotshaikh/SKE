# SKE Society — Website (React + Vite + Tailwind)

Pixel-matched clone of the SKE Society design: **Home**, **Programmes** and **Facilities** pages, plus the
About SKE / Institutions (mega menu) / Programmes nav dropdowns. Other nav links open a "Coming soon" page.

## Run locally
```bash
npm install
npm run dev
```

## Build / deploy
```bash
npm run build      # outputs /dist
```
Push to GitHub and import into Vercel (framework preset: Vite). `vercel.json` handles SPA routing.

## Stack
React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · Lucide · React Router 6

## Structure
- `src/data/site.js` — nav menus, programmes, facilities, copy and image paths
- `src/components/` — TopBar, Navbar (dropdowns), Footer, ApplyCTA, etc.
- `src/components/home/` — Home page sections
- `src/pages/` — Home, Programmes, Facilities, ComingSoon
- `public/images/` — photos and logo extracted from the design file

## Design tokens (src/index.css)
Indigo `#393185` · Dark indigo `#261e73` · Amber `#ffc128` · Off-white `#f8f7f5` · Footer black `#0b0b0c`
Fonts: Poppins (headings) + DM Sans (body), loaded from Google Fonts in `index.html`.
