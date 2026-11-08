export default function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-lg text-muted">{desc}</p>}
    </div>
  );
}