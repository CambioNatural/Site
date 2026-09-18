import {z} from 'zod';
export const crmKinds=['companies','contacts','deals','activities'] as const;
export type CrmKind=typeof crmKinds[number];
export type CrmRecord={id:string;version:number;archived:boolean;name:string;[key:string]:string|number|boolean|null};
type Field={key:string;label:string;type?:string;options?:Record<string,string>;relation?:CrmKind;required?:boolean};
export const crmLabels:Record<CrmKind,string>={companies:'Empresas',contacts:'Contactos',deals:'Oportunidades',activities:'Actividades'};
export const stages={new:'Nueva',qualified:'Calificada',proposal:'Propuesta',negotiation:'Negociación',won:'Ganada',lost:'Perdida'};
const company:Field={key:'company_id',label:'Empresa',relation:'companies'};
const contact:Field={key:'contact_id',label:'Contacto',relation:'contacts'};
export const crmFields:Record<CrmKind,Field[]>={
 companies:[{key:'website',label:'Sitio web',type:'url'},{key:'industry',label:'Sector'},{key:'city',label:'Ciudad / país'}],
 contacts:[company,{key:'email',label:'Correo',type:'email'},{key:'phone',label:'Teléfono'},{key:'job_title',label:'Cargo'},{key:'source',label:'Origen del contacto'},{key:'status',label:'Estado',options:{lead:'Prospecto',qualified:'Calificado',customer:'Cliente',partner:'Aliado',inactive:'Inactivo'}}],
 deals:[company,contact,{key:'process',label:'Proceso',options:{sales:'Venta de servicios',partnership:'Alianza / colaboración'}},{key:'stage',label:'Etapa',options:stages},{key:'amount',label:'Monto estimado',type:'number'},{key:'currency',label:'Moneda',options:{MXN:'MXN',USD:'USD',EUR:'EUR'}},{key:'close_date',label:'Cierre esperado',type:'date'}],
 activities:[company,contact,{key:'deal_id',label:'Oportunidad',relation:'deals'},{key:'type',label:'Tipo',options:{task:'Tarea',call:'Llamada',meeting:'Reunión',email:'Correo'}},{key:'status',label:'Estado',options:{pending:'Pendiente',done:'Completada',cancelled:'Cancelada'}},{key:'due_date',label:'Fecha de seguimiento',type:'date'}],
};
const nullableId=z.union([z.uuid(),z.literal(''),z.null()]).transform(v=>v||null);
const date=z.union([z.iso.date(),z.literal(''),z.null()]).transform(v=>v||null);
const short=z.string().trim().max(200);
const base=z.object({name:short.min(1,'Escribe un nombre o asunto.'),owner:short,notes:z.string().max(10000),archived:z.boolean()});
export const crmSchemas={
 companies:base.extend({website:z.union([z.url({protocol:/^https?$/}),z.literal('')]),industry:short,city:short}),
 contacts:base.extend({company_id:nullableId,email:z.union([z.email(),z.literal('')]),phone:short,job_title:short,source:short,status:z.enum(['lead','qualified','customer','partner','inactive'])}),
 deals:base.extend({company_id:nullableId,contact_id:nullableId,process:z.enum(['sales','partnership']),stage:z.enum(['new','qualified','proposal','negotiation','won','lost']),amount:z.coerce.number().min(0).max(999999999999.99).multipleOf(.01),currency:z.enum(['MXN','USD','EUR']),close_date:date}),
 activities:base.extend({company_id:nullableId,contact_id:nullableId,deal_id:nullableId,type:z.enum(['task','call','meeting','email']),status:z.enum(['pending','done','cancelled']),due_date:date}),
};
export function emptyCrm(kind:CrmKind):CrmRecord{
 const record:CrmRecord={id:'',version:0,name:'',owner:'',notes:'',archived:false};
 for(const field of crmFields[kind])record[field.key]=field.options?Object.keys(field.options)[0]:field.type==='number'?0:'';
 return record;
}
