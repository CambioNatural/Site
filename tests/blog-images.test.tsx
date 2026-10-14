import React from 'react';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {renderToStaticMarkup} from 'react-dom/server';
import {parseEntry,emptyEntry} from '../src/lib/entries/schema';
import {richTextToPlain,normalizeRichText,type RichNode} from '../src/lib/entries/rich-text';
import BlogBody from '../src/components/admin/BlogBody';
const source='draft:11111111-1111-4111-8111-111111111111.webp';
const document=()=>({type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'Antes'}]},{type:'image',attrs:{src:source,alt:'Imagen de prueba'}},{type:'paragraph',content:[{type:'text',text:'Después'}]}]} as RichNode);
test('blog saves and reopens an image between paragraphs',()=>{
 const richText=normalizeRichText(document());
 const content=parseEntry('blog',{...emptyEntry('blog'),slug:'imagen',title:'Imagen',body:richTextToPlain(richText),richText});
 assert.equal((content as {richText:RichNode}).richText.content?.[1].attrs?.src,source);
 assert.equal(content.body,'Antes\nDespués');
});
test('inline image preview uses authenticated media and preserves paragraph order',()=>{
 const html=renderToStaticMarkup(<BlogBody body="Antes\nDespués" richText={document()}/>);
 assert.ok(html.includes('/admin/media?path='));
 assert.ok(html.indexOf('Antes')<html.indexOf('<img'));
 assert.ok(html.indexOf('<img')<html.indexOf('Después'));
});
test('inline images reject external URLs and scripts',()=>{
 for(const src of ['javascript:alert(1)','data:image/png;base64,123','https://untrusted.test/test.png']){
 const richText=document();richText.content![1].attrs={src,alt:''};
 assert.throws(()=>parseEntry('blog',{...emptyEntry('blog'),slug:'imagen',title:'Imagen',body:'Antes\nDespués',richText}));
 }
});

import {prepareEntryMedia,inlineImages} from '../src/lib/entries/media';
test('publication replaces every private image once without mutating the saved draft',async()=>{
 const richText=document();const draft=parseEntry('blog',{...emptyEntry('blog'),slug:'imagen',title:'Imagen',image:source,body:richTextToPlain(richText),richText});
 let calls=0;const published=await prepareEntryMedia(draft,async()=>{calls++;return '/images/puntos-rosas.png';});
 assert.equal(calls,1);assert.equal(published.image,'/images/puntos-rosas.png');assert.equal(inlineImages(published)[0].attrs!.src,'/images/puntos-rosas.png');assert.equal(inlineImages(draft)[0].attrs!.src,source);
});
