import type {CmsDocument} from './schema';
/** Every editable image is represented by a validated {src,alt} object. */
export function documentImages(document:CmsDocument){const images:{src:string;alt:string}[]=[];function visit(value:unknown){if(!value||typeof value!=='object')return;if('src' in value&&'alt' in value&&typeof value.src==='string'&&typeof value.alt==='string'){images.push(value as {src:string;alt:string});return;}Object.values(value).forEach(visit);}visit(document);return images;}
export function previewImages(document:CmsDocument){const copy=structuredClone(document);for(const image of documentImages(copy))if(image.src.startsWith('draft:'))image.src=`/admin/media?path=${encodeURIComponent(image.src.slice(6))}`;return copy;}
