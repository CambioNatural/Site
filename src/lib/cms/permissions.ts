export const cmsModules=['home','blog','popups','crm'] as const;
export type CmsModule=typeof cmsModules[number];
export type CmsAccess={admin:boolean;modules:CmsModule[]};
export type CmsUser={id:string;email:string|null;confirmed:boolean;lastSignIn:string|null;admin:boolean;modules:CmsModule[]};
export const moduleLabels:Record<CmsModule,string>={home:'Portada',blog:'Blog',popups:'Pop-ups',crm:'CRM'};
