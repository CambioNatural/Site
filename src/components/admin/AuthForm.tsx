'use client';
import Link from 'next/link';
import AdminIdentity from './AdminIdentity';
import { useActionState, useState } from 'react';
import { login, requestRecovery, updatePassword } from '@/app/admin/actions';
export default function AuthForm({recover = false}: {recover?: boolean}) {
 const [reset,setReset] = useState(false);
 const [state,action,pending] = useActionState(recover ? updatePassword : reset ? requestRecovery : login,{ok:false});
 return <section className="cms-auth"><AdminIdentity/><h1>{recover?'Nueva contraseña':reset?'Recuperar acceso':'Iniciar sesión'}</h1>
 <p className="cms-help">{recover?'Usa al menos 12 caracteres para proteger tu cuenta.':reset?'Te enviaremos un enlace para recuperar tu cuenta.':'Accede con el correo y contraseña de tu cuenta autorizada.'}</p><form action={action} aria-busy={pending}>
 {!recover && <label>Correo<input name="email" type="email" autoComplete="username" required placeholder="tu@correo.com" /></label>}
 {(!reset || recover) && <label>Contraseña<input name="password" type="password" autoComplete={recover?'new-password':'current-password'} minLength={recover?12:undefined} required /></label>}
 {recover && <label>Confirmar contraseña<input name="confirm" type="password" autoComplete="new-password" minLength={12} required /></label>}
 <p role="status">{state.error ?? (state.ok?'Si la cuenta existe, recibirás un enlace para recuperar el acceso.':'')}</p>
 <button disabled={pending}>{pending?'Procesando…':recover?'Guardar contraseña':reset?'Enviar enlace':'Entrar'}</button>
 </form>
 {!recover && <button className="cms-secondary" disabled={pending} onClick={()=>setReset(!reset)}>{reset?'Volver al acceso':'Olvidé mi contraseña'}</button>}
 <Link href="/">Volver al sitio</Link></section>;
}
