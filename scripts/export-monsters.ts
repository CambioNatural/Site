import {mkdirSync,writeFileSync} from 'node:fs';
import {presets,monsterSvg,monsterLayers,crownPaths,earPaths,bodyPath,mouthPath,eyeLayouts,pupils,patterns} from '../src/components/monsters/catalog';
const dir='public/monsters';mkdirSync(dir,{recursive:true});
presets.forEach((m,i)=>writeFileSync(`${dir}/monster-${String(i+1).padStart(2,'0')}.svg`,monsterSvg(m,`preset-${i+1}`)));
writeFileSync(`${dir}/catalog.svg`,`<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="1400" viewBox="0 0 1300 1400"><rect width="1300" height="1400" fill="white"/>${presets.map((m,i)=>`<g transform="translate(${i%5*260} ${Math.floor(i/5)*350})">${monsterLayers(m,`catalog-${i}`)}<text x="130" y="340" text-anchor="middle" font-family="sans-serif" font-size="12">${String(i+1).padStart(2,'0')}</text></g>`).join('')}</svg>`);
const parts={body:bodyPath,mouth:mouthPath,...Object.fromEntries(Object.entries(crownPaths).map(([k,v])=>['crown-'+k,v])),...Object.fromEntries(Object.entries(earPaths).filter(([,v])=>v).map(([k,v])=>['ears-'+k,v]))};
mkdirSync(`${dir}/parts`,{recursive:true});
for(const [name,d] of Object.entries(parts))writeFileSync(`${dir}/parts/${name}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 330"><path d="${d}" fill="${name==='mouth'?'#ffffff':'#0b0d08'}"/></svg>`);
writeFileSync(`${dir}/presets.json`,JSON.stringify(presets,null,2));
writeFileSync(`${dir}/README.md`,'# We Are All Monsters — vector catalog\n\n20 manually reconstructed reference designs, numbered left-to-right, top-to-bottom. Source: user-supplied preview.jpg. Approximate reconstruction, not recovered original paths. SVGs contain editable named groups and no embedded raster images.\n\nAll parts share a 260 × 330 viewBox. Layer order: crown, ears, body, pattern, stripes, mouth, eyes, cheeks. Presets are appearance choices, independent of campaign archetypes.\n\nEdit catalog.ts and run `node --import tsx scripts/export-monsters.ts` to regenerate. The builder additionally supports pupil and palette combinations. This package does not establish ownership or licensing of the supplied reference.\n');
console.log(`Exported ${presets.length} monsters, ${Object.keys(parts).length} component SVGs and contact sheet.`);

for (const [key,values,layer] of [['eyes',eyeLayouts,'eyes'],['pupils',pupils,'eyes'],['pattern',patterns,'pattern']] as const) {
 for(const value of values){const m={...presets[0],[key]:value};const svg=monsterLayers(m,'part');const start=svg.indexOf(`<g data-layer="${layer}">`);let depth=1,pos=start+`<g data-layer="${layer}">`.length;const tags=/<g(?:\s[^>]*)?>|<\/g>/g;tags.lastIndex=pos;let match;while((match=tags.exec(svg))&&depth){depth+=match[0]==='</g>'?-1:1;pos=tags.lastIndex;}const content=svg.slice(start,pos);writeFileSync(`${dir}/parts/${key}-${value}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 330">${content}</svg>`);}
}
