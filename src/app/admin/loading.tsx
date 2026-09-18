'use client';
import {useAdminLanguage} from '@/components/admin/AdminLanguage';
import AdminIdentity from '@/components/admin/AdminIdentity';
export default function Loading(){
 const {t}=useAdminLanguage();
return <main className="cms-shell" aria-busy="true"><AdminIdentity/><div className="cms-loading" role="status"><h1>{t("Cargando módulo")}</h1><p>{t("Estamos recuperando la información de tu espacio de trabajo.")}</p></div></main>;}
