export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-sand-200 bg-ivory-100 py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-charcoal-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
