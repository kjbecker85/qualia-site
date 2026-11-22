# Qualia AI Consulting website

The marketing site for Qualia AI Consulting. It will be served at https://www.engagequalia.com by GitHub Pages. It replaces the old Wix site.

## Pages

| Address | What it is |
| --- | --- |
| `/` | Home: the promise, the problem, services, how an engagement works, what we have built, about, contact form |
| `/services` | The four services in detail |
| `/work` | The three products built by Qualia |
| `/about` | Kyle Becker and how Qualia works |
| `/contact` | The contact form and what happens next |
| `/privacy` | What the site collects |
| `/404` | Page not found |

## Run it

```
npm install
npm run dev          local preview at http://localhost:4321
npm run build        build the site into dist/
npm run check:text   check the writing rules on every page
npm run og           remake public/og.png, the image shown when a link is shared
npm run shots        full page screenshots into screenshots/ (run build first)
```

`npm run og` and `npm run shots` need Playwright and Chrome. They are not in `package.json`. Install Playwright in any folder and run with `NODE_PATH=<that folder>/node_modules`.

## Where things are

| Path | What it holds |
| --- | --- |
| `src/config.ts` | The facts the pages share: services, steps, products, email, the contact form settings |
| `src/layouts/Layout.astro` | Head tags, navigation, footer, analytics |
| `src/pages/` | One file for each page |
| `src/components/` | Logo, icons, circuit lines, product card, contact form |
| `src/styles/global.css` | Colors, fonts and shared styles |
| `public/` | Favicon, share image, product screens, `CNAME`, `robots.txt` |
| `supabase/site_leads.sql` | The table for contact form leads. Not applied yet |
| `content-todo.md` | What Kyle still needs to add or confirm |

## Contact form

The form inserts a row into the table `site_leads` in the Qualia Trace Supabase project, through the REST API with the public key. Row level security allows insert only. If the insert fails, the form shows a link that opens an email to support@engagequalia.com with the message filled in.

The table does not exist until `supabase/site_leads.sql` is applied. Until then every send shows the email link.

## Hosting

`.github/workflows/deploy-site.yml` builds the site and publishes it to GitHub Pages on every push to `main`. `public/CNAME` sets the address to `www.engagequalia.com`.

## Analytics

PostHog project "Qualia Apps". Every event carries `app: 'qualia-site'`. Events: page views, `book_call_click`, `product_click`, `email_click`, `lead_submitted`, `lead_failed`. No recordings. Do Not Track is respected.
