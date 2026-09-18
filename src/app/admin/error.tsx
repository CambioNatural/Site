'use client';
import {useAdminLanguage} from '@/components/admin/AdminLanguage';

import AdminIdentity from '@/components/admin/AdminIdentity';
export default function AdminError({error,retry}:{error:Error&{digest?:string};retry:()=>void}){
 const {t}=useAdminLanguage();

 return <main className="cms-auth"><AdminIdentity/><h1>{t("No pudimos cargar el módulo")}</h1><p>{t("Comprueba tu conexión y vuelve a intentarlo. Si tu sesión caducó, inicia sesión de nuevo.")}</p>{error.digest&&<p className="cms-help">{t("Referencia: ")}{error.digest}</p>}<div className="cms-recovery-actions"><button onClick={()=>retry()}>{t("Reintentar")}</button><a href="/admin/login">{t("Ir al acceso")}</a></div></main>;
}
