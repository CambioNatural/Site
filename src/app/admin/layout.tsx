import type { Metadata } from 'next';
import './admin.css';
import AdminLanguage from '@/components/admin/AdminLanguage';
export const metadata: Metadata = {title:'Administración | Cambio Natural',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}) {return <AdminLanguage>{children}</AdminLanguage>;}
