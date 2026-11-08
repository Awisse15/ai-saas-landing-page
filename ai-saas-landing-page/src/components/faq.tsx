"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const faqs = [
  {
    q: "Does Noted record people without telling them?",
    a: "No. Noted joins as a visible guest and announces that the meeting is being recorded, so everyone knows.",
  },
  {
    q: "Which meeting apps does it work with?",
    a: "Zoom, Google Meet and Microsoft Teams. It also works with in-person meetings through the mobile app.",
  },
  {
    q: "Is my data used to train AI models?",
    a: "Never. Your recordings and transcripts are only used to make your notes, and you can delete them any time.",
  },
  {
    q: "Can I edit the summary before sharing it?",
    a: "Yes. Every summary and action item is editable, and nothing is sent until you approve it, or you can turn on auto-send.",
  },
  {
    q: "What happens when I hit the free plan limit?",
    a: "Your existing notes stay available. New meetings simply won’t be recorded until next month or until you upgrade.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-24">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="max-w-3xl">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold"
              >
                {f.q}
                <Plus
                  size={20}
                  aria-hidden
                  className={`shrink-0 text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}