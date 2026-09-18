import AdminIdentity from '@/components/admin/AdminIdentity';
export default function Loading(){return <main className="cms-shell" aria-busy="true"><AdminIdentity/><div className="cms-loading" role="status"><h1>Cargando módulo</h1><p>Estamos recuperando la información de tu espacio de trabajo.</p></div></main>;}
