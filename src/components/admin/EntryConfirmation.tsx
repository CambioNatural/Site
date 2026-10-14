'use client';
import {useEffect,useId,useRef} from 'react';
import {useAdminLanguage} from './AdminLanguage';
export default function EntryConfirmation({title,description,pending,message,onConfirm,onCancel}:{title:string;description:string;pending:boolean;message:string;onConfirm:()=>void;onCancel:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);const id=useId();const {t}=useAdminLanguage();
 useEffect(()=>{const dialog=ref.current!;dialog.showModal();return()=>dialog.close();},[]);
 return <dialog ref={ref} className="cms-confirm-dialog" aria-labelledby={id} aria-describedby={`${id}-body`} onCancel={event=>{event.preventDefault();if(!pending)onCancel();}}>
 <h2 id={id}>{t(title)}</h2><p id={`${id}-body`}>{description}</p>
 <p role="status" aria-live="polite">{pending?t('Procesando…'):t(message)}</p>
 <div><button type="button" disabled={pending} onClick={onConfirm}>{t(title)}</button><button type="button" className="cms-secondary" disabled={pending} autoFocus onClick={onCancel}>{t('Cancelar')}</button></div>
 </dialog>;
}
