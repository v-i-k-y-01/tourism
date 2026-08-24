import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeView: "home" | "mice" | "college" | "school";
  setActiveView: (view: "home" | "mice" | "college" | "school") => void;
}

const NAV_LINKS = [
  { label: "Home", view: "home" as const, href: "#home" },
  { label: "About", view: "home" as const, href: "#about" },
  { label: "International", view: "home" as const, href: "#international-tours" },
  { label: "MICE Tourism", view: "mice" as const, href: null },
  { label: "College Tours", view: "college" as const, href: null },
  { label: "School Tours", view: "school" as const, href: null },
  { label: "Contact", view: "home" as const, href: "#contact" },
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

export default function Header({ activeView, setActiveView }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (link: typeof NAV_LINKS[number]) => {
    setOpen(false);
    
    if (link.view !== activeView) {
      setActiveView(link.view);
    }

    if (link.href) {
      // If we are navigating to home from another page, wait a tiny bit for the page to mount, then scroll
      if (activeView !== "home" && link.view === "home") {
        setTimeout(() => {
          const el = document.querySelector(link.href!);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={container}
      className="fixed inset-x-0 top-0 z-[49] border-t-2 border-nature-cobalt bg-white shadow-[0_1px_0_rgba(21,21,21,0.06)]"
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-6 px-4 sm:px-8 lg:px-10">
        <motion.button
          variants={item}
          onClick={() => {
            setActiveView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex shrink-0 items-center gap-3 text-left"
        >
          <img
            src="/ppf%2001.png"
            alt="Classic 360 Holidays logo"
            className="h-11 w-11 object-cover"
          />
          <span className="whitespace-nowrap font-display text-[25px] font-bold leading-none tracking-tight text-nature-forest">
            Classic 360 <span className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-nature-cobalt">Holidays</span>
          </span>
        </motion.button>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.label}
              variants={item}
              onClick={() => handleNavClick(link)}
              className={`whitespace-nowrap text-[13px] font-bold transition-colors hover:text-nature-cobalt ${
                (activeView === link.view && (!link.href || (link.href === "#home" && window.scrollY < 300)))
                  ? "text-nature-cobalt font-extrabold"
                  : "text-nature-forest"
              }`}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        <motion.a
          variants={item}
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick({ label: "Contact", view: "home", href: "#contact" });
          }}
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
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`rounded-lg px-3 py-3 text-left text-sm font-bold transition-colors hover:bg-[#f5f5f5] hover:text-nature-cobalt ${
                activeView === link.view ? "bg-[#f5f5f5] text-nature-cobalt font-extrabold" : "text-nature-forest/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ label: "Contact", view: "home", href: "#contact" });
            }}
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
