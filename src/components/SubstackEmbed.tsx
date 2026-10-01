import { SUBSTACK_EMBED_URL } from "@/lib/links";

export default function SubstackEmbed({
  height = 130,
  url = SUBSTACK_EMBED_URL,
  className = "",
}: {
  height?: number;
  url?: string;
  className?: string;
}) {
  return (
    <iframe
      src={url}
      title="Subscribe to the Cambio Natural newsletter"
      className={`w-full border-0 bg-transparent ${className}`}
      style={{ height }}
      scrolling="no"
    />
  );
}
