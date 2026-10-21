import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import {presets,monsterSvg,cardSvg,crowns,ears,eyeLayouts,pupils,patterns} from '../../src/components/monsters/catalog';
test('20 distinct vector presets decode without raster dependencies',async()=>{
 assert.equal(presets.length,20);assert.equal(new Set(presets.map(m=>JSON.stringify(m))).size,20);
 for(const m of presets){const svg=monsterSvg(m);assert.ok(!svg.includes('<image'));const result=await sharp(Buffer.from(svg)).png().toBuffer({resolveWithObject:true});assert.equal(result.info.width,260);assert.equal(result.info.height,330);}
});
test('every selectable part composes into a decodable SVG',async()=>{
 const controls={crown:crowns,ears,eyes:eyeLayouts,pupils,pattern:patterns};
 for(const [key,values] of Object.entries(controls))for(const value of values){const svg=monsterSvg({...presets[0],[key]:value});await sharp(Buffer.from(svg)).png().toBuffer();assert.ok(!svg.includes('undefined'));}
});
test('card escapes user text and wraps long unbroken words',async()=>{
 const svg=cardSvg(presets[0],'<script>alert("test")</script> & care','A & B');assert.ok(!svg.includes('<script>'));assert.ok(svg.includes('&lt;script&gt;'));assert.ok(svg.includes('A &amp; B'));await sharp(Buffer.from(svg)).png().toBuffer();
 const long=cardSvg(presets[0],'X'.repeat(120),'A');assert.ok(!long.includes('X'.repeat(40)));assert.ok(long.includes('X'.repeat(39)));
});
