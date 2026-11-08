"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";

const transcript = [
  { who: "Ana", time: "0:12", text: "Let’s lock the launch date for the 14th." },
  { who: "Marco", time: "0:20", text: "Design needs one more day for the onboarding flow." },
  { who: "Ana", time: "0:31", text: "Fine. Marco, send the final files by Thursday." },
];

const actions = [
  "Marco sends final onboarding files · Thu",
  "Ana confirms launch with support",
];

export default function Hero() {
  return (
    <section className="pt-16 md:pt-24">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          New: action items sent straight to Slack
        </span>
        <h1 className="mt-6 text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tighter">
          Never write meeting notes <span className="text-accent">again.</span>
        </h1>
        <p className="mt-6 max-w-[48ch] text-xl text-muted">
          Noted joins your calls, writes the summary and pulls out the action items, so everyone
          leaves the meeting knowing what happens next.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-[#0B0D10]"
          >
            Get started free <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-bold hover:bg-card"
          >
            <Play size={16} aria-hidden /> See how it works
          </a>
        </div>
      </div>

      {/* Product mock-up */}
      <div className="mt-14 rounded-[28px] border border-line bg-card p-3 md:p-4">
        <div className="flex items-center justify-between px-3 pb-3 pt-1">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-3 rounded-full bg-line" />
            <span className="size-3 rounded-full bg-line" />
            <span className="size-3 rounded-full bg-line" />
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span className="size-2 rounded-full bg-accent motion-safe:animate-pulse" />
            Product sync · Recording
          </span>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl bg-bg p-5 md:p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Live transcript
            </p>
            <ul className="space-y-4">
              {transcript.map((line, i) => (
                <motion.li
                  key={line.time}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.6 }}
                  className="flex gap-4"
                >
                  <span className="w-20 shrink-0 font-mono text-xs text-muted">
                    {line.who} · {line.time}
                  </span>
                  <span>{line.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              AI summary
            </p>
            <p className="font-semibold">Decision: launch moves forward on the 14th.</p>
            <p className="mb-2 mt-5 text-sm text-muted">Action items</p>
            <ul className="space-y-2.5">
              {actions.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-accent text-[#0B0D10]">
                    <Check size={14} strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}