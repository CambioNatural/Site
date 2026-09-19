import type {BlogPost} from './posts';
import {richTextToPlain,type RichNode} from '@/lib/entries/rich-text';
// Layout-only examples. These are never persisted or included in public queries.
const richText:RichNode={type:'doc',content:[
 {type:'paragraph',content:[{type:'text',text:'Every conversation begins with '},{type:'text',text:'attention.',marks:[{type:'bold'}]}]},
 {type:'heading',attrs:{level:2},content:[{type:'text',text:'Making room for other perspectives'}]},
 {type:'paragraph',content:[{type:'text',text:'This is sample editorial content for reviewing the design. Replace it with an article from the CMS before publishing.'}]},
 {type:'bulletList',content:['Listen before proposing solutions.','Connect ideas with everyday choices.','Leave room for a different perspective.'].map(text=>({type:'listItem',content:[{type:'paragraph',content:[{type:'text',text}]}]}))},
 {type:'blockquote',content:[{type:'paragraph',content:[{type:'text',text:'Care gives us a place to begin.'}]}]}
]};
export const examplePosts:BlogPost[]=[
 {id:'example-one',slug:'learning-to-build-bridges',published_at:'2026-09-18T12:00:00Z',content:{title:'Learning to build bridges, together.',slug:'learning-to-build-bridges',author:'Cambio Natural · Sample',summary:'A space to pause, listen and explore how care can shape the way we act together.',image:'/images/newsletter-metacrisis.png',alt:'Existing Cambio Natural website image, used for this layout preview.',body:richTextToPlain(richText),richText}},
 {id:'example-two',slug:'a-space-for-shared-learning',published_at:'2026-09-15T12:00:00Z',content:{title:'A space for shared learning.',slug:'a-space-for-shared-learning',author:'Cambio Natural · Sample',summary:'Sample story for reviewing the archive layout and its reading rhythm.',image:'/images/article-bdfm.png',alt:'Existing Cambio Natural article artwork.',body:'Sample content for the design preview.'}},
 {id:'example-three',slug:'questions-that-connect-us',published_at:'2026-09-12T12:00:00Z',content:{title:'Questions that connect us.',slug:'questions-that-connect-us',author:'Cambio Natural · Sample',summary:'A second sample explores the layout of a post without a cover image.',image:'',alt:'',body:'Sample content for the design preview.'}}
];
