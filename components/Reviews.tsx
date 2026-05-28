"use client";

import { motion } from "framer-motion";

const reviews = [
  { quote: "The combination of western creamy sauces with chewy udon is genius. We'll definitely be back.", author: "Roger Z.", meta: "Local Guide · 80 reviews" },
  { quote: "Prices are really affordable for the portion sizes. We are definitely coming back.", author: "Noor", meta: "First visit · Mississauga" },
  { quote: "Perfectly chewy noodles, rich broth, everything tasted fresh and thoughtfully prepared.", author: "Kumail K.", meta: "Local Guide · 31 reviews" },
  { quote: "Amazing food, amazing service, amazing decor. Always a treat to find Halal Japanese food.", author: "Nat", meta: "Local Guide · 55 reviews" },
  { quote: "One of my top five favourite restaurants ever. So grateful they offer halal.", author: "Almeera Z.", meta: "Local Guide · 44 reviews" },
  { quote: "The cheesecake was divine and Remi's service was outstanding. Exceeded expectations.", author: "Gaganpreet S.", meta: "Local Guide · 48 reviews" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="px-5 sm:px-6 py-20 sm:py-28 lg:py-40 border-t border-ink/15">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="label text-ink/50 mb-5">— Kind Words</p>
          <h2 className="serif text-4xl sm:text-5xl md:text-6xl">From the Counter</h2>
          <div className="mt-6 sm:mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="serif italic text-3xl text-accent">4.8</span>
            <span className="text-accent tracking-widest">★★★★★</span>
            <span className="label text-ink/50">Google · 1.2k reviews</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 sm:gap-y-14">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="text-center max-w-sm mx-auto"
            >
              <div className="serif text-6xl text-accent leading-none mb-4">&ldquo;</div>
              <blockquote className="serif italic text-lg sm:text-xl leading-relaxed text-ink/85">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6">
                <div className="serif text-lg">— {r.author}</div>
                <div className="label text-ink/45 mt-1">{r.meta}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
