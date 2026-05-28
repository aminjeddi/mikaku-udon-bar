"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "12 — 3 · 4:30 — 10" },
  { day: "Wednesday", time: "12 — 3 · 4:30 — 10" },
  { day: "Thursday", time: "12 — 3 · 4:30 — 10" },
  { day: "Friday", time: "12 — 3 · 4:30 — 10:30" },
  { day: "Saturday", time: "12 — 3 · 4:30 — 10:30" },
  { day: "Sunday", time: "12 — 3 · 4:30 — 10" },
];

const locations = [
  {
    name: "Richmond Hill",
    address: ["360 Hwy 7, Unit 10", "Richmond Hill, ON L4B 1B1"],
    phone: "(905) 707 8787",
    phoneHref: "tel:+19057078787",
    ig: "@mikaku_udon_bar",
    igHref: "https://www.instagram.com/mikaku_udon_bar/",
    map: "https://www.google.com/maps/search/?api=1&query=360+Hwy+7+Unit+10+Richmond+Hill+ON+L4B+1B1",
  },
  {
    name: "Carlton — Toronto",
    address: ["229 Carlton Street", "Toronto, ON M5A 2L2"],
    phone: "(416) 323 0033",
    phoneHref: "tel:+14163230033",
    ig: "@mikaku_udon_bar_carlton",
    igHref: "https://www.instagram.com/mikaku_udon_bar_carlton/",
    map: "https://www.google.com/maps/search/?api=1&query=229+Carlton+Street+Toronto+ON+M5A+2L2",
  },
];

export default function Visit() {
  return (
    <section id="visit" className="px-6 py-28 lg:py-40 border-t border-ink/15">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="label text-ink/50 mb-5">— Visit</p>
          <h2 className="serif text-5xl md:text-7xl">A Bowl is Waiting</h2>
          <p className="serif italic text-ink/65 mt-6 text-lg max-w-xl mx-auto">
            Two rooms, the same noodles. Walk-ins welcome; reservations honored.
          </p>
        </motion.div>

        {/* Two locations */}
        <div className="mt-20 grid md:grid-cols-2 gap-14 md:gap-20">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="label text-accent mb-4">Location 0{i + 1}</p>
              <h3 className="serif text-4xl md:text-5xl">{loc.name}</h3>

              <div className="mt-6 space-y-1 serif text-xl text-ink/85">
                {loc.address.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>

              <div className="mt-6 flex flex-col items-center gap-2 serif text-lg">
                <a
                  href={loc.phoneHref}
                  className="text-ink/85 hover:text-accent transition-colors"
                >
                  {loc.phone}
                </a>
                <a
                  href={loc.igHref}
                  target="_blank"
                  rel="noreferrer"
                  className="italic text-ink/70 hover:text-accent transition-colors"
                >
                  {loc.ig}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={loc.map}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 serif hover:bg-accent transition-colors"
                >
                  Get directions
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="https://www.ubereats.com/ca/store/mikaku-udon-bar/zYO3gMWYUnOtK_hoZPBleQ"
                  target="_blank"
                  rel="noreferrer"
                  className="serif italic text-ink/80 hover:text-accent transition-colors underline underline-offset-4 decoration-ink/30"
                >
                  Order on Uber Eats
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-28 max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="label text-ink/50 mb-4">— Hours</p>
            <h3 className="serif text-3xl md:text-4xl italic">Open Six Days</h3>
            <p className="serif italic text-ink/55 mt-3">
              Lunch &amp; dinner service · Same hours at both locations
            </p>
          </div>

          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {hours.map((h) => (
              <div
                key={h.day}
                className={`flex items-baseline justify-between py-4 ${
                  h.time === "Closed" ? "text-ink/45" : ""
                }`}
              >
                <span className="serif text-xl">{h.day}</span>
                <span className="serif italic text-lg">{h.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
