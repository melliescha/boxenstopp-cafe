import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname } from 'path';

const roots = ['src/assets', 'src/assets/gallery', 'public'];
const skip = new Set(['favicon.png', 'apple-touch-icon.png', 'placeholder.svg', 'og-logo.png']);

const MAX_W = 1600;
const JPG_Q = 72;
const PNG_Q = 80;

let saved = 0, count = 0;
for (const root of roots) {
  let files;
  try { files = readdirSync(root); } catch { continue; }
  for (const f of files) {
    const p = join(root, f);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (!st.isFile()) continue;
    const ext = extname(f).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    if (skip.has(f)) continue;
    const before = st.size;
    try {
      const img = sharp(p, { failOn: 'none' });
      const meta = await img.metadata();
      const hasAlpha = meta.hasAlpha;
      let pipeline = sharp(p, { failOn: 'none' });
      if (meta.width && meta.width > MAX_W) {
        pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
      }
      let out;
      if (ext === '.png' && hasAlpha) {
        out = await pipeline.png({ quality: PNG_Q, compressionLevel: 9, palette: true }).toBuffer();
      } else {
        out = await pipeline.jpeg({ quality: JPG_Q, mozjpeg: true, progressive: true }).toBuffer();
        if (ext === '.png') {
          // rewrite as jpeg but keep .png filename? Better keep extension consistent.
          // Just overwrite with jpeg-encoded png-named file breaks. Instead re-encode as png.
          out = await pipeline.png({ quality: PNG_Q, compressionLevel: 9, palette: true }).toBuffer();
        }
      }
      if (out.length < before) {
        const { writeFileSync } = await import('fs');
        writeFileSync(p, out);
        saved += before - out.length;
        count++;
        console.log(`${p}: ${(before/1024).toFixed(0)}KB -> ${(out.length/1024).toFixed(0)}KB`);
      }
    } catch (e) {
      console.error('fail', p, e.message);
    }
  }
}
console.log(`\nDone. ${count} files, saved ${(saved/1024/1024).toFixed(1)} MB`);
