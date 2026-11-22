// Makes public/og.png (1200 x 630) from scripts/og-template.html.
// Needs Playwright and Chrome, which are not in package.json. Run with NODE_PATH set to a folder that has them.
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(new URL('./og-template.html', import.meta.url).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: new URL('../public/og.png', import.meta.url).pathname });
await browser.close();
console.log('saved public/og.png');
