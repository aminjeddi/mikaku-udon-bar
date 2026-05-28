"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="px-5 sm:px-6 pt-4 pb-20 lg:pb-32">
      <div className="max-w-[1280px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="huge text-center text-ink tracking-tighter"
          style={{ fontSize: "clamp(3.75rem, 19vw, 19rem)" }}
        >
          MIKAKU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="serif text-center text-xl sm:text-2xl md:text-3xl leading-snug max-w-3xl mx-auto mt-5 sm:mt-6 text-ink/85 px-2"
        >
          Hand-pulled udon and quiet comfort food.
          <br />
          Two rooms — Richmond Hill &amp; Carlton, Toronto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 label text-ink/55 text-center"
        >
          <span>Est. 2022</span>
          <span className="text-accent">✦</span>
          <span>Toronto</span>
          <span className="text-accent">✦</span>
          <span>Halal Chicken</span>
          <span className="text-accent">✦</span>
          <span>★ 4.8 / 1.2k</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
        >
          <a
            href="#visit"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-8 sm:px-9 py-4 sm:py-5 serif text-base sm:text-lg hover:bg-accent transition-colors"
          >
            Reserve a Table
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://www.ubereats.com/ca/store/mikaku-udon-bar/zYO3gMWYUnOtK_hoZPBleQ"
            target="_blank"
            rel="noreferrer"
            className="serif italic text-base sm:text-lg text-ink/80 hover:text-accent transition-colors underline underline-offset-4 decoration-ink/30"
          >
            Order on Uber Eats
          </a>
        </motion.div>
      </div>
    </section>
  );
}
