import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialDocument,parseDocument} from '../src/lib/cms/schema';
import {documentImages,previewImages} from '../src/lib/cms/images';
import {pageKeys} from '../src/lib/cms/page-content';

test('legacy site documents preserve existing content and gain complete page defaults',()=>{
 const legacy={home:structuredClone(initialDocument.home),navigation:structuredClone(initialDocument.navigation)};
 const oldHome=legacy.home as unknown as Record<string,unknown>;
 delete oldHome.coreElements;delete oldHome.coreHeading;delete oldHome.seo;
 legacy.home.hero.heading='Existing published heading';
 const parsed=parseDocument(legacy);
 assert.equal(parsed.home.hero.heading,'Existing published heading');
 for(const page of pageKeys){assert.ok(Object.keys(parsed.pages[page].texts).length>10);assert.ok(parsed.pages[page].seo.title);}
});
test('all pages enforce image, URL and shape validation',()=>{
 for(const page of pageKeys){
  const doc=structuredClone(initialDocument);const key=Object.keys(doc.pages[page].images)[0];
  doc.pages[page].images[key].src='https://untrusted.test/image.png';assert.throws(()=>parseDocument(doc));
  const next=structuredClone(initialDocument);next.pages[page].texts.unknown='injected';assert.throws(()=>parseDocument(next));
  const link=Object.keys(next.pages[page].links)[0];if(link){delete next.pages[page].texts.unknown;next.pages[page].links[link]='javascript:alert(1)';assert.throws(()=>parseDocument(next));}
 }
 const settings=structuredClone(initialDocument);settings.settings.newsletterUrl='https://untrusted.test/embed';assert.throws(()=>parseDocument(settings));
});
test('private images from every page and home extra are covered by publication and previews',()=>{
 const doc=structuredClone(initialDocument);
 for(const page of pageKeys)doc.pages[page].images[Object.keys(doc.pages[page].images)[0]].src='draft:aabb-1234.webp';
 doc.home.coreElements[0].image.src='draft:cccc-1234.webp';doc.home.hero.leaf.src='draft:dddd-1234.webp';
 assert.equal(documentImages(doc).filter(i=>i.src.startsWith('draft:')).length,6);
 const preview=previewImages(doc);assert.equal(documentImages(preview).filter(i=>i.src.startsWith('draft:')).length,0);
 assert.equal(documentImages(preview).filter(i=>i.src.startsWith('/admin/media?')).length,6);
 assert.equal(doc.home.hero.leaf.src,'draft:dddd-1234.webp');
});
test('site content stays within existing database JSON envelope',()=>{assert.ok(Buffer.byteLength(JSON.stringify(initialDocument))<150000);});
