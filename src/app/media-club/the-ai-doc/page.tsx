import type {Metadata} from 'next';
import Landing from '@/components/media-club-ai/Landing';
import {event} from '@/components/media-club-ai/content';
export const dynamic = 'force-dynamic';
export const metadata:Metadata={title:'The AI Doc · Media Club',description:'La IA y la vida que compartimos. Conversación por Zoom · 19 de noviembre de 2026, 19:00 CDMX. Inscríbete en el Media Club de Cambio Natural.',alternates:{canonical:event.url},openGraph:{url:event.url,title:'La IA y la vida que compartimos · Media Club',images:[{url:'/media-club-ai/conversation.webp',width:1400,height:1400}]}};
// This dynamic server page evaluates registration availability once per request.
// eslint-disable-next-line react-hooks/purity
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string}>}){const {lang}=await searchParams;return <Landing initialLanguage={lang==='en'?'en':'es'} closed={Date.now()>=Date.parse(event.startsAt)}/>;}
