'use client';
import {useEffect,useId,useState} from 'react';
import {EditorContent,useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {normalizeRichText,plainToRichText,richTextToPlain,safeBlogUrl,type RichNode} from '@/lib/entries/rich-text';
import {useAdminLanguage} from './AdminLanguage';
export default function BlogEditor({body,richText,disabled,onChange}:{body:string;richText?:RichNode;disabled:boolean;onChange:(body:string,document:RichNode)=>void}){
 const {t,locale}=useAdminLanguage();const id=useId();const [linkOpen,setLinkOpen]=useState(false),[url,setUrl]=useState(''),[error,setError]=useState('');
 const editor=useEditor({extensions:[StarterKit.configure({heading:{levels:[2,3,4]},code:false,codeBlock:false,link:{openOnClick:false,autolink:false,linkOnPaste:false,isAllowedUri:safeBlogUrl}})],immediatelyRender:false,shouldRerenderOnTransaction:true,content:richText??plainToRichText(body),editable:!disabled,onUpdate:({editor})=>{const doc=normalizeRichText(editor.getJSON() as RichNode);onChange(richTextToPlain(doc),doc);}});
 useEffect(()=>{editor?.setEditable(!disabled,false);},[editor,disabled]);
 useEffect(()=>{editor?.setOptions({editorProps:{attributes:{role:'textbox','aria-multiline':'true','aria-labelledby':id,'aria-describedby':`${id}-help`,'aria-disabled':String(disabled)}}});},[editor,id,disabled]);
 const button=(label:string,run:()=>void,active?:boolean,inactive=false)=><button type="button" className="cms-format-button" disabled={disabled||!editor||inactive} aria-pressed={active} title={t(label)} onClick={run}>{t(label)}</button>;
 const applyLink=()=>{const href=url.trim();if(!safeBlogUrl(href)||href.length>2048){setError('Usa un enlace completo https://, http:// o mailto:.');return;}if(!editor)return;const chain=editor.chain().focus();if(editor.state.selection.empty&&!editor.isActive('link'))chain.insertContent({type:'text',text:href,marks:[{type:'link',attrs:{href}}]}).run();else chain.extendMarkRange('link').setLink({href}).run();setLinkOpen(false);setError('');};
 const words=body.trim()?body.trim().split(/\s+/u).length:0;
 return <section className="cms-rich-editor" aria-labelledby={id}><div className="cms-rich-heading"><strong id={id}>{t('Contenido de la entrada')}</strong><small>{words.toLocaleString(locale)} {t('palabras')} · {Math.max(1,Math.ceil(words/200))} {t('min de lectura')}</small></div>
 <p id={`${id}-help`} className="cms-help">{t('Selecciona texto para darle formato. Puedes pegar texto desde otros documentos.')}</p>
 <div className="cms-rich-frame"><div className="cms-format-toolbar" role="group" aria-label={t('Formato del texto')}>
 <label className="cms-block-type"><span className="cms-sr-only">{t('Estilo del párrafo')}</span><select aria-label={t('Estilo del párrafo')} disabled={disabled||!editor} value={editor?.isActive('heading',{level:2})?'2':editor?.isActive('heading',{level:3})?'3':editor?.isActive('heading',{level:4})?'4':'p'} onChange={e=>{if(e.target.value==='p')editor?.chain().focus().setParagraph().run();else editor?.chain().focus().setHeading({level:Number(e.target.value) as 2|3|4}).run();}}><option value="p">{t('Párrafo')}</option><option value="2">{t('Encabezado 2')}</option><option value="3">{t('Encabezado 3')}</option><option value="4">{t('Encabezado 4')}</option></select></label>
 {button('Negrita',()=>editor?.chain().focus().toggleBold().run(),editor?.isActive('bold'))}
 {button('Cursiva',()=>editor?.chain().focus().toggleItalic().run(),editor?.isActive('italic'))}
 {button('Subrayado',()=>editor?.chain().focus().toggleUnderline().run(),editor?.isActive('underline'))}
 {button('Tachado',()=>editor?.chain().focus().toggleStrike().run(),editor?.isActive('strike'))}
 {button('Lista con viñetas',()=>editor?.chain().focus().toggleBulletList().run(),editor?.isActive('bulletList'))}
 {button('Lista numerada',()=>editor?.chain().focus().toggleOrderedList().run(),editor?.isActive('orderedList'))}
 {button('Cita',()=>editor?.chain().focus().toggleBlockquote().run(),editor?.isActive('blockquote'))}
 {button('Enlace',()=>{setUrl(editor?.getAttributes('link').href??'');setError('');setLinkOpen(v=>!v);},editor?.isActive('link'))}
 {button('Separador',()=>editor?.chain().focus().setHorizontalRule().run())}
 {button('Quitar formato',()=>editor?.chain().focus().unsetAllMarks().clearNodes().run())}
 {button('Deshacer',()=>editor?.chain().focus().undo().run(),undefined,!editor?.can().undo())}
 {button('Rehacer',()=>editor?.chain().focus().redo().run(),undefined,!editor?.can().redo())}
 </div>
 {linkOpen&&<div className="cms-link-editor"><label>{t('Dirección del enlace')}<input autoFocus type="url" value={url} placeholder="https://…" disabled={disabled} aria-invalid={!!error} onChange={e=>{setUrl(e.target.value);setError('');}} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();applyLink();}if(e.key==='Escape'){setLinkOpen(false);editor?.commands.focus();}}}/></label><div>{button('Aplicar enlace',applyLink)}{button('Quitar enlace',()=>{editor?.chain().focus().extendMarkRange('link').unsetLink().run();setLinkOpen(false);})}{button('Cancelar',()=>{setLinkOpen(false);editor?.commands.focus();})}</div>{error&&<p role="alert">{t(error)}</p>}</div>}
 {!editor&&<p className="cms-help">{t('Cargando editor…')}</p>}<EditorContent editor={editor} className="cms-prose"/>
 <div className="cms-rich-footer"><span>{t('Atajos: ⌘/Ctrl + B para negrita, I para cursiva y Z para deshacer.')}</span><span role="status">{body.length.toLocaleString(locale)} / 60,000 {t('caracteres')}</span></div></div>
 {body.length>60000&&<p role="alert">{t('El contenido supera el límite de 60,000 caracteres. Reduce el texto antes de guardar.')}</p>}
 </section>;
}
