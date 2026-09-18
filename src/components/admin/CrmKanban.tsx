'use client';
import {useRef,useState} from 'react';
import {stages,type CrmRecord} from '@/lib/cms/crm';
import {useAdminLanguage} from './AdminLanguage';

type Props={records:CrmRecord[];companies:CrmRecord[];disabled:boolean;moving:boolean;onMove:(record:CrmRecord,stage:string)=>void;onEdit:(record:CrmRecord)=>void};
export default function CrmKanban({records,companies,disabled,moving,onMove,onEdit}:Props){
 const {t,locale}=useAdminLanguage();
 const [dragging,setDragging]=useState<string|null>(null);
 const [over,setOver]=useState<string|null>(null);
 const board=useRef<HTMLDivElement>(null);
 const pointer=useRef<{id:string;startX:number;startY:number;active:boolean}|null>(null);
 const finish=(id:string|null,stage:string|null)=>{const record=records.find(r=>r.id===id);setDragging(null);setOver(null);pointer.current=null;if(!disabled&&record&&stage&&stage!==record.stage&&stage in stages)onMove(record,stage);};
 const stageAt=(x:number,y:number)=>{const column=document.elementFromPoint(x,y)?.closest<HTMLElement>('[data-kanban-stage]');return column&&board.current?.contains(column)?column.dataset.kanbanStage??null:null;};
 return <section className="crm-kanban-section" aria-label={t('Tablero Kanban')} aria-busy={moving}>
  <p className="cms-help">{t(records.length>0&&records.every(r=>r.archived)?'Los registros archivados se consultan en modo de lectura.':disabled&&!moving?'Guarda o descarta los cambios del editor antes de mover tarjetas.':'Arrastra una tarjeta a otra etapa o usa su selector de etapa.')}</p>
  <div className="crm-kanban" ref={board}>{Object.entries(stages).map(([stage,label])=>{
   const cards=records.filter(record=>record.stage===stage);
   return <section key={stage} data-kanban-stage={stage} className={`crm-kanban-column${over===stage?' is-drop-target':''}`} aria-label={t(label)} onDragOver={event=>{if(disabled)return;event.preventDefault();event.dataTransfer.dropEffect='move';setOver(stage);}} onDrop={event=>{event.preventDefault();finish(dragging,stage);}}>
    <header><h2>{t(label)}</h2><span>{cards.length}</span></header>
    <div className="crm-kanban-cards">{cards.map(record=><article key={record.id} className={`crm-kanban-card${dragging===record.id?' is-dragging':''}`} draggable={!disabled} onDragStart={event=>{if(disabled){event.preventDefault();return;}event.dataTransfer.setData('text/plain',record.id);event.dataTransfer.effectAllowed='move';setDragging(record.id);}} onDragEnd={()=>{setDragging(null);setOver(null);}}>
     <div className="crm-card-heading"><button className="crm-card-title" disabled={disabled} onClick={()=>onEdit(record)} aria-label={`${t('Editar oportunidad')}: ${record.name}`}>{record.name}</button><span className="crm-drag-handle" title={t('Mover tarjeta')} aria-hidden="true" onPointerDown={event=>{if(disabled)return;event.preventDefault();event.currentTarget.setPointerCapture(event.pointerId);pointer.current={id:record.id,startX:event.clientX,startY:event.clientY,active:false};}} onPointerMove={event=>{const current=pointer.current;if(!current)return;if(Math.hypot(event.clientX-current.startX,event.clientY-current.startY)>6)current.active=true;if(current.active){setDragging(current.id);setOver(stageAt(event.clientX,event.clientY));}}} onPointerUp={event=>{if(pointer.current?.active)finish(pointer.current.id,stageAt(event.clientX,event.clientY));else pointer.current=null;}} onPointerCancel={()=>finish(null,null)}><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><circle cx="7" cy="5" r="1.5"/><circle cx="13" cy="5" r="1.5"/><circle cx="7" cy="10" r="1.5"/><circle cx="13" cy="10" r="1.5"/><circle cx="7" cy="15" r="1.5"/><circle cx="13" cy="15" r="1.5"/></svg></span></div>
     {record.company_id&&<p>{companies.find(c=>c.id===record.company_id)?.name}</p>}
     <p className="crm-card-amount">{new Intl.NumberFormat(locale,{style:'currency',currency:String(record.currency),currencyDisplay:'code'}).format(Number(record.amount))}</p>
     <p>{t(record.process==='partnership'?'Alianza / colaboración':'Venta de servicios')}</p>
     <p>{record.owner||t('Sin responsable')}</p>
     {record.close_date&&<p>{t('Cierre esperado')}: {new Date(String(record.close_date)+'T12:00:00').toLocaleDateString(locale)}</p>}
     <label>{t('Etapa')}<select aria-label={`${t('Etapa')}: ${record.name}`} disabled={disabled} value={String(record.stage)} onChange={event=>onMove(record,event.target.value)}>{Object.entries(stages).map(([value,name])=><option key={value} value={value}>{t(name)}</option>)}</select></label>
    </article>)}{!cards.length&&<p className="crm-kanban-empty">{t('Sin oportunidades en esta etapa.')}</p>}</div>
   </section>;
  })}</div>
 </section>;
}
