# Qualia AI Consulting website

The marketing site for Qualia AI Consulting, Kyle Becker's company. Live address: https://www.engagequalia.com. Read `README.md` for the folder map and `content-todo.md` for what Kyle still needs to supply.

## Stack

- Astro 6 and Tailwind CSS 4, through `@tailwindcss/vite`. Same setup as `Departure-Website`.
- Vite is pinned to version 7 in `package.json`. Astro 6 uses Vite 7, and the Tailwind plugin breaks the build if npm installs Vite 8 beside it.
- Node 22.12 or newer. The project is an ES module.
- No React. Page scripts are plain TypeScript inside `.astro` files.

## Commands

```
npm run dev          local preview
npm run build        build into dist/
npm run check:text   writing rules check
npm run og           remake public/og.png (needs Playwright)
npm run shots        screenshots of every page (needs Playwright, run build first)
```

Run `npm run check:text` and `npm run build` before every commit. After a change to a page or a style, run `npm run shots` and look at the screenshots.

## Hosting

- GitHub Pages, published by `.github/workflows/deploy-site.yml` on every push to `main`.
- `public/CNAME` holds `www.engagequalia.com`.
- Never push or publish without asking Kyle first.

## Content rules

- Every fact on the site must be true. No invented numbers, clients, testimonials, awards or credentials.
- Missing content goes in `content-todo.md` as a placeholder. Placeholders never go on a page.
- Shared facts live in `src/config.ts`. Change a service, a step or a product there, not in a page.
- Buy and Build is described without naming its in game mentor until Kyle has written terms with him.
- The logo is an original drawing in `src/components/Logo.astro`. Do not trace the LinkedIn logo.

## Writing rules

- Clarity comes before brevity (Kyle, 2026-11-25). Everything a user, player or visitor reads is written in complete sentences that say what happens, why, and what it means for them. No fragments, and no labels standing in for an explanation. Define a term where the reader first meets it, for a smart reader who is new to the subject. Do not pad. Buttons, tabs and headings stay short.
- Plain words, short sentences, serious tone.
- One idea per sentence. Cut what does not help the reader decide.
- No em dashes or en dashes. No hyphens used to separate ideas. Use commas, colons or a new sentence.
- Spell out an abbreviation on first use and explain each technical term where it first appears.
- Never use: "seamless", "empower", "revolutionize", "unlock", "leverage", "not only... but also", or contrast phrasing such as "isn't X, it's Y" and "not just X".
- `scripts/check-text.mjs` enforces part of this. Keep it passing.

## Look

- Deep indigo to violet with a teal accent. Tokens are at the top of `src/styles/global.css`.
- Bricolage Grotesque for headings, IBM Plex Sans for reading, IBM Plex Mono for small labels.
- Dark sections carry the grid and the circuit lines. Light sections carry the content cards.
- Motion is small and stops when the visitor asks for reduced motion.
- No stock photos and no emoji. Product screens in `public/work/` are real screenshots of the live products at 1280 by 800.
- Works from 360 pixels wide. Custom classes in `global.css` are not in a Tailwind layer, so they win over utilities: do not put `hidden` on an element with the class `btn`.

## Contact form

Posts to the Supabase table `site_leads` in the Qualia Trace project (`zaczqcaorublmdndtbbe`) with the public key. Settings are in `src/config.ts`. The table comes from `supabase/site_leads.sql`. On failure the form offers an email to support@engagequalia.com.
