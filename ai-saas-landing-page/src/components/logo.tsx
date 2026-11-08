import { NotebookPen } from "lucide-react";

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 font-semibold">
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-lg bg-accent text-[#0B0D10]"
      >
        <NotebookPen size={18} strokeWidth={2.25} />
      </span>
      <span>
        Noted <span className="font-normal text-muted">by Louisse</span>
      </span>
    </a>
  );
}