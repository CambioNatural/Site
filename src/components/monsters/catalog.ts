/** Manual vector reconstruction from user-supplied preview.jpg (20 references).
 * Paths are approximate, normalized to a shared 260 × 330 registration grid.
 * Every part is independently editable. No embedded raster data.
 */
export const INK = '#0b0d08';
export const palette = [
  {name:'Magenta',value:'#bb0084'}, {name:'Purple',value:'#87008c'},
  {name:'Sky blue',value:'#00a2d5'}, {name:'Yellow',value:'#ffe500'},
  {name:'Ochre',value:'#de9800'}, {name:'Red',value:'#c90019'},
  {name:'Leaf green',value:'#70aa6c'}, {name:'Lime',value:'#aac42c'},
  {name:'Ink',value:INK},
] as const;
export const crowns = ['round-ears','curls','antennae','soft-horns','tuft','spikes','sprouts','crown','waves','swept-horns','dome','knob','curls-only'] as const;
export const ears = ['none','bat-wings','fins','round','droop','horns','spines'] as const;
export const eyeLayouts = ['pair','single','triple'] as const;
export const pupils = ['round','hearts','crosses','wink','mixed-heart','mixed-cross','wink-right','cross-open'] as const;
export const patterns = ['plain','band','chevron','fringe','drops'] as const;
export type Monster = {color:string;accent:string;feature:string;earColor?:string;crown:typeof crowns[number];ears:typeof ears[number];eyes:typeof eyeLayouts[number];pupils:typeof pupils[number];pattern:typeof patterns[number]};
const base:Monster={color:palette[0].value,accent:INK,feature:palette[0].value,crown:'round-ears',ears:'none',eyes:'pair',pupils:'round',pattern:'band'};
const make=(patch:Partial<Monster>):Monster=>({...base,...patch});
export const presets:Monster[]=[
  make({}),
  make({color:'#de9800',feature:'#de9800',crown:'curls',ears:'bat-wings',eyes:'single',pattern:'plain'}),
  make({color:'#ffe500',accent:'#00a2d5',feature:'#ffe500',crown:'soft-horns',ears:'fins',pupils:'crosses',pattern:'plain'}),
  make({color:'#c90019',feature:'#c90019',crown:'tuft',ears:'spines',pattern:'plain'}),
  make({color:'#70aa6c',accent:'#aac42c',feature:INK,crown:'spikes',eyes:'single',pupils:'hearts',pattern:'chevron'}),
  make({color:'#70aa6c',accent:'#aac42c',feature:'#70aa6c',earColor:'#de9800',crown:'sprouts',ears:'fins',pupils:'wink',pattern:'band'}),
  make({color:'#87008c',feature:INK,crown:'spikes',eyes:'triple',pattern:'plain'}),
  make({color:'#00a2d5',feature:'#00a2d5',crown:'antennae',pupils:'hearts',pattern:'plain'}),
  make({color:'#bb0084',accent:'#de9800',feature:'#de9800',crown:'dome',pupils:'mixed-cross',pattern:'fringe'}),
  make({color:'#ffe500',feature:INK,crown:'curls-only',pattern:'drops'}),
  make({color:'#00a2d5',feature:'#00a2d5',crown:'crown',eyes:'single',pupils:'hearts',pattern:'plain'}),
  make({color:'#de9800',feature:'#de9800',accent:'#ffffff',crown:'waves',pattern:'drops'}),
  make({color:'#ffe500',feature:INK,crown:'spikes',ears:'fins',pattern:'band'}),
  make({color:'#70aa6c',feature:INK,crown:'soft-horns',ears:'horns',pupils:'wink-right',pattern:'chevron'}),
  make({color:'#87008c',feature:INK,crown:'knob',pattern:'fringe'}),
  make({color:'#87008c',feature:INK,crown:'dome',ears:'round',pattern:'fringe'}),
  make({color:'#ffe500',feature:INK,crown:'sprouts',ears:'droop',pattern:'plain'}),
  make({color:'#c90019',feature:'#c90019',crown:'waves',pupils:'mixed-heart',pattern:'chevron'}),
  make({color:'#00a2d5',feature:INK,crown:'spikes',eyes:'single',pupils:'cross-open',pattern:'plain'}),
  make({color:'#aac42c',feature:'#aac42c',crown:'swept-horns',ears:'bat-wings',eyes:'single',pupils:'crosses',pattern:'plain'}),
];
export const bodyPath='M30 287 C31 247 28 168 38 108 C45 65 75 39 128 39 C185 39 212 65 221 108 C231 169 231 250 232 287 Q234 311 211 314 C181 318 156 307 130 309 C101 309 77 319 50 314 Q28 312 30 287Z';
export const mouthPath='M49 192 Q49 181 61 180 C66 194 77 204 88 199 Q99 194 95 180 L165 180 C160 195 168 204 179 199 Q191 194 197 180 Q212 180 212 192 L212 281 Q212 292 201 292 L61 292 Q49 292 49 281Z';
export const crownPaths:Record<Monster['crown'],string>={
  dome:'M39 95 C40 22 220 22 221 95Z',
  knob:'M99 45 C101 10 138 8 151 43Z',
  'curls-only':'M70 58 C41 58 37 34 50 24 C65 11 89 24 82 40 C77 52 58 49 57 37 Q57 28 65 29 Q72 31 68 39 Q77 36 69 29 C56 20 47 34 55 43 Q62 50 73 46Z M190 58 C219 58 223 34 210 24 C195 11 171 24 178 40 C183 52 202 49 203 37 Q203 28 195 29 Q188 31 192 39 Q183 36 191 29 C204 20 213 34 205 43 Q198 50 187 46Z',
  'round-ears':'M69 62 C59 49 43 46 51 29 C59 10 82 23 92 44Z M158 44 C171 21 190 13 198 28 C206 44 187 53 181 61Z',
  curls:'M70 58 C41 58 37 34 50 24 C65 11 89 24 82 40 C77 52 58 49 57 37 Q57 28 65 29 Q72 31 68 39 Q77 36 69 29 C56 20 47 34 55 43 Q62 50 73 46Z M190 58 C219 58 223 34 210 24 C195 11 171 24 178 40 C183 52 202 49 203 37 Q203 28 195 29 Q188 31 192 39 Q183 36 191 29 C204 20 213 34 205 43 Q198 50 187 46Z M121 44 L114 25 Q106 22 110 17 Q115 13 119 20 L126 43Z M136 44 L144 25 Q152 22 148 17 Q143 13 139 20 L131 43Z',
  antennae:'M96 49 L92 27 Q69 27 76 17 Q87 6 100 13 Q108 18 105 44Z M155 44 Q152 18 160 13 Q173 6 184 17 Q191 27 168 27 L164 49Z',
  'soft-horns':'M65 62 Q55 48 34 48 C22 46 38 26 50 30 Q63 32 73 50Z M187 50 Q197 32 210 30 C222 26 238 46 226 48 Q205 48 195 62Z',
  tuft:'M62 66 Q54 46 62 28 C72 16 80 45 84 44 C96 13 113 3 130 28 C141 5 160 8 170 37 C180 14 196 23 190 48 L184 68Z',
  spikes:'M42 80 Q35 48 40 36 Q44 30 75 47 L105 43 Q119 8 126 7 Q133 6 149 43 L182 47 Q209 30 214 36 Q219 49 210 80Z',
  sprouts:'M85 55 L84 31 Q84 14 91 16 Q100 16 100 49 L116 44 L116 14 Q116 0 124 1 Q133 0 133 18 L135 43 L151 48 L152 30 Q153 14 161 16 Q170 18 168 35 L166 57Z',
  crown:'M57 79 L67 36 Q69 30 92 50 L97 21 L127 46 L155 22 Q164 17 162 48 L188 36 Q196 32 191 63 L209 58 L202 86Z',
  waves:'M52 79 C23 47 51 10 79 31 C93 3 120 7 131 31 C143 5 172 11 181 33 C207 12 236 49 209 79Z',
  'swept-horns':'M75 63 C83 40 69 20 51 14 C37 5 62 9 77 17 Q103 27 101 48Z M159 48 Q157 27 183 17 C198 9 223 5 209 14 C191 20 177 40 185 63Z',
};
export const earPaths:Record<Monster['ears'],string>={
  none:'',
  spines:'M44 80L29 84L38 91L22 97L34 104L19 110L32 117L18 123L34 130L25 136L43 142Z M216 80L231 84L222 91L238 97L226 104L241 110L228 117L242 123L226 130L235 136L217 142Z',
  'bat-wings':'M42 105 C32 79 16 72 2 79 Q17 85 10 95 Q28 92 25 107 Q39 104 42 122Z M218 105 C228 79 244 72 258 79 Q243 85 250 95 Q232 92 235 107 Q221 104 218 122Z',
  fins:'M42 105 C17 67 3 90 22 109 C1 100 1 124 26 124 C3 126 14 144 40 134Z M218 105 C243 67 257 90 238 109 C259 100 259 124 234 124 C257 126 246 144 220 134Z',
  round:'M45 81 C7 63 2 115 36 132Z M215 81 C253 63 258 115 224 132Z',
  droop:'M48 71 Q15 58 21 90 Q24 108 37 116Z M212 71 Q245 58 239 90 Q236 108 223 116Z',
  horns:'M70 57 L84 14 L100 48Z M160 48 L176 14 L190 57Z',
};
const path=(d:string,fill:string)=>`<path d="${d}" fill="${fill}"/>`;
export function escapeXml(value:string){return value.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));}
function eye(x:number,y:number,r:number,pupil:string){
  let inside=`<circle r="${r*.36}" fill="${INK}"/>`;
  if(pupil==='hearts')inside=`<circle r="${r*.63}" fill="${INK}"/><path d="M0 12 C-25 -5 -7 -21 0 -7 C8 -22 25 -5 0 12Z" fill="white" transform="scale(${r/32})"/>`;
  if(pupil==='crosses')inside=`<circle r="${r*.6}" fill="${INK}"/><path d="M-9 -9L9 9M9 -9L-9 9" fill="none" stroke="white" stroke-width="4" transform="scale(${r/27})"/>`;
  if(pupil==='cross-open')inside='<path d="M-13 -13L13 13M13 -13L-13 13" stroke="'+INK+'" stroke-width="6"/>';
  if(pupil==='wink')inside=`<path d="M-11 4Q0 -17 11 4" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`;
  return `<g transform="translate(${x} ${y})"><ellipse rx="${r}" ry="${r*1.08}" fill="white"/>${inside}</g>`;
}
export function monsterLayers(m:Monster,id='monster'){
  const key=id.replace(/[^a-zA-Z0-9_-]/g,'');
  const clip=`${key}-body`;
  let pattern='';
  if(m.pattern==='band')pattern=path('M20 79H240V155H20Z',m.accent);
  if(m.pattern==='chevron')pattern=path('M20 107L130 61L240 107V153L130 111L20 153Z',m.accent);
  if(m.pattern==='fringe')pattern=path('M20 26H240L222 93Q209 91 200 60Q193 112 180 84L165 57Q151 117 137 89L127 57Q109 113 98 85L88 58Q70 111 61 89L48 60L35 97Z',m.accent);
  if(m.pattern==='drops')pattern=Array.from({length:25},(_,i)=>{const x=54+(i%5)*37+(Math.floor(i/5)%2)*8,y=57+Math.floor(i/5)*27;return path(`M${x} ${y}q-7 13 0 13q6 0 0-13Z`,m.accent);}).join('');
  const eyeType=(side:number)=>m.pupils==='wink'?(side===0?'wink':'round'):m.pupils==='wink-right'?(side===1?'wink':'round'):m.pupils==='mixed-heart'?(side===1?'hearts':'round'):m.pupils==='mixed-cross'?(side===0?'crosses':'round'):m.pupils;
  const eyes=m.eyes==='single'?eye(130,117,35,eyeType(0)):m.eyes==='triple'?eye(130,88,25,eyeType(0))+eye(79,132,25,eyeType(0))+eye(181,132,25,eyeType(1)):eye(94,115,27,eyeType(0))+eye(166,115,27,eyeType(1));
  return `<defs><clipPath id="${clip}">${path(bodyPath,'white')}</clipPath></defs>`+
    `<g data-layer="crown">${path(crownPaths[m.crown],m.feature)}</g>`+
    `<g data-layer="ears">${path(earPaths[m.ears],m.earColor??(m.ears==='bat-wings'?INK:m.ears==='fins'?m.accent:m.feature))}</g>`+
    `<g data-layer="body">${path(bodyPath,m.color)}</g>`+
    `<g clip-path="url(#${clip})"><g data-layer="pattern">${pattern}</g>`+
    `<g data-layer="stripes">${path('M20 190H240V330H20Z',INK)}${[208,242,276].map(y=>`<path d="M20 ${y}H240V${y+16}H20Z" fill="${m.color}"/>`).join('')}</g></g>`+
    `<g data-layer="mouth">${path('M60 177H97V202H60Z M163 177H199V202H163Z',m.color)}${path(mouthPath,'white')}</g><g data-layer="eyes">${eyes}</g>`+
    `<g data-layer="cheeks" fill="white"><ellipse cx="55" cy="151" rx="10" ry="5"/><ellipse cx="205" cy="151" rx="10" ry="5"/></g>`;
}
export function monsterSvg(m:Monster,id='monster'){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 330" role="img" aria-label="Custom monster">${monsterLayers(m,id)}</svg>`;}
export function cardSvg(m:Monster,intention:string,archetype:string){
  const words=intention.trim().split(/\s+/).flatMap(word=>word.match(/.{1,39}/gu)??[]), lines:string[]=[];
  let line=''; for(const word of words){if((line+' '+word).trim().length>39){lines.push(line);line=word;}else line=(line+' '+word).trim();} if(line)lines.push(line);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><rect width="1080" height="1350" fill="#f4f0e8"/><text x="70" y="90" font-family="Arial,sans-serif" font-size="27" font-weight="bold">CAMBIO NATURAL / A SHARED REFLECTION</text><text x="70" y="190" font-family="Arial,sans-serif" font-size="79" font-weight="900">WE ARE ALL</text><text x="70" y="280" font-family="Arial,sans-serif" font-size="79" font-weight="900">MONSTERS.</text><g transform="translate(302 320) scale(1.8)">${monsterLayers(m,'card')}</g><text x="540" y="970" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="bold">${escapeXml(archetype)}</text><text x="70" y="1040" font-family="Arial,sans-serif" font-size="25">I WANT TO START BY…</text>${lines.slice(0,4).map((l,i)=>`<text x="70" y="${1090+i*42}" font-family="Arial,sans-serif" font-size="34">${escapeXml(l)}</text>`).join('')}<text x="70" y="1300" font-family="Arial,sans-serif" font-size="25" font-weight="bold">#WeAreAllMonsters</text><text x="1010" y="1300" text-anchor="end" font-family="Arial,sans-serif" font-size="25">cambionatur.al</text></svg>`;
}
