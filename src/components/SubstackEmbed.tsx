import { SUBSTACK_EMBED_URL } from "@/lib/links";

export default function SubstackEmbed({
  height = 130,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <iframe
      src={SUBSTACK_EMBED_URL}
      title="Subscribe to the Cambio Natural newsletter"
      className={`w-full border-0 bg-transparent ${className}`}
      style={{ height }}
      scrolling="no"
    />
  );
}
