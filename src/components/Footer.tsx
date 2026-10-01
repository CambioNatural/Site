import {getPublishedDocument} from '@/lib/cms/data';
interface FooterProps {
  bg?: string;
  text?:string;
}

export default async function Footer({ bg = "bg-white",text }: FooterProps) {
  const footer=text??(await getPublishedDocument()).home.footer;
  return (
    <footer
      className={`w-full h-[105px] ${bg} shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] flex items-center px-10`}
    >
      <p className="font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]">
        {footer}
      </p>
    </footer>
  );
}
