'use client';
/* The campaign image is a local, optimized editorial asset. */
/* eslint-disable @next/next/no-img-element */
import {useState, type FormEvent} from 'react';
import Link from 'next/link';
import {copy, event} from './content';
import s from './landing.module.css';

export default function Landing({initialLanguage, closed}: {initialLanguage: 'es'|'en'; closed: boolean}) {
  const [language, setLanguage] = useState(initialLanguage);
  const [status, setStatus] = useState<'idle'|'pending'|'success'|'error'>('idle');
  const c = copy[language];
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus('pending');
    try {
      const response = await fetch('/api/media-club/register', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name:form.get('name'),email:form.get('email'),consent:form.get('consent') === 'on',website:form.get('website'),language})});
      setStatus(response.ok ? 'success' : 'error');
    } catch {setStatus('error');}
  }
  return <main className={s.page} lang={language}>
    <header className={s.header}>
      <Link href="/" className={s.brand} aria-label="Cambio Natural"><span>CAMBIO</span><span>NATURAL↗</span></Link>
      <div className={s.headerRight}><span>MEDIA CLUB</span><nav aria-label="Language"><button aria-pressed={language==='es'} onClick={()=>setLanguage('es')}>ES</button><button aria-pressed={language==='en'} onClick={()=>setLanguage('en')}>EN</button></nav></div>
    </header>
    <section className={s.hero}>
      <div className={s.heroCopy}><p className={s.eyebrow}>MEDIA CLUB / 19.11.2026</p><h1>{c.title}</h1><p className={s.intro}>{c.intro}</p><a className={s.button} href="#register">{c.join}<span>↗</span></a><p className={s.heroDate}>{c.date}<br/>{c.time} · Zoom</p></div>
      <div className={s.art}><img src="/media-club-ai/conversation.webp" alt={language==='es'?'Personas conversando alrededor de una mesa, conectadas con una planta y una pantalla.':'People gathered around a table, connected with a plant and a screen.'}/><span className={s.artLabel}>THINK TOGETHER</span></div>
    </section>
    <section className={s.film}><div><p className={s.eyebrow}>{c.filmLabel}</p><h2>{event.title}</h2><p className={s.credit}>Daniel Roher & Charlie Tyrell · 2026</p></div><div><p>{c.film}</p><p>{c.filmMore}</p><a href="https://www.focusfeatures.com/video/the-ai-doc-official-trailer" target="_blank" rel="noopener noreferrer">{c.trailer}</a></div></section>
    <section className={s.topics}><p className={s.eyebrow}>{c.topicsLabel}</p><div className={s.cards}>{c.topics.map(([title,body],i)=><article key={title}><span className={s.number}>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className={s.club}><span aria-hidden="true">↗</span><div><h2>{c.clubTitle}</h2><p>{c.club}</p></div></section>
    <section className={s.registration} id="register"><div><p className={s.eyebrow}>MEDIA CLUB · CAMBIO NATURAL</p><h2>{c.formTitle}</h2><p>{c.date}<br/>{c.time}<br/>Zoom</p></div><div className={s.formWrap}>{closed?<p role="status">{c.closed}</p>:status==='success'?<div role="status" className={s.success}><span aria-hidden="true">✓</span><h3>{c.success}</h3><p>{c.successBody}</p></div>:<form onSubmit={submit}><p>{c.formIntro}</p><fieldset disabled={status==='pending'}><label>{c.name}<input name="name" autoComplete="name" required maxLength={120}/></label><label>{c.email}<input name="email" type="email" autoComplete="email" required maxLength={254}/></label><div className={s.trap} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div><label className={s.consent}><input type="checkbox" name="consent" required/><span>{c.consent}</span></label><button className={s.button} type="submit">{status==='pending'?c.pending:c.join}<span>↗</span></button></fieldset><p className={s.privacy}>{c.privacy}</p>{status==='error'&&<p role="alert">{c.error}</p>}</form>}</div></section>
    <footer className={s.footer}><strong>CAMBIO NATURAL</strong><p>{c.footer}</p><Link href="/">{c.back} ↗</Link></footer>
  </main>;
}
