import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
import {z} from 'zod';
import {event} from '@/components/media-club-ai/content';
const schema=z.object({name:z.string().trim().min(1).max(120),email:z.string().trim().toLowerCase().max(254).pipe(z.email()),language:z.enum(['es','en']),consent:z.literal(true),website:z.string().max(200).default('')});
export async function POST(request:Request){
  const origin=request.headers.get('origin');
  // Next.js can use an internal hostname in request.url behind a proxy.
  if(origin){
    try { if(new URL(origin).host!==request.headers.get('host'))return NextResponse.json({ok:false},{status:403}); }
    catch { return NextResponse.json({ok:false},{status:403}); }
  }
  if(Date.now()>=Date.parse(event.startsAt))return NextResponse.json({ok:false},{status:410});
  if(Number(request.headers.get('content-length')??0)>4096)return NextResponse.json({ok:false},{status:413});
  try{
    const raw=await request.text();
    if(raw.length>4096)return NextResponse.json({ok:false},{status:413});
    const parsed=schema.safeParse(JSON.parse(raw));
    if(!parsed.success)return NextResponse.json({ok:false},{status:400});
    const data=parsed.data;
    if(data.website)return NextResponse.json({ok:false},{status:400});
    const client=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,{auth:{persistSession:false,autoRefreshToken:false}});
    const {error}=await client.from('media_club_registrations').insert({event_id:event.id,name:data.name,email:data.email,language:data.language,consent_version:'event-contact-v1'});
    // Repeated registrations receive the same response, without disclosing membership.
    if(error&&error.code!=='23505')return NextResponse.json({ok:false},{status:503});
    return NextResponse.json({ok:true},{headers:{'Cache-Control':'no-store'}});
  }catch{return NextResponse.json({ok:false},{status:400});}
}
