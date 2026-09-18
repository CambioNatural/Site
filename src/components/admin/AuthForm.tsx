'use client';
import {useAdminLanguage} from '@/components/admin/AdminLanguage';

import Link from 'next/link';
import AdminIdentity from './AdminIdentity';
import { useActionState, useState } from 'react';
import { login, requestRecovery, updatePassword } from '@/app/admin/actions';
export default function AuthForm({recover = false}: {recover?: boolean}) {
 const {t,locale}=useAdminLanguage();

 const [reset,setReset] = useState(false);
 const [state,action,pending] = useActionState(recover ? updatePassword : reset ? requestRecovery : login,{ok:false});
 return <section className="cms-auth"><AdminIdentity/><h1>{recover?t("Nueva contraseña"):reset?t("Recuperar acceso"):t("Iniciar sesión")}</h1>
 <p className="cms-help">{recover?t("Usa al menos 12 caracteres para proteger tu cuenta."):reset?t("Te enviaremos un enlace para recuperar tu cuenta."):t("Accede con el correo y contraseña de tu cuenta autorizada.")}</p><form action={action} aria-busy={pending}>
 {!recover && <label>{t("Correo")}<input name="email" type="email" autoComplete="username" required placeholder={locale==='en'?'you@example.com':'tu@correo.com'} /></label>}
 {(!reset || recover) && <label>{t("Contraseña")}<input name="password" type="password" autoComplete={recover?'new-password':'current-password'} minLength={recover?12:undefined} required /></label>}
 {recover && <label>{t("Confirmar contraseña")}<input name="confirm" type="password" autoComplete="new-password" minLength={12} required /></label>}
 <p role="status">{(state.error ? t(state.error) : null) ?? (state.ok?t("Si la cuenta existe, recibirás un enlace para recuperar el acceso."):'')}</p>
 <button disabled={pending}>{pending?t("Procesando…"):recover?t("Guardar contraseña"):reset?t("Enviar enlace"):t("Entrar")}</button>
 </form>
 {!recover && <button className="cms-secondary" disabled={pending} onClick={()=>setReset(!reset)}>{reset?t("Volver al acceso"):t("Olvidé mi contraseña")}</button>}
 <Link href="/">{t("Volver al sitio")}</Link></section>;
}
