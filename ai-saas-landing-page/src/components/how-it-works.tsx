import { CalendarCheck, Mic, Send } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

const steps = [
  {
    icon: CalendarCheck,
    title: "Connect your calendar",
    desc: "Link Google or Outlook once. Noted sees which meetings you want covered.",
  },
  {
    icon: Mic,
    title: "Let Noted join",
    desc: "It joins as a guest, announces itself and listens. You just talk.",
  },
  {
    icon: Send,
    title: "Share the recap",
    desc: "Summary and action items go out to your team the moment the call ends.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="pt-24">
      <SectionHeading eyebrow="How it works" title="Three steps. Then you forget about it." />
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="border-t border-line pt-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <Icon size={22} className="text-muted" aria-hidden />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 max-w-[36ch] text-muted">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}