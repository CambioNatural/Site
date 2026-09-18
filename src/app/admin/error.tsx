'use client';
import AdminIdentity from '@/components/admin/AdminIdentity';
export default function AdminError({error,retry}:{error:Error&{digest?:string};retry:()=>void}){
 return <main className="cms-auth"><AdminIdentity/><h1>No pudimos cargar el módulo</h1><p>Comprueba tu conexión y vuelve a intentarlo. Si tu sesión caducó, inicia sesión de nuevo.</p>{error.digest&&<p className="cms-help">Referencia: {error.digest}</p>}<div className="cms-recovery-actions"><button onClick={()=>retry()}>Reintentar</button><a href="/admin/login">Ir al acceso</a></div></main>;
}
