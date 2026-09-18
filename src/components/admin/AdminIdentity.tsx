'use client';
import Link from 'next/link';
import type {CmsAccess} from '@/lib/cms/permissions';
type Module = 'home' | 'blog' | 'popups' | 'users' | 'crm';
const modules: { id: Module; label: string; href: string; icon: string }[] = [
  { id: 'crm', label: 'CRM', href: '/admin/crm', icon: 'M3 4h7v7H3z M14 4h7v7h-7z M3 15h7v6H3z M14 15h7v6h-7z' },
  { id: 'users', label: 'Usuarios', href: '/admin/users', icon: 'M8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M2 21v-3a6 6 0 0 1 12 0v3 M17 4a3 3 0 0 1 0 6 M18 14a4 4 0 0 1 4 4v3' },
  { id: 'home', label: 'Portada', href: '/admin', icon: 'M3 3h18v18H3z M3 9h18 M9 9v12' },
  { id: 'blog', label: 'Blog', href: '/admin/manage/blog', icon: 'M5 3h14v18H5z M8 7h8 M8 11h8 M8 15h5' },
  { id: 'popups', label: 'Pop-ups', href: '/admin/manage/popups', icon: 'M3 5h18v14H3z M3 9h18 M7 14h10' },
];
export default function AdminIdentity({ active, dirty = false, pending = false, access }: { active?: Module; dirty?: boolean; pending?: boolean; access?:CmsAccess }) {
  return <div className="cms-identity">
    <div className="cms-brand" aria-label="Cambio Natural"><span>cambio</span><span>natural</span></div>
    <span className="cms-workspace-name">Espacio editorial</span>
    {active && <nav aria-label="Módulos del CMS">{modules.filter(item=>item.id==='users'?access?.admin:item.id==='crm'?access?.modules.includes('crm'):!access||access.modules.includes(item.id)).map(item => <Link key={item.id} href={item.href} aria-current={active === item.id ? 'page' : undefined} aria-disabled={pending || undefined} onClick={event => {
      if (pending || (dirty && active !== item.id && !window.confirm('Hay cambios sin guardar. ¿Descartarlos para cambiar de módulo?'))) event.preventDefault();
    }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true"><path d={item.icon}/></svg>{item.label}</Link>)}</nav>}
  </div>;
}
