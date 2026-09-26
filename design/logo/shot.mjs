import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const W='/home/user/workout-plan/';
const b = await chromium.launch();
async function shot(file, size, out, bg, transparent){
  const p = await b.newPage({viewport:{width:size,height:size}});
  const svg = fs.readFileSync(W+file,'utf8');
  await p.setContent(`<html><body style="margin:0;background:${bg||'transparent'}"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" style="width:${size}px;height:${size}px;display:block"></body></html>`);
  await p.waitForTimeout(150);
  await p.screenshot({path: out, omitBackground: !!transparent});
  await p.close();
}
await shot('sims-fitness-gold.svg',1024,W+'sims-fitness-gold.png');
await shot('sims-fitness-gold.svg',180,W+'sims-fitness-gold-180.png');
await shot('sims-fitness-gold-transparent.svg',1024,W+'sims-fitness-gold-transparent.png',null,true);
// previews
await shot('sims-fitness-gold-transparent.svg',256,'/tmp/prev-on-light.png','#f6f3ec');
await shot('sims-fitness-gold-transparent.svg',256,'/tmp/prev-on-dark.png','#12110f');
await b.close();
