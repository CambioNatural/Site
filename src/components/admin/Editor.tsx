'use client';
import {useAdminLanguage} from '@/components/admin/AdminLanguage';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import AdminIdentity from './AdminIdentity';
import { logout, saveDraft, publishDraft, uploadImage, restoreRevision } from '@/app/admin/actions';
import type { CmsDocument } from '@/lib/cms/schema';
import type {CmsAccess} from '@/lib/cms/permissions';
type Props = {
 access?:CmsAccess;
    document: CmsDocument;
    version: number;
    published: {
        version: number;
        published_at: string;
    } | null;
    revisions: {
        version: number;
        published_at: string;
    }[];
    email: string;
};
type Field = {
    path: string;
    label: string;
    image?: boolean;
    short?: boolean;
};
const copy = (path: string, label: string): Field[] => [{ path: `${path}.text`, label }, { path: `${path}.mobileText`, label: `${label} · versión móvil (opcional)` }];
const groups: {
    label: string;
    fields: Field[];
}[] = [
    { label: 'Presentación', fields: [...copy('home.hero.intro', 'Introducción'), { path: 'home.hero.heading', label: 'Encabezado', short: true }, { path: 'home.hero.wordmark', label: 'Logotipo principal', image: true }] },
    { label: 'Quiénes somos', fields: [{ path: 'home.about.emphasis', label: 'Frase destacada' }, { path: 'home.about.body', label: 'Descripción' }, { path: 'home.about.image', label: 'Ilustración', image: true }] },
    { label: 'Iniciativas', fields: [{ path: 'home.initiativesHeading', label: 'Encabezado de sección', short: true }, ...[0, 1, 2].flatMap(i => [{ path: `home.initiatives.${i}.title`, label: `Iniciativa ${i + 1} · título`, short: true }, ...copy(`home.initiatives.${i}.description`, `Iniciativa ${i + 1} · descripción`), { path: `home.initiatives.${i}.image`, label: `Iniciativa ${i + 1} · imagen`, image: true }])] },
    { label: 'Artículo destacado', fields: [{ path: 'home.article.category', label: 'Categoría', short: true }, { path: 'home.article.title', label: 'Título', short: true }, ...copy('home.article.excerpt', 'Resumen'), { path: 'home.article.image', label: 'Imagen del artículo', image: true }, { path: 'home.article.link.label', label: 'Texto del enlace', short: true }, { path: 'home.article.link.href', label: 'Dirección del artículo', short: true }] },
    { label: 'Newsletter y pie', fields: [...copy('home.newsletter.intro', 'Introducción del newsletter'), { path: 'home.newsletter.title', label: 'Título del newsletter', short: true }, { path: 'home.newsletter.description', label: 'Descripción' }, { path: 'home.newsletter.image', label: 'Imagen del newsletter', image: true }, { path: 'home.footer', label: 'Pie de página', short: true }] },
    { label: 'Navegación y contacto', fields: [...[0, 1, 2, 3].flatMap(i => [{ path: `navigation.links.${i}.label`, label: `Enlace ${i + 1} · texto`, short: true }, { path: `navigation.links.${i}.href`, label: `Enlace ${i + 1} · dirección`, short: true }]), { path: 'navigation.booking.label', label: 'Reservar llamada · texto', short: true }, { path: 'navigation.booking.href', label: 'Reservar llamada · dirección', short: true }] },
];
function read(doc: CmsDocument, path: string): string { let value: unknown = doc; for (const key of path.split('.'))
    value = (value as Record<string, unknown>)?.[key]; return typeof value === 'string' ? value : ''; }
export default function Editor(props: Props) {
 const {t,locale}=useAdminLanguage();

    const [document, setDocument] = useState(props.document), [version, setVersion] = useState(props.version), [published, setPublished] = useState(props.published?.version ?? 0);
    const router = useRouter();
    const [savedDocument, setSavedDocument] = useState(props.document);
    const dirty = JSON.stringify(document) !== JSON.stringify(savedDocument);
    const [activeGroup, setActiveGroup] = useState(0);
    const [restoreTarget, setRestoreTarget] = useState<number | null>(null);
    const [status, setStatus] = useState(''), [confirmPublish, setConfirmPublish] = useState(false), [pending, start] = useTransition();
    const [revisions, setRevisions] = useState(props.revisions);
    useEffect(() => { const handler = (event: BeforeUnloadEvent) => { if (dirty) {
        event.preventDefault();
        event.returnValue = '';
    } }; window.addEventListener('beforeunload', handler); return () => window.removeEventListener('beforeunload', handler); }, [dirty]);
    function change(path: string, value: string) { setDocument(current => { const next = structuredClone(current); let node = next as unknown as Record<string, unknown>; const keys = path.split('.'); for (const key of keys.slice(0, -1))
        node = node[key] as Record<string, unknown>; node[keys.at(-1)!] = value; return next; }); setStatus(''); setConfirmPublish(false); setRestoreTarget(null); }
    function save(preview = false) { start(async () => { try {
        if (!dirty && version > 0) {
            if (preview)
                router.push('/admin/preview');
            return;
        }
        const result = await saveDraft(document, version);
        if (result.ok) {
            setVersion(result.version!);
            setSavedDocument(document);
            setStatus('Borrador guardado. Los cambios están listos para revisar.');
            if (preview)
                router.push('/admin/preview');
        }
        else
            setStatus(result.error!);
    }
    catch {
        setStatus('No se pudo conectar. Tus cambios siguen aquí; vuelve a guardar.');
    } }); }
    function publish() { start(async () => { try {
        const result = await publishDraft(version);
        if (result.ok) {
            setPublished(result.version!);
            setRevisions([{ version: result.version!, published_at: new Date().toISOString() }, ...revisions].slice(0, 20));
            setStatus(`Versión ${result.version} publicada.`);
            setConfirmPublish(false);
        }
        else
            setStatus(result.error!);
    }
    catch {
        setStatus('No se pudo confirmar la publicación. Recarga para comprobar su estado antes de reintentar.');
    } }); }
    return <main className="cms-shell"><AdminIdentity active="home" access={props.access} dirty={dirty} pending={pending}/><header><div><h1>{t("Portada")}</h1><p>{t("Edita la portada, revisa el borrador y publica cuando esté listo.")}</p><small>{props.email}</small></div><form action={logout}><button className="cms-secondary" disabled={dirty || pending}>{t("Cerrar sesión")}</button></form></header>

 <div className="cms-toolbar"><button disabled={pending || (!dirty && version > 0)} onClick={() => save()}>{t("Guardar borrador")}</button><button className="cms-secondary" disabled={pending} onClick={() => save(true)}>{dirty || version === 0 ? t("Guardar y ver") : t("Ver borrador")}</button><button className="cms-publish" disabled={pending || dirty || version === 0 || version === published} onClick={() => { setConfirmPublish(true); setRestoreTarget(null); }}>{t("Publicar cambios")}</button></div>
 <p className="cms-status" role="status" aria-live="polite">{pending ? t("Procesando…") : t(status) || (dirty ? t("Guarda tus cambios para incluirlos en la vista previa.") : t("El borrador está guardado. Puedes revisarlo antes de publicar."))}</p>
 <div className="cms-version-line"><span>{t("Borrador ")}{version}</span><span>{published ? t(`Publicado: versión ${published}`) : t("Sin publicación")}</span>{dirty && <strong>{t("Cambios sin guardar")}</strong>}</div>
 {confirmPublish && <div className="cms-warning"><p>{t("La versión ")}{version} {t(" reemplazará el contenido visible del sitio conectado a este proyecto.")}</p><button disabled={pending} onClick={publish}>{t("Confirmar publicación")}</button> <button className="cms-secondary" onClick={() => setConfirmPublish(false)}>{t("Cancelar")}</button></div>}
 <div className="cms-grid"><nav className="cms-sections" aria-label={t("Secciones del contenido")}>{groups.map((group, index) => { const changed = group.fields.some(field => field.image ? read(document, `${field.path}.src`) !== read(savedDocument, `${field.path}.src`) || read(document, `${field.path}.alt`) !== read(savedDocument, `${field.path}.alt`) : read(document, field.path) !== read(savedDocument, field.path)); return <button key={group.label} className="cms-section-button" aria-current={activeGroup === index ? 'true' : undefined} onClick={() => setActiveGroup(index)}>{t(group.label)}{changed && <small>{t("Modificado")}</small>}</button>; })}</nav><div className="cms-edit-panel">{groups.filter((_, index) => index === activeGroup).map(group => <section key={group.label} aria-labelledby="cms-section-heading"><h2 id="cms-section-heading">{t(group.label)}</h2><p className="cms-help">{t("Los cambios se conservan al cambiar de sección. Guarda para actualizar el borrador.")}</p><fieldset disabled={pending}>{group.fields.map(field => field.image ? <div key={field.path} className="cms-image"><p>{t(field.label)}</p>{/* Image is either a validated local asset or authenticated private endpoint. */}
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src={read(document, `${field.path}.src`).startsWith('draft:') ? `/admin/media?path=${encodeURIComponent(read(document, `${field.path}.src`).slice(6))}` : read(document, `${field.path}.src`)} alt={read(document, `${field.path}.alt`)}/>
 <label>{t("Reemplazar ")}{t(field.label).toLowerCase()}<input type="file" accept="image/png,image/jpeg,image/webp" onChange={event => { const file = event.target.files?.[0]; event.target.value = ''; if (!file)
                return; if (file.size > 5 * 1024 * 1024 || !['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
                setStatus('Selecciona una imagen PNG, JPEG o WebP de hasta 5 MB.');
                return;
            } start(async () => { try {
                const form = new FormData();
                form.set('image', file);
                const result = await uploadImage(form);
                if (result.ok) {
                    change(`${field.path}.src`, result.src!);
                    setStatus('Imagen lista. Guarda el borrador para conservarla.');
                }
                else
                    setStatus(result.error!);
            }
            catch {
                setStatus('No se pudo subir la imagen. Vuelve a intentarlo.');
            } }); }}/></label><small>{t("PNG, JPEG o WebP · máximo 5 MB. Se optimiza para la web. Describe las imágenes informativas; deja vacío el texto alternativo de las decorativas.")}</small><label>{t("Texto alternativo · ")}{t(field.label)}<input maxLength={300} value={read(document, `${field.path}.alt`)} onChange={e => change(`${field.path}.alt`, e.target.value)}/></label></div> : <label key={field.path}>{t(field.label)}{field.short ? <input value={read(document, field.path)} maxLength={field.path.endsWith('href') ? 2048 : 250} onChange={e => change(field.path, e.target.value)}/> : <textarea value={read(document, field.path)} maxLength={6000} onChange={e => change(field.path, e.target.value)}/>}<small className="cms-field-help">{field.path.endsWith('mobileText') ? t("Opcional. Si lo dejas vacío, se usa el texto principal.") : field.path.endsWith('href') ? t("Usa una dirección https o una ruta existente del sitio.") : t(`${read(document, field.path).length.toLocaleString(locale)} / ${field.short ? '250' : '6,000'} caracteres`)}</small></label>)}</fieldset></section>)}</div>
 <aside className="cms-history"><h2>{t("Historial")}</h2><p>{t("Recupera una publicación como borrador para revisarla.")}</p>{!revisions.length && <p>{t("Aquí aparecerán las versiones cuando publiques por primera vez.")}</p>}<ul>{revisions.map(rev => <li key={rev.version}><strong>{t("Versión ")}{rev.version}</strong>{rev.version === published && <span className="cms-live-label">{t("Publicada")}</span>}<br /><time dateTime={rev.published_at}>{new Date(rev.published_at).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Mexico_City' })}</time><br /><button className="cms-secondary" disabled={pending || dirty} onClick={() => { setRestoreTarget(rev.version); setConfirmPublish(false); }}>{t("Recuperar versión ")}{rev.version}</button>{restoreTarget === rev.version && <div className="cms-restore-confirm"><p>{t("Se reemplazará el borrador guardado por la versión ")}{rev.version}{t(". La publicación actual se conserva.")}</p><button disabled={pending || dirty} onClick={() => start(async () => { try {
        const result = await restoreRevision(rev.version, version);
        if (result.ok) {
            setDocument(result.document!);
            setSavedDocument(result.document!);
            setVersion(result.version!);
            setConfirmPublish(false);
            setRestoreTarget(null);
            setStatus('Versión recuperada como borrador. Revisa la vista previa.');
        }
        else
            setStatus(result.error!);
    }
    catch {
        setStatus('No se pudo confirmar la recuperación. Recarga para comprobar el borrador.');
    } })}>{t("Confirmar recuperación")}</button><button className="cms-secondary" disabled={pending} onClick={() => setRestoreTarget(null)}>{t("Cancelar")}</button></div>}</li>)}</ul>{dirty && <p className="cms-help">{t("Guarda tus cambios antes de recuperar una versión.")}</p>}</aside></div></main>;
}
