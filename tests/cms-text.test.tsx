import React from 'react';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {renderToStaticMarkup} from 'react-dom/server';
import CmsText from '../src/components/CmsText';
import {initialDocument,parseDocument} from '../src/lib/cms/schema';
import {pageKeys} from '../src/lib/cms/page-content';

test('paragraph breaks survive CMS validation and JSON storage for every page',()=>{
 const text='Primer párrafo.\n\nSegundo párrafo.\nOtra línea.';
 const draft=structuredClone(initialDocument);
 draft.home.about.body=text;draft.home.hero.intro.mobileText=text;draft.blog.intro=text;
 for(const page of pageKeys)draft.pages[page].texts.t1=text;
 const saved=parseDocument(JSON.parse(JSON.stringify(parseDocument(draft))));
 assert.equal(saved.home.about.body,text);assert.equal(saved.home.hero.intro.mobileText,text);assert.equal(saved.blog.intro,text);
 for(const page of pageKeys)assert.equal(saved.pages[page].texts.t1,text);
});
test('multiline text preserves breaks without interpreting editor text as HTML',()=>{
 const text='Primero\r\n\r\n<script>alert(1)</script>\nFinal';
 const html=renderToStaticMarkup(<CmsText text={text}/>);
 assert.ok(html.includes('white-space:pre-line'));
 assert.ok(html.includes('Primero\r\n\r\n'));
 assert.ok(html.includes('&lt;script&gt;'));assert.ok(!html.includes('<script>'));
 assert.equal(renderToStaticMarkup(<CmsText text="Texto original"/>),'Texto original');
});
