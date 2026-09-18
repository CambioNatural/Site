'use client';
import AdminIdentity from './AdminIdentity';
import {useAdminLanguage,LanguageToggle} from './AdminLanguage';
import {logout} from '@/app/admin/actions';
export function AdminNotice({title,message,signOut=false}:{title:string;message:string;signOut?:boolean}){const {t}=useAdminLanguage();return <main className="cms-auth"><AdminIdentity/><h1>{t(title)}</h1><p>{t(message)}</p>{signOut?<form action={logout}><button>{t('Cerrar sesión')}</button></form>:<a href="/admin">{t('Volver al CMS')}</a>}</main>;}
export function AdminPreviewBar({version}:{version:number}){const {t}=useAdminLanguage();return <aside className="cms-preview"><span>{t(`Vista previa del borrador ${version}`)}</span><a href="/admin">{t('Volver al editor')}</a><LanguageToggle/></aside>;}
