/** Preserve editor line breaks while keeping single-line content unchanged. */
export default function CmsText({text}:{text:string}) {
  if (!/[\r\n]/.test(text)) return text;
  return <span style={{whiteSpace:'pre-line'}}>{text}</span>;
}
