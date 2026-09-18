'use client';
/* Private and already optimized CMS images use their authenticated URL directly. */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useTransition } from 'react';
import AdminIdentity from './AdminIdentity';
import { writeEntry } from '@/app/admin/manage/[kind]/actions';
import { uploadImage } from '@/app/admin/actions';
import { emptyEntry, publicPaths, type Entry, type EntryContent, type EntryKind, type PopupContent } from '@/lib/entries/schema';
import type {CmsAccess} from '@/lib/cms/permissions';
export default function EntryManager({ kind, initialEntries, access }: {
    kind: EntryKind;
    initialEntries: Entry[]; access?:CmsAccess;
}) {
    const [entries, setEntries] = useState(initialEntries), [selected, setSelected] = useState<Entry | null>(null), [content, setContent] = useState<EntryContent>(emptyEntry(kind)), [saved, setSaved] = useState<EntryContent>(emptyEntry(kind));
    const [message, setMessage] = useState(''), [pending, start] = useTransition(), [confirm, setConfirm] = useState<'publish' | 'unpublish' | null>(null), [preview, setPreview] = useState(false);
    const dirty = JSON.stringify(content) !== JSON.stringify(saved), popup = kind === 'popups';
    useEffect(() => { const leave = (e: BeforeUnloadEvent) => { if (dirty) {
        e.preventDefault();
        e.returnValue = '';
    } }; window.addEventListener('beforeunload', leave); return () => window.removeEventListener('beforeunload', leave); }, [dirty]);
    function select(entry: Entry | null) { if (dirty && !window.confirm('Hay cambios sin guardar. ¿Descartarlos para cambiar de contenido?'))
        return; const next = entry?.content ?? emptyEntry(kind); setSelected(entry); setContent(next); setSaved(next); setMessage(''); setConfirm(null); setPreview(false); }
    function change(key: string, value: unknown) { setContent(c => ({ ...c, [key]: value })); setMessage(''); setConfirm(null); }
    function run(action: 'save' | 'publish' | 'unpublish') { start(async () => { try {
        const result = await writeEntry(action, kind, selected?.id ?? null, selected?.version ?? 0, content);
        if (!result.ok) {
            setMessage(result.error);
            return;
        }
        const entry: Entry = { id: result.id, kind, slug: content.slug, content, version: result.version, updated_at: new Date().toISOString(), publishedVersion: action === 'publish' ? result.version : action === 'unpublish' ? null : selected?.publishedVersion ?? null };
        setSelected(entry);
        setSaved(content);
        setEntries(current => [entry, ...current.filter(e => e.id !== entry.id)]);
        setConfirm(null);
        setMessage(action === 'save' ? 'Borrador guardado.' : action === 'publish' ? (popup ? 'Pop-up activado. Se mostrará según las fechas y páginas elegidas.' : 'Entrada publicada en la API del blog.') : 'Publicación retirada. El borrador se conserva.');
    }
    catch {
        setMessage('No se pudo confirmar la operación. Conserva tus cambios y comprueba el estado antes de reintentar.');
    } }); }
    function text(key: string, label: string, max = 200, multiline = false) { const val = String((content as unknown as Record<string, unknown>)[key] ?? ''); return <label key={key}>{label}{multiline ? <textarea value={val} maxLength={max} rows={key === 'body' && !popup ? 16 : 5} onChange={e => change(key, e.target.value)}/> : <input value={val} maxLength={max} onChange={e => change(key, e.target.value)}/>}<small>{val.length.toLocaleString('es-MX')} / {max.toLocaleString('es-MX')} caracteres</small></label>; }
    function dateInput(key: 'startsAt' | 'endsAt', label: string) { const value = (content as PopupContent)[key]; const local = value ? new Date(Date.parse(value) - new Date(value).getTimezoneOffset() * 60000).toISOString().slice(0, 16) : ''; return <label>{label}<input type="datetime-local" value={local} onChange={e => change(key, e.target.value ? new Date(e.target.value).toISOString() : '')}/></label>; }
    const image = content.image.startsWith('draft:') ? `/admin/media?path=${encodeURIComponent(content.image.slice(6))}` : content.image;
    return <main className="cms-shell"><AdminIdentity active={kind === 'blog' ? 'blog' : 'popups'} access={access} dirty={dirty} pending={pending}/><header><div><h1>{popup ? 'Pop-ups' : 'Blog'}</h1><p>{popup ? 'Crea avisos y programa cuándo y dónde aparecen.' : 'Prepara y publica entradas para el futuro blog del sitio.'}</p></div></header>
 <div className="cms-toolbar"><button disabled={pending || (!dirty && !!selected)} onClick={() => run('save')}>Guardar borrador</button><button className="cms-secondary" disabled={pending} onClick={() => setPreview(v => !v)}>{preview ? 'Cerrar vista previa' : 'Vista previa local'}</button><button className="cms-publish" disabled={pending || dirty || !selected || selected.version === selected.publishedVersion} onClick={() => setConfirm('publish')}>{popup ? 'Activar pop-up' : 'Publicar entrada'}</button>{selected?.publishedVersion && <button className="cms-secondary" disabled={pending || dirty} onClick={() => setConfirm('unpublish')}>{popup ? 'Desactivar' : 'Retirar publicación'}</button>}</div>
 <p role="status" className="cms-status">{pending ? 'Procesando…' : message || (dirty ? 'Cambios sin guardar.' : selected ? `Borrador ${selected.version} · ${selected.publishedVersion ? `Publicación ${selected.publishedVersion}` : 'Sin publicar'}` : 'Crea tu primer borrador.')}</p>
 {confirm && <div className="cms-warning"><p>{confirm === 'publish' ? 'El contenido guardado estará disponible para los visitantes según su configuración.' : 'Se retirará el contenido público. Podrás volver a publicarlo desde este borrador.'}</p><button disabled={pending} onClick={() => run(confirm)}>Confirmar</button> <button className="cms-secondary" disabled={pending} onClick={() => setConfirm(null)}>Cancelar</button></div>}
 <div className="cms-collection"><aside className="cms-entry-list"><button disabled={pending} onClick={() => select(null)}>{popup ? 'Nuevo pop-up' : 'Nueva entrada'}</button>{entries.length === 0 && <p>Aún no hay contenido. Empieza con un borrador.</p>}<ul>{entries.map(e => <li key={e.id}><button className="cms-secondary" disabled={pending} aria-current={selected?.id === e.id ? 'true' : undefined} onClick={() => select(e)}><strong>{e.content.title}</strong><small>{e.publishedVersion ? `Publicación ${e.publishedVersion}` : 'Borrador'}{e.publishedVersion && e.version !== e.publishedVersion ? ' · cambios pendientes' : ''}</small></button></li>)}</ul></aside>
 <section className="cms-edit-panel"><h2>{selected ? 'Editar contenido' : popup ? 'Crear pop-up' : 'Crear entrada'}</h2><fieldset disabled={pending}>{text('title', 'Título')}{text('slug', popup ? 'Identificador interno (minúsculas y guiones)' : 'Slug de la entrada (minúsculas y guiones)', 120)}{!popup && <>{text('author', 'Autor', 150)}{text('summary', 'Resumen', 600, true)}</>}{text('body', popup ? 'Mensaje' : 'Contenido (texto con párrafos)', popup ? 1500 : 60000, true)}
 <div className="cms-image"><p>Imagen opcional</p>{image && <><img src={image} alt={content.alt}/><button className="cms-secondary" onClick={() => change('image', '')}>Quitar imagen</button></>}<label>Subir imagen<input type="file" accept="image/png,image/jpeg,image/webp" onChange={e => { const file = e.target.files?.[0]; e.target.value = ''; if (!file)
        return; if (file.size > 5 * 1024 * 1024 || !['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
        setMessage('Usa PNG, JPEG o WebP de hasta 5 MB.');
        return;
    } start(async () => { try {
        const data = new FormData();
        data.set('image', file);
        const r = await uploadImage(data);
        if (r.ok)
            change('image', r.src!);
        else
            setMessage(r.error!);
    }
    catch {
        setMessage('No se pudo subir la imagen. Vuelve a intentarlo.');
    } }); }}/></label><small>PNG, JPEG o WebP · máximo 5 MB.</small>{text('alt', 'Descripción de la imagen', 300)}</div>
 {popup && <>{text('buttonLabel', 'Texto del botón (opcional)', 80)}{text('url', 'Enlace del botón (https o página existente)', 2048)}<h3>Programación</h3><p className="cms-help">Fechas en la zona horaria de tu dispositivo. Déjalas vacías para comenzar al activar y mantener el aviso vigente.</p><div className="cms-field-pair">{dateInput('startsAt', 'Comienza')}{dateInput('endsAt', 'Termina')}</div><label>Espera antes de mostrar (segundos)<input type="number" min={0} max={120} value={(content as PopupContent).delay} onChange={e => change('delay', Number(e.target.value))}/></label><label>Frecuencia por navegador<select value={(content as PopupContent).frequency} onChange={e => change('frequency', e.target.value)}><option value="session">Una vez por sesión</option><option value="day">Una vez cada 24 horas</option><option value="week">Una vez cada 7 días</option></select></label><fieldset className="cms-paths"><legend>Mostrar en estas páginas</legend>{publicPaths.map(path => <label key={path}><input type="checkbox" checked={(content as PopupContent).paths.includes(path)} onChange={e => change('paths', e.target.checked ? [...(content as PopupContent).paths, path] : (content as PopupContent).paths.filter(p => p !== path))}/>{path === '/' ? 'Inicio' : path}</label>)}</fieldset></>}
 </fieldset>{preview && <article className="cms-content-preview" aria-label="Vista previa del contenido"><p className="cms-help">Vista previa local · incluye cambios sin guardar</p>{image && <><img src={image} alt={content.alt}/></>}<h2>{content.title || 'Título'}</h2><p>{content.body || 'El contenido aparecerá aquí.'}</p>{popup && (content as PopupContent).buttonLabel && <span className="cms-preview-cta">{(content as PopupContent).buttonLabel}</span>}</article>}</section></div></main>;
}
