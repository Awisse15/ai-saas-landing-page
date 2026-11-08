import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function Cta() {
  return (
    <section className="py-24">
      <Reveal>
        <div className="rounded-[40px] bg-accent px-8 py-14 text-[#0B0D10] md:px-14 md:py-20">
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-tighter">
            Your next meeting, already written up.
          </h2>
          <p className="mt-4 max-w-[40ch] text-lg text-[#0B0D10]/70">
            Start free. No credit card, no setup call, no more typing notes.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B0D10] px-6 py-3.5 font-bold text-accent"
          >
            Get started free <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  );
}