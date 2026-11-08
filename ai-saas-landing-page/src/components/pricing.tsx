"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/section-heading";

type Billing = "monthly" | "yearly";

const tiers = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    desc: "For trying it out.",
    features: ["5 meetings per month", "Basic summaries", "7-day history"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    monthly: 12,
    yearly: 10,
    desc: "For people who live in meetings.",
    features: [
      "Unlimited meetings",
      "Action items and follow-ups",
      "Search across all meetings",
      "Slack and Notion",
    ],
    cta: "Start Pro trial",
    popular: true,
  },
  {
    name: "Team",
    monthly: 24,
    yearly: 20,
    desc: "For teams that share notes.",
    features: ["Everything in Pro", "Shared workspace", "Admin controls", "Priority support"],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="pt-24">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing that scales with you."
        desc="Start free. Upgrade when your calendar fills up."
      />

      <div
        role="group"
        aria-label="Billing period"
        className="mb-8 inline-flex items-center rounded-full border border-line bg-card p-1"
      >
        {(["monthly", "yearly"] as Billing[]).map((b) => (
          <button
            key={b}
            aria-pressed={billing === b}
            onClick={() => setBilling(b)}
            className={`relative rounded-full px-5 py-2 text-sm font-bold capitalize transition-colors ${
              billing === b ? "text-[#0B0D10]" : "text-muted hover:text-ink"
            }`}
          >
            {billing === b && (
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{b}</span>
          </button>
        ))}
        <span className="px-3 font-mono text-xs text-accent">2 months free</span>
      </div>

      <div className="grid gap-3.5 md:grid-cols-3">
        {tiers.map((t) => {
          const price = billing === "monthly" ? t.monthly : t.yearly;
          return (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-[28px] border p-6 md:p-8 ${
                t.popular ? "border-accent bg-accent/5" : "border-line bg-card"
              }`}
            >
              {t.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-[#0B0D10]">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-muted">{t.desc}</p>
              <div className="mb-6 mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-semibold tracking-tighter">${price}</span>
                <span className="text-muted">
                  {t.monthly === 0 ? "forever" : "/ seat / month"}
                </span>
              </div>
              {t.monthly > 0 && billing === "yearly" && (
                <p className="-mt-4 mb-6 font-mono text-xs text-muted">Billed yearly</p>
              )}
              <ul className="mb-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#faq"
                className={`mt-auto rounded-full px-6 py-3.5 text-center font-bold ${
                  t.popular
                    ? "bg-accent text-[#0B0D10]"
                    : "border border-line hover:bg-bg"
                }`}
              >
                {t.cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}