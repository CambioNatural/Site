interface FooterProps {
  bg?: string;
}

export default function Footer({ bg = "bg-white" }: FooterProps) {
  return (
    <footer
      className={`w-full h-[105px] ${bg} shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] flex items-center px-10`}
    >
      <p className="font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]">
        Cambio natural CC BY-NC-ND 4.0
      </p>
    </footer>
  );
}
