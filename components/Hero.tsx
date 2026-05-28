"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-6 pb-24 lg:pb-32">
      <div className="max-w-[1280px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="huge text-center text-ink text-[28vw] md:text-[22vw] lg:text-[19rem] tracking-tighter"
        >
          MIKAKU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="serif text-center text-2xl md:text-3xl leading-snug max-w-3xl mx-auto mt-6 text-ink/85"
        >
          Hand-pulled udon and quiet comfort food.
          <br />
          Two rooms — Richmond Hill &amp; Carlton, Toronto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 label text-ink/55"
        >
          <span>Est. 2022</span>
          <span className="text-accent">✦</span>
          <span>Toronto</span>
          <span className="text-accent">✦</span>
          <span>Halal Chicken Available</span>
          <span className="text-accent">✦</span>
          <span>★ 4.8 / 1.2k Reviews</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#visit"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-9 py-5 serif text-lg hover:bg-accent transition-colors"
          >
            Reserve a Table
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://www.ubereats.com/ca/store/mikaku-udon-bar/zYO3gMWYUnOtK_hoZPBleQ"
            target="_blank"
            rel="noreferrer"
            className="serif italic text-lg text-ink/80 hover:text-accent transition-colors underline underline-offset-4 decoration-ink/30"
          >
            Order on Uber Eats
          </a>
        </motion.div>
      </div>
    </section>
  );
}
