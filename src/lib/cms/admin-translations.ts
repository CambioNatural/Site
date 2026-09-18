export type AdminLanguage='es'|'en';
export const english:Record<string,string>={};
const entries=`
Administración|Administration
Usuarios|Users
Portada|Homepage
Módulos del CMS|CMS modules
Iniciar sesión|Sign in
Correo|Email
Contraseña|Password
Confirmar contraseña|Confirm password
Entrar|Sign in
Cerrar sesión|Sign out
Nueva contraseña|New password
Recuperar acceso|Recover access
Accede con el correo y contraseña de tu cuenta autorizada.|Sign in with the email and password of your authorized account.
Usa al menos 12 caracteres para proteger tu cuenta.|Use at least 12 characters to protect your account.
Te enviaremos un enlace para recuperar tu cuenta.|We will send you a link to recover your account.
Si la cuenta existe, recibirás un enlace para recuperar el acceso.|If the account exists, you will receive a recovery link.
Procesando…|Processing…
Guardar contraseña|Save password
Enviar enlace|Send link
Volver al acceso|Back to sign in
Olvidé mi contraseña|Forgot password
Volver al sitio|Back to website
Hay cambios sin guardar. ¿Descartarlos para cambiar de módulo?|You have unsaved changes. Discard them to switch modules?
Hay cambios sin guardar. ¿Descartarlos para cambiar de contenido?|You have unsaved changes. Discard them to switch content?
Hay cambios sin guardar. ¿Descartarlos?|You have unsaved changes. Discard them?
¿Descartar los cambios de permisos sin guardar?|Discard unsaved permission changes?
Empresas|Companies
Contactos|Contacts
Oportunidades|Opportunities
Actividades|Activities
Empresa|Company
Contacto|Contact
Oportunidad|Opportunity
Nueva|New
Calificada|Qualified
Propuesta|Proposal
Negociación|Negotiation
Ganada|Won
Perdida|Lost
Sitio web|Website
Sector|Industry
Ciudad / país|City / country
Teléfono|Phone
Cargo|Job title
Origen del contacto|Lead source
Estado|Status
Prospecto|Lead
Calificado|Qualified
Cliente|Customer
Aliado|Partner
Inactivo|Inactive
Proceso|Process
Venta de servicios|Service sales
Alianza / colaboración|Partnership / collaboration
Etapa|Stage
Monto estimado|Estimated value
Moneda|Currency
Cierre esperado|Expected close date
Tipo|Type
Tarea|Task
Llamada|Call
Reunión|Meeting
Pendiente|Pending
Completada|Completed
Cancelada|Cancelled
Fecha de seguimiento|Follow-up date
Organiza contactos, oportunidades y próximos pasos.|Manage contacts, opportunities and next steps.
Nueva empresa|New company
Nuevo contacto|New contact
Nueva oportunidad|New opportunity
Nueva actividad|New activity
Resumen CRM|CRM summary
contactos activos|active contacts
oportunidades abiertas|open opportunities
seguimientos vencidos|overdue follow-ups
Valor abierto|Open value
Entidades CRM|CRM entities
Buscar|Search
Nombre, correo, responsable…|Name, email, owner…
Vista|View
Activos|Active
Archivados|Archived
Estado / etapa|Status / stage
Todos|All
Guardando registro…|Saving record…
Cambios sin guardar.|Unsaved changes.
Cambios sin guardar|Unsaved changes
registros · Hasta 1,000 recientes por categoría|records · Up to 1,000 recent records per category
Seguimiento:|Follow-up:
Sin responsable|Unassigned
Sin coincidencias|No matches
Empieza aquí|Start here
Prueba con otro nombre o limpia los filtros.|Try another name or clear the filters.
Crea un registro para organizar tus relaciones y próximos pasos.|Create a record to organize your relationships and next steps.
Limpiar filtros|Clear filters
Editar|Edit
Crear|Create
Nombre / asunto *|Name / subject *
Sin vincular|Not linked
(archivado)|(archived)
Responsable (nombre o correo)|Owner (name or email)
Notas|Notes
Archivado|Archived
Guardando…|Saving…
Guardar registro|Save record
Cerrar editor|Close editor
Registro guardado.|Record saved.
Los registros archivados conservan sus relaciones. Las actividades de correo registran el seguimiento; el envío se realiza fuera del CRM.|Archived records retain their relationships. Email activities track follow-ups; emails are sent outside the CRM.
Gestiona tus relaciones|Manage your relationships
Selecciona un registro para editar o crea uno nuevo. Empieza por una empresa y sus contactos; después vincula oportunidades y actividades.|Select a record to edit or create a new one. Start with a company and its contacts, then link opportunities and activities.
No se pudo confirmar el guardado. Tus cambios siguen aquí; recarga en otra pestaña para comprobar el registro antes de reintentar.|The save could not be confirmed. Your changes are still here; check the record in another tab before retrying.
No se pudo guardar. Verifica tu acceso y los registros relacionados.|Could not save. Check your access and the linked records.
El registro cambió en otra sesión. Recarga antes de editar.|This record changed in another session. Reload before editing.
No fue posible guardar. Verifica tu sesión y el permiso CRM.|Could not save. Check your session and CRM permission.
Revisa los campos del formulario antes de guardar.|Check the form fields before saving.
Usuarios y permisos|Users and permissions
Decide quién puede editar y publicar en cada módulo.|Choose who can manage each module.
Se muestran las cuentas existentes en Supabase Auth. El alta de nuevas cuentas se realiza en Supabase; este formulario administra su acceso al CMS.|Existing Supabase Auth accounts are shown here. Create accounts in Supabase; manage their CMS access here.
Guardando permisos…|Saving permissions…
Buscar por correo|Search by email
Correo del usuario|User email
cuenta|account
cuentas|accounts
Sin correo|No email
Administrador general|General administrator
Sin acceso al CMS|No CMS access
No hay cuentas que coincidan.|No matching accounts.
Cuenta sin correo|Account without email
Correo confirmado|Email confirmed
Correo pendiente de confirmación|Email awaiting confirmation
Administrador general. Tiene acceso a todos los módulos y a la gestión de usuarios. Esta pantalla conserva sus permisos.|General administrator. Has access to all modules and user management. This screen preserves these permissions.
Permisos de gestión|Management permissions
Gestionar empresas, contactos, oportunidades y actividades.|Manage companies, contacts, opportunities and activities.
Editar, guardar y publicar contenido.|Edit, save and publish content.
Si desmarcas todos los módulos, la cuenta conserva su inicio de sesión pero pierde acceso al CMS. La biblioteca de imágenes es compartida entre los módulos autorizados.|Clearing all modules preserves the account but removes CMS access. The image library is shared across authorized modules.
Revisar cambios|Review changes
Guardar para|Save for
sin acceso a los módulos|no module access
Confirmar permisos|Confirm permissions
Cancelar|Cancel
Selecciona una cuenta|Select an account
Busca un usuario y asigna los módulos que podrá gestionar. Solo los administradores generales pueden modificar estos permisos.|Find a user and assign the modules they can manage. Only general administrators can change these permissions.
Permisos actualizados. Se aplican en la siguiente operación del usuario.|Permissions updated. They apply on the user's next operation.
No se pudo confirmar el cambio. Recarga y comprueba los permisos antes de reintentar.|The change could not be confirmed. Reload and check permissions before retrying.
Crea avisos y programa cuándo y dónde aparecen.|Create notices and schedule when and where they appear.
Prepara y publica entradas para el futuro blog del sitio.|Prepare and publish posts for the website's future blog.
Guardar borrador|Save draft
Cerrar vista previa|Close preview
Vista previa local|Local preview
Activar pop-up|Activate pop-up
Publicar entrada|Publish post
Desactivar|Deactivate
Retirar publicación|Unpublish
Crea tu primer borrador.|Create your first draft.
El contenido guardado estará disponible para los visitantes según su configuración.|Saved content will be available to visitors according to its settings.
Se retirará el contenido público. Podrás volver a publicarlo desde este borrador.|Public content will be removed. You can publish it again from this draft.
Confirmar|Confirm
Nuevo pop-up|New pop-up
Nueva entrada|New post
Buscar contenido|Search content
Título o identificador|Title or identifier
Aún no hay contenido. Empieza con un borrador.|There is no content yet. Start with a draft.
No hay contenido que coincida.|No matching content.
Borrador|Draft
Sin publicar|Unpublished
· cambios pendientes|· pending changes
Editar contenido|Edit content
Crear pop-up|Create pop-up
Crear entrada|Create post
Título|Title
Identificador interno (minúsculas y guiones)|Internal identifier (lowercase and hyphens)
Slug de la entrada (minúsculas y guiones)|Post slug (lowercase and hyphens)
Autor|Author
Resumen|Summary
Mensaje|Message
Contenido (texto con párrafos)|Content (plain text with paragraphs)
Imagen opcional|Optional image
Quitar imagen|Remove image
Subir imagen|Upload image
Descripción de la imagen|Image description
PNG, JPEG o WebP · máximo 5 MB.|PNG, JPEG or WebP · up to 5 MB.
Texto del botón (opcional)|Button text (optional)
Enlace del botón (https o página existente)|Button link (https or existing page)
Programación|Schedule
Fechas en la zona horaria de tu dispositivo. Déjalas vacías para comenzar al activar y mantener el aviso vigente.|Dates use your device's time zone. Leave them empty to start on activation and keep the notice active.
Comienza|Starts
Termina|Ends
Espera antes de mostrar (segundos)|Delay before showing (seconds)
Frecuencia por navegador|Frequency per browser
Una vez por sesión|Once per session
Una vez cada 24 horas|Once every 24 hours
Una vez cada 7 días|Once every 7 days
Mostrar en estas páginas|Show on these pages
Inicio|Home
Vista previa del contenido|Content preview
Vista previa local · incluye cambios sin guardar|Local preview · includes unsaved changes
El contenido aparecerá aquí.|Content will appear here.
Borrador guardado.|Draft saved.
Pop-up activado. Se mostrará según las fechas y páginas elegidas.|Pop-up activated. It will follow the selected dates and pages.
Entrada publicada en la API del blog.|Post published to the blog API.
Publicación retirada. El borrador se conserva.|Unpublished. The draft is preserved.
No se pudo confirmar la operación. Conserva tus cambios y comprueba el estado antes de reintentar.|The operation could not be confirmed. Keep your changes and check the status before retrying.
Presentación|Introduction
Introducción|Introduction
Encabezado|Heading
Logotipo principal|Main wordmark
Quiénes somos|About us
Frase destacada|Featured statement
Descripción|Description
Ilustración|Illustration
Iniciativas|Initiatives
Encabezado de sección|Section heading
Artículo destacado|Featured article
Categoría|Category
Imagen del artículo|Article image
Texto del enlace|Link text
Dirección del artículo|Article URL
Newsletter y pie|Newsletter and footer
Introducción del newsletter|Newsletter introduction
Título del newsletter|Newsletter title
Imagen del newsletter|Newsletter image
Pie de página|Footer
Navegación y contacto|Navigation and contact
Reservar llamada · texto|Book a call · text
Reservar llamada · dirección|Book a call · URL
Edita la portada, revisa el borrador y publica cuando esté listo.|Edit the homepage, review the draft and publish when ready.
Guardar y ver|Save and preview
Ver borrador|Preview draft
Publicar cambios|Publish changes
Guarda tus cambios para incluirlos en la vista previa.|Save your changes to include them in the preview.
El borrador está guardado. Puedes revisarlo antes de publicar.|The draft is saved. You can review it before publishing.
Sin publicación|Not published
La versión|Version
reemplazará el contenido visible del sitio conectado a este proyecto.|will replace the visible content on the website connected to this project.
Confirmar publicación|Confirm publication
Secciones del contenido|Content sections
Modificado|Modified
Los cambios se conservan al cambiar de sección. Guarda para actualizar el borrador.|Your changes are preserved when switching sections. Save to update the draft.
Reemplazar|Replace
Texto alternativo ·|Alternative text ·
PNG, JPEG o WebP · máximo 5 MB. Se optimiza para la web. Describe las imágenes informativas; deja vacío el texto alternativo de las decorativas.|PNG, JPEG or WebP · up to 5 MB. Optimized for the web. Describe informative images; leave decorative image alternative text empty.
Opcional. Si lo dejas vacío, se usa el texto principal.|Optional. Leave empty to use the main text.
Usa una dirección https o una ruta existente del sitio.|Use an https URL or an existing website path.
Historial|History
Recupera una publicación como borrador para revisarla.|Restore a publication as a draft for review.
Aquí aparecerán las versiones cuando publiques por primera vez.|Versions will appear here after your first publication.
Versión|Version
Publicada|Published
Recuperar versión|Restore version
Se reemplazará el borrador guardado por la versión|The saved draft will be replaced with version
. La publicación actual se conserva.|. The current publication is preserved.
Confirmar recuperación|Confirm restore
Guarda tus cambios antes de recuperar una versión.|Save your changes before restoring a version.
Borrador guardado. Los cambios están listos para revisar.|Draft saved. Your changes are ready for review.
No se pudo conectar. Tus cambios siguen aquí; vuelve a guardar.|Could not connect. Your changes are still here; try saving again.
No se pudo confirmar la publicación. Recarga para comprobar su estado antes de reintentar.|Publication could not be confirmed. Reload to check its status before retrying.
Selecciona una imagen PNG, JPEG o WebP de hasta 5 MB.|Select a PNG, JPEG or WebP image up to 5 MB.
Imagen lista. Guarda el borrador para conservarla.|Image ready. Save the draft to keep it.
No se pudo subir la imagen. Vuelve a intentarlo.|Could not upload the image. Try again.
Versión recuperada como borrador. Revisa la vista previa.|Version restored as a draft. Check the preview.
No se pudo confirmar la recuperación. Recarga para comprobar el borrador.|Restore could not be confirmed. Reload to check the draft.
Escribe tu correo y contraseña.|Enter your email and password.
No pudimos iniciar sesión. Revisa los datos o recupera tu acceso.|Could not sign in. Check your details or recover access.
Esta cuenta no tiene acceso al panel.|This account does not have access to the dashboard.
No se pudo completar la operación.|Could not complete the operation.
Otra sesión guardó cambios. Recarga el editor antes de continuar; copia tus cambios para conservarlos.|Another session saved changes. Copy your changes and reload the editor before continuing.
No se pudo guardar el contenido. Vuelve a intentarlo.|Could not save content. Try again.
Versión inválida. Recarga el editor.|Invalid version. Reload the editor.
Sube una imagen PNG, JPEG o WebP de hasta 5 MB.|Upload a PNG, JPEG or WebP image up to 5 MB.
Usa PNG, JPEG o WebP.|Use PNG, JPEG or WebP.
Usa PNG, JPEG o WebP de hasta 5 MB.|Use PNG, JPEG or WebP up to 5 MB.
El archivo no es una imagen compatible.|The file is not a supported image.
El borrador cambió. Recarga antes de publicar.|The draft changed. Reload before publishing.
Falta una imagen del borrador. Vuelve a subirla.|A draft image is missing. Upload it again.
No se pudo preparar la imagen para publicación.|Could not prepare the image for publication.
Esta versión ya está publicada. Guarda un nuevo borrador para publicar cambios.|This version is already published. Save a new draft to publish changes.
No se encontró esa versión.|That version was not found.
No se pudo enviar la recuperación. Espera un momento y vuelve a intentar.|Could not send the recovery link. Wait a moment and try again.
Usa al menos 12 caracteres y confirma la misma contraseña.|Use at least 12 characters and confirm the same password.
El enlace caducó. Solicita uno nuevo.|The link expired. Request a new one.
No se pudo cambiar la contraseña. Solicita un nuevo enlace.|Could not change the password. Request a new link.
Los permisos cambiaron en otra sesión. Recarga antes de continuar.|Permissions changed in another session. Reload before continuing.
Esta cuenta es un administrador general y está protegida.|This account is a protected general administrator.
No se pudieron actualizar los permisos.|Could not update permissions.
No se pudo guardar.|Could not save.
No se pudo guardar. Vuelve a intentarlo.|Could not save. Try again.
Otra sesión cambió este contenido. Copia tus cambios y recarga.|Another session changed this content. Copy your changes and reload.
Ese identificador ya está en uso. Elige otro.|That identifier is already in use. Choose another.
No se pudo preparar la imagen. Vuelve a subirla.|Could not prepare the image. Upload it again.
No se pudo publicar la imagen.|Could not publish the image.
Cargando módulo|Loading module
Estamos recuperando la información de tu espacio de trabajo.|We are retrieving your workspace information.
No pudimos cargar el módulo|Could not load the module
Comprueba tu conexión y vuelve a intentarlo. Si tu sesión caducó, inicia sesión de nuevo.|Check your connection and try again. If your session expired, sign in again.
Referencia:|Reference:
Reintentar|Try again
Ir al acceso|Go to sign in
Acceso pendiente|Access pending
Solicita a un administrador permisos para un módulo del CMS.|Ask an administrator for permission to access a CMS module.
CRM pendiente de conexión|CRM connection pending
No fue posible cargar los registros. Verifica la migración CRM y tu conexión.|Could not load records. Check the CRM migration and your connection.
Volver al CMS|Back to CMS
Volver al editor|Back to editor
La pantalla está preparada. Falta aplicar la configuración de permisos en Supabase.|This screen is ready. Apply the permission configuration in Supabase to continue.
Los administradores generales conservan su acceso actual. La asignación de módulos estará disponible cuando se active la configuración.|General administrators retain their access. Module assignment will be available when configuration is activated.
Contenido de la entrada|Post content
palabras|words
min de lectura|min read
Selecciona texto para darle formato. Puedes pegar texto desde otros documentos.|Select text to format it. You can paste text from other documents.
Formato del texto|Text formatting
Estilo del párrafo|Paragraph style
Párrafo|Paragraph
Encabezado 2|Heading 2
Encabezado 3|Heading 3
Encabezado 4|Heading 4
Negrita|Bold
Cursiva|Italic
Subrayado|Underline
Tachado|Strikethrough
Lista con viñetas|Bullet list
Lista numerada|Numbered list
Cita|Quote
Enlace|Link
Separador|Divider
Quitar formato|Clear formatting
Deshacer|Undo
Rehacer|Redo
Dirección del enlace|Link URL
Aplicar enlace|Apply link
Quitar enlace|Remove link
Usa un enlace completo https://, http:// o mailto:.|Enter a full https://, http:// or mailto: link.
Cargando editor…|Loading editor…
Atajos: ⌘/Ctrl + B para negrita, I para cursiva y Z para deshacer.|Shortcuts: ⌘/Ctrl + B for bold, I for italic and Z to undo.
El contenido supera el límite de 60,000 caracteres. Reduce el texto antes de guardar.|Content exceeds 60,000 characters. Shorten the text before saving.
Cambios pendientes|Pending changes
caracteres|characters
Los registros archivados se consultan en modo de lectura.|Archived records are read-only.
Lista|List
Tablero Kanban|Kanban board
Arrastra una tarjeta a otra etapa o usa su selector de etapa.|Drag a card to another stage or use its stage selector.
Guarda o descarta los cambios del editor antes de mover tarjetas.|Save or discard editor changes before moving cards.
Sin oportunidades en esta etapa.|No opportunities in this stage.
Etapa actualizada.|Stage updated.
Moviendo oportunidad…|Moving opportunity…
No se pudo mover la oportunidad. La etapa original se conserva.|Could not move the opportunity. The original stage is preserved.
Mover tarjeta|Move card
Editar oportunidad|Edit opportunity
Borrador {0} · {1}|Draft {0} · {1}
Publicación {0}|Publication {0}
Publicado: versión {0}|Published: version {0}
Versión {0} publicada.|Version {0} published.
{0} / {1} caracteres|{0} / {1} characters
{0} · versión móvil (opcional)|{0} · mobile version (optional)
Iniciativa {0} · descripción|Initiative {0} · description
Iniciativa {0} · imagen|Initiative {0} · image
Iniciativa {0} · título|Initiative {0} · title
Enlace {0} · dirección|Link {0} · URL
Enlace {0} · texto|Link {0} · text
Vista previa del borrador {0}|Draft preview {0}
`;
for(const line of entries.trim().split('\n')){const [es,en]=line.split('|');english[es]=en;}
const escape=(s:string)=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const patterns=Object.entries(english).filter(([key])=>key.includes('{0}')).map(([key,value])=>({regex:new RegExp('^'+key.split(/\{\d+\}/).map(escape).join('(.*?)')+'$'),value}));
export function translateAdmin(text:string,language:AdminLanguage):string{
 if(language==='es'||!text)return text;
 const trimmed=text.trim();
 if(trimmed!==text)return text.slice(0,text.indexOf(trimmed))+translateAdmin(trimmed,language)+text.slice(text.indexOf(trimmed)+trimmed.length);
 if(english[text])return english[text];
 for(const {regex,value} of patterns){const match=text.match(regex);if(match)return value.replace(/\{(\d+)\}/g,(_,i)=>translateAdmin(match[Number(i)+1],language));}
 return text;
}
