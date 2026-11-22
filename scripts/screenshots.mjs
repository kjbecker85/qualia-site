// Full page screenshots of the built site, for a visual check. Run `npm run build` first.
// Needs Playwright and Chrome, which are not in package.json. Run with NODE_PATH set to a folder that has them.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { serve } from './serve.mjs';

const { chromium } = createRequire(import.meta.url)('playwright');
const out = new URL('../screenshots/', import.meta.url).pathname;
fs.mkdirSync(out, { recursive: true });
const pages = [['home', '/'], ['services', '/services/'], ['work', '/work/'], ['about', '/about/'], ['contact', '/contact/'], ['privacy', '/privacy/']];

const { server, url } = await serve(new URL('../dist', import.meta.url).pathname);
const browser = await chromium.launch();
async function shoot(name, route, viewport, scale, after) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: scale, reducedMotion: 'reduce' });
  await ctx.route(/posthog\.com/, (r) => r.abort()); // keep test visits out of the analytics
  const page = await ctx.newPage();
  await page.goto(url + route, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  if (after) await after(page);
  await page.screenshot({ path: `${out}${name}.png`, fullPage: !after });
  await ctx.close();
  console.log('saved', `${out}${name}.png`);
}
for (const [name, route] of pages) await shoot(`${name}-1440`, route, { width: 1440, height: 900 }, 1);
await shoot('home-390', '/', { width: 390, height: 844 }, 2);
await shoot('home-390-menu', '/', { width: 390, height: 844 }, 2, async (p) => { await p.click('#menu-btn'); await p.waitForTimeout(200); });
await shoot('home-360', '/', { width: 360, height: 780 }, 1);
await browser.close();
server.close();
