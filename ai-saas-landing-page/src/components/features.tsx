import { FileText, Globe, ListChecks, Lock, Plug, Search } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

const tile = "h-full rounded-[28px] border border-line bg-card p-6 md:p-8";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 grid size-11 place-items-center rounded-xl bg-accent/15 text-accent">
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm">{children}</span>
  );
}

export default function Features() {
  return (
    <section id="features" className="pt-24">
      <SectionHeading
        eyebrow="Features"
        title="Everything a meeting leaves behind, handled."
        desc="From the first word to the follow-up email, Noted does the boring part."
      />

      <div className="grid gap-3.5 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <div className={tile}>
            <IconBadge>
              <FileText size={22} aria-hidden />
            </IconBadge>
            <h3 className="text-2xl font-semibold tracking-tight">Summaries in seconds</h3>
            <p className="mt-2 max-w-[46ch] text-muted">
              A clean recap lands in your inbox before you’ve closed the call.
            </p>
            <div className="mt-6 rounded-2xl bg-bg p-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Recap</p>
              <ul className="space-y-2 text-sm">
                <li>• Launch confirmed for the 14th</li>
                <li>• Onboarding flow needs one more design day</li>
                <li>• Support team to be briefed before release</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.08}>
          <div className={tile}>
            <IconBadge>
              <Search size={22} aria-hidden />
            </IconBadge>
            <h3 className="text-xl font-semibold tracking-tight">Search every meeting</h3>
            <p className="mt-2 text-muted">Ask a question and jump to the exact moment.</p>
            <div className="mt-6 flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2.5 text-sm text-muted">
              <Search size={14} aria-hidden /> What did we decide on pricing?
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2">
          <div className={tile}>
            <IconBadge>
              <ListChecks size={22} aria-hidden />
            </IconBadge>
            <h3 className="text-xl font-semibold tracking-tight">Action items</h3>
            <p className="mt-2 text-muted">
              Tasks are pulled out, assigned and sent to the right people.
            </p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.08}>
          <div className={tile}>
            <IconBadge>
              <Globe size={22} aria-hidden />
            </IconBadge>
            <h3 className="text-xl font-semibold tracking-tight">30+ languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>English</Chip>
              <Chip>Filipino</Chip>
              <Chip>Español</Chip>
              <Chip>日本語</Chip>
              <Chip>한국어</Chip>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.16}>
          <div className={tile}>
            <IconBadge>
              <Plug size={22} aria-hidden />
            </IconBadge>
            <h3 className="text-xl font-semibold tracking-tight">Works with your tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>Slack</Chip>
              <Chip>Notion</Chip>
              <Chip>Google Calendar</Chip>
              <Chip>Zoom</Chip>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-6">
          <div className={`${tile} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
            <div className="flex items-start gap-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <Lock size={22} aria-hidden />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Private by default</h3>
                <p className="mt-2 max-w-[56ch] text-muted">
                  Your recordings stay yours. Delete them any time, or let them expire on their own.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip>30-day auto-delete</Chip>
              <Chip>No model training</Chip>
              <Chip>You own your data</Chip>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}