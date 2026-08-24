import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white px-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-3 py-4 sm:px-8 lg:px-10">
        <motion.a href="#home" variants={item} className="flex items-center gap-3">
          <img
            src="/ppf%2001.png"
            alt="Classic 360 Holidays logo"
            className="h-12 w-12 object-cover"
          />
          <span className="font-display text-2xl font-bold leading-none tracking-tight text-nature-forest">
            Classic 360 <span className="text-sm font-semibold uppercase tracking-[0.16em] text-nature-cobalt">Holidays</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link}
              variants={item}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-bold text-nature-forest transition-colors hover:text-nature-cobalt"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <motion.a
          variants={item}
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-nature-forest px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Book Now
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </motion.a>

        <motion.button
          variants={item}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-nature-forest text-white lg:hidden"
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
          className="mx-auto flex max-w-none flex-col gap-1 border-b border-nature-forest/15 bg-[#fffdf8] p-4 shadow-card lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-nature-forest/80 hover:bg-nature-bg hover:text-nature-cobalt"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 bg-nature-forest px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
          >
            Book Now
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
