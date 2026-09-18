'use client';
/* Private and already optimized CMS images use their authenticated URL directly. */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { popupSchema, publicPaths, type PopupContent } from '@/lib/entries/schema';
import './popups.css';
type Campaign = {
    id: string;
    version: number;
    content: PopupContent;
};
export default function PopupDisplay() {
    const path = usePathname();
    // Keying resets pending display immediately when navigating to another page.
    return publicPaths.some(p => p === path) ? <PopupForPage key={path} path={path}/> : null;
}
function PopupForPage({ path }: {
    path: string;
}) {
    const [campaign, setCampaign] = useState<Campaign | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const abort = new AbortController();
        let timer: ReturnType<typeof setTimeout> | undefined;
        async function load() {
            try {
                const res = await fetch(`/api/content/popups?path=${encodeURIComponent(path)}`, { signal: abort.signal });
                if (!res.ok)
                    return;
                const data = await res.json();
                if (!Array.isArray(data.items))
                    return;
                for (const item of data.items) {
                    const parsed = popupSchema.safeParse(item.content);
                    if (!parsed.success || typeof item.id !== 'string' || typeof item.version !== 'number')
                        continue;
                    const c = parsed.data, key = `cn-popup:${item.id}:${item.version}`;
                    let seen = false;
                    try {
                        const stored = (c.frequency === 'session' ? sessionStorage : localStorage).getItem(key);
                        const elapsed = Date.now() - Number(stored);
                        seen = stored !== null && (c.frequency === 'session' || elapsed < (c.frequency === 'day' ? 86400000 : 604800000));
                    }
                    catch { /* Storage may be unavailable; the dismiss button still works. */ }
                    if (seen)
                        continue;
                    timer = setTimeout(() => { if (abort.signal.aborted || c.endsAt && Date.parse(c.endsAt) <= Date.now())
                        return; setCampaign({ id: item.id, version: item.version, content: c }); }, c.delay * 1000);
                    break;
                }
            }
            catch { /* An optional campaign must not block the page. */ }
        }
        void load();
        return () => { abort.abort(); if (timer)
            clearTimeout(timer); };
    }, [path]);
    useEffect(() => {
        if (!campaign || !dialog.current)
            return;
        const node = dialog.current;
        node.showModal();
        const c = campaign.content;
        try {
            (c.frequency === 'session' ? sessionStorage : localStorage).setItem(`cn-popup:${campaign.id}:${campaign.version}`, String(Date.now()));
        }
        catch { }
        return () => node.close();
    }, [campaign]);
    if (!campaign)
        return null;
    const c = campaign.content;
    return <dialog ref={dialog} className="cn-popup" aria-labelledby="cn-popup-title" aria-describedby="cn-popup-body" onClose={() => setCampaign(null)}><button className="cn-popup-close" autoFocus onClick={() => dialog.current?.close()} aria-label="Close announcement">Close</button>{c.image && <><img src={c.image} alt={c.alt}/></>}<div className="cn-popup-content"><h2 id="cn-popup-title">{c.title}</h2><p id="cn-popup-body">{c.body}</p>{c.url && c.buttonLabel && <a href={c.url}>{c.buttonLabel}</a>}</div></dialog>;
}
