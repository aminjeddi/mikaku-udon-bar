"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="px-5 sm:px-6 py-20 sm:py-28 lg:py-40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="serif text-4xl sm:text-5xl md:text-6xl text-ink"
        >
          A New Space to Slow Down
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 sm:mt-8 text-base md:text-lg leading-loose text-ink/75"
        >
          Mikaku creates a quiet, evocative dining experience built around a
          single bowl. We hand-pull our noodles, simmer broths overnight, and
          serve them in two small rooms — one in Richmond Hill, one on Carlton
          in downtown Toronto. Halal chicken available throughout.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-8 serif text-ink/70"
        >
          {[
            { k: "2022", v: "Opened" },
            { k: "12", v: "Counter Seats" },
            { k: "01", v: "Curry Recipe" },
            { k: "★ 4.8", v: "1.2k Reviews" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <div className="serif italic text-4xl sm:text-5xl text-ink">{s.k}</div>
              <div className="label text-ink/50 mt-2">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
