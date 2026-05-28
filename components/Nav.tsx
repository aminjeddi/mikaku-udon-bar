"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pt-10 pb-4"
    >
      <nav className="hidden md:flex items-center justify-center gap-14 serif text-2xl">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-ink hover:text-accent transition-colors relative group"
          >
            {l.label}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="md:hidden flex items-center justify-between px-6">
        <span className="serif text-2xl">Mikaku</span>
        <button
          aria-label="Menu"
          className="flex flex-col gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-0.5 bg-ink" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-6 py-6 flex flex-col items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="serif text-3xl"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
