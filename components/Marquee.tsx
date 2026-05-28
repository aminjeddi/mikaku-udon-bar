"use client";

const items = [
  "Hand-pulled noodles",
  "Halal chicken",
  "Slow-simmered broth",
  "Richmond Hill",
  "Carlton — Toronto",
  "Open late",
  "Dine-in & takeout",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-ink/15 overflow-hidden">
      <div className="flex marquee-track py-5 whitespace-nowrap">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-10 px-8 font-sans font-bold uppercase tracking-wider text-base text-ink">
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
