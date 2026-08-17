import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";

const NAV_LINKS = [
  "Home",
  "About",
  "Domestic Tours",
  "International Tours",
  "Packages",
  "Contact",
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={container}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-3 shadow-card backdrop-blur-xl">
        <motion.a href="#home" variants={item} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-nature-gradient text-white shadow-glow">
            <Compass size={18} strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight text-nature-forest">
            Claassical<span className="text-nature-azure">.</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link}
              variants={item}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-nature-forest/80 transition-colors hover:text-nature-azure"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <motion.a
          variants={item}
          href="#contact"
          className="hidden items-center gap-1.5 rounded-2xl bg-nature-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 lg:inline-flex"
        >
          Book Now
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </motion.a>

        <motion.button
          variants={item}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-nature-bg text-nature-forest lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur-xl lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-nature-forest/80 hover:bg-nature-bg hover:text-nature-azure"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-nature-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Book Now
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
