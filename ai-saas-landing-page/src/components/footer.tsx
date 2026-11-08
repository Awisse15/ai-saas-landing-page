import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-10 text-sm text-muted md:px-10">
        <Logo />
        <p>
          Concept project. Noted by Louisse is a fictional product made for a portfolio.
        </p>
      </div>
    </footer>
  );
}