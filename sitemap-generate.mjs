import { generateSitemap } from 'ngx-sitemaps';
import { readFileSync, writeFileSync } from 'fs';
import { parseStringPromise, Builder } from 'xml2js';

const EXCLUDED = [];

// 1. Génération normale
await generateSitemap('https://cv-blanquet-laurent.netlify.app');

// 2. Lecture du sitemap généré
const raw = readFileSync('./dist/blanquet.laurent/browser/sitemap.xml', 'utf8');
const parsed = await parseStringPromise(raw);

// 3. Filtrage des routes exclues
// parsed.urlset.url = parsed.urlset.url.filter((entry) => {
//   const loc = entry.loc[0];
//   // Extraire uniquement le chemin sans le domaine
//   const path = new URL(loc).pathname.replace(/\/$/, ''); // supprime le slash final
//   return !EXCLUDED.includes(path); // correspondance exacte
// });

// 4. Réécriture
const builder = new Builder();
writeFileSync('./dist/blanquet.laurent/browser/sitemap.xml', builder.buildObject(parsed));

console.log('Sitemap généré et filtré ✓');
