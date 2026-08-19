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
      className="fixed inset-x-0 top-0 z-50 border-t-2 border-nature-cobalt bg-white shadow-[0_1px_0_rgba(21,21,21,0.06)]"
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-6 px-4 sm:px-8 lg:px-10">
        <motion.a href="#home" variants={item} className="flex shrink-0 items-center gap-3">
          <img
            src="/ppf%2001.png"
            alt="Classic 360 Holidays logo"
            className="h-11 w-11 object-cover"
          />
          <span className="whitespace-nowrap font-display text-[25px] font-bold leading-none tracking-tight text-nature-forest">
            Classic 360 <span className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-nature-cobalt">Holidays</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link}
              variants={item}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="whitespace-nowrap text-[13px] font-bold text-nature-forest transition-colors hover:text-nature-cobalt"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <motion.a
          variants={item}
          href="#contact"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-nature-cobalt px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Book Now
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </motion.a>

        <motion.button
          variants={item}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-nature-cobalt text-white lg:hidden"
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
          className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-black/5 bg-white p-4 shadow-card lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-bold text-nature-forest/80 hover:bg-[#f5f5f5] hover:text-nature-cobalt"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-nature-cobalt px-5 py-3 text-sm font-bold text-white"
          >
            Book Now
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
