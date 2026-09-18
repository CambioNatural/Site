import {test} from 'node:test';
import type {RichNode} from '../src/lib/entries/rich-text';
import assert from 'node:assert/strict';
import {parseEntry,emptyEntry,type PopupContent} from '../src/lib/entries/schema';
const popup=()=>({...emptyEntry('popups'),slug:'campana',title:'Aviso',body:'Mensaje'}) as PopupContent;
test('validación de programación y destinos del popup',()=>{const p=popup();assert.doesNotThrow(()=>parseEntry('popups',p));assert.throws(()=>parseEntry('popups',{...p,startsAt:'2026-09-20T00:00:00Z',endsAt:'2026-09-19T00:00:00Z'}));assert.throws(()=>parseEntry('popups',{...p,paths:['/admin']}));assert.throws(()=>parseEntry('popups',{...p,delay:-1}));assert.throws(()=>parseEntry('popups',{...p,paths:[]}));});
test('botón necesita texto y URL seguros',()=>{const p=popup();assert.throws(()=>parseEntry('popups',{...p,buttonLabel:'Abrir'}));assert.throws(()=>parseEntry('popups',{...p,buttonLabel:'Abrir',url:'javascript:alert(1)'}));assert.doesNotThrow(()=>parseEntry('popups',{...p,buttonLabel:'Abrir',url:'https://example.com'}));});
test('blog exige slug, título y cuerpo; rechaza campos ajenos',()=>{const b={...emptyEntry('blog'),slug:'mi-nota',title:'Nota',body:'Contenido'};assert.doesNotThrow(()=>parseEntry('blog',b));assert.throws(()=>parseEntry('blog',{...b,slug:'../../admin'}));assert.throws(()=>parseEntry('blog',{...b,body:''}));assert.throws(()=>parseEntry('blog',{...b,published:true}));});
test('imágenes externas y HTML no entran como medios',()=>{assert.throws(()=>parseEntry('popups',{...popup(),image:'https://otro.example/imagen.svg'}));assert.throws(()=>parseEntry('popups',{...popup(),image:'data:text/html,<script>'}));});

test('blog rich text preserves legacy body and validates formatting and safe links',async()=>{
 const {plainToRichText,richTextToPlain}=await import('../src/lib/entries/rich-text');
 const legacy={...emptyEntry('blog'),slug:'legacy',title:'Legacy',body:'<script>literal</script>\nSegundo párrafo'};
 assert.equal(richTextToPlain(plainToRichText(legacy.body)),legacy.body);
 assert.doesNotThrow(()=>parseEntry('blog',legacy));
 const richText:RichNode={type:'doc',content:[{type:'heading',attrs:{level:2},content:[{type:'text',text:'Título'}]},{type:'paragraph',content:[{type:'text',text:'Texto',marks:[{type:'bold'},{type:'link',attrs:{href:'https://example.com'}}]}]}]};
 const post={...legacy,body:'Título\nTexto',richText};
 assert.doesNotThrow(()=>parseEntry('blog',post));
 assert.throws(()=>parseEntry('blog',{...post,body:'otro'}));
 for(const href of ['javascript:alert(1)','data:text/html,evil','https://user:password@example.com']){
  const bad=structuredClone(richText);bad.content![1].content![0].marks![1].attrs!.href=href;
  assert.throws(()=>parseEntry('blog',{...post,richText:bad}));
 }
 assert.throws(()=>parseEntry('blog',{...post,richText:{type:'doc',content:[{type:'script',text:'evil'}]}}));
 assert.throws(()=>parseEntry('blog',{...post,richText:{type:'doc',content:[{type:'paragraph',attrs:{onclick:'evil'}}]}}));
});
test('rich text bounds nested documents and content size',async()=>{
 const {richTextSchema,plainToRichText}=await import('../src/lib/entries/rich-text');
 let tree:unknown={type:'paragraph'};for(let i=0;i<20;i++)tree={type:'blockquote',content:[tree]};
 assert.equal(richTextSchema.safeParse({type:'doc',content:[tree]}).success,false);
 const body='漢'.repeat(30000);
 assert.throws(()=>parseEntry('blog',{...emptyEntry('blog'),slug:'large',title:'Large',body,richText:plainToRichText(body)}));
});
