import Logo from "@/components/logo";

const links = [
  ["Features", "#features"],
  ["How it works", "#how"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-[#0B0D10]"
        >
          Get started
        </a>
      </div>
    </header>
  );
}