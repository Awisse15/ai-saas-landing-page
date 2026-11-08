const names = ["Harbor&Co", "Fernlight", "Quill Labs", "Tessera", "Mintwave"];

export default function LogoStrip() {
  return (
    <section className="pt-20">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
        Trusted by teams at (sample companies)
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {names.map((n) => (
          <li key={n} className="text-xl font-semibold tracking-tight text-muted/70">
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}