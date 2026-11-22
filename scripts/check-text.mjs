// Checks the writing rules on every word a visitor can read. Fails the run on a banned word or a dash.
import fs from 'node:fs';
import path from 'node:path';

const banned = ['seamless', 'empower', 'revolutioniz', 'unlock', 'leverag', 'not only', 'not just', "isn't", 'game changer', 'cutting edge'];
const dashes = /[–—]|\s-\s|&mdash;|&ndash;/;
const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|ts|html)$/.test(f)) files.push(p);
  }
})('src');
files.push('scripts/og-template.html');

let bad = 0;
for (const file of files) {
  fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (line.includes('posthog')) return;
    const low = line.toLowerCase();
    for (const w of banned) if (low.includes(w)) { console.log(`${file}:${i + 1} banned "${w}"`); bad++; }
    if (dashes.test(line)) { console.log(`${file}:${i + 1} dash used to separate ideas`); bad++; }
  });
}
console.log(bad ? `${bad} problem(s)` : `Text rules pass in ${files.length} files`);
process.exit(bad ? 1 : 0);
