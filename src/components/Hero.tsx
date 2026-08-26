import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CalendarDays, Users, Search } from "lucide-react";
import RevealText from "./RevealText";

const DESTINATIONS = ["Wayanad", "Munnar", "Kochi", "Vagamon", "Ooty", "Goa", "Bali", "Maldives"];

// Unsplash images for the scrolling background rows
const ROW_1 = [
  "/images/unsplash_1537996194471-e657df975ab4.jpg", // Bali
  "/images/unsplash_1525625293386-3f8f99389edd.jpg", // Singapore
  "/images/unsplash_1512453979798-5ea266f8880c.jpg", // Dubai
  "/images/unsplash_1514282401047-d79a71a590e8.jpg", // Maldives
  "/images/unsplash_1502602898657-3e91760cbb34.jpg", // Paris
];

const ROW_2 = [
  "/images/unsplash_1627060938622-7f27ac14878a.jpg", // Wayanad
  "/images/unsplash_1589308078059-be1415eab4c3.jpg", // Kochi
  "/images/unsplash_1548013146-72479768bada.jpg", // Munnar
  "/images/unsplash_1507525428034-b723cf961d3e.jpg", // Ooty
  "/images/unsplash_1473448912268-2022ce9509d8.jpg", // Wayanad forest
];

const ROW_3 = [
  "/images/unsplash_1533105079780-92b9be482077.jpg", // Santorini
  "/images/unsplash_1506973035872-a4ec16b8e8d9.jpg", // Sydney
  "/images/unsplash_1476514525535-07fb3b4ae5f1.jpg", // Mountain
  "/images/unsplash_1518005020951-eccb494ad742.jpg", // Tokyo
  "/images/unsplash_1507608869274-d3177c8bb4c7.jpg", // Hot air balloon
];

export default function Hero() {
  const [destination, setDestination] = useState("");

  return (
    <section id="home" className="relative bg-[#08080a] min-h-[92vh] flex items-center justify-start overflow-hidden px-6 py-24 sm:px-12 sm:py-32">
      {/* Inline styles for infinite loop scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollRowLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRowRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}} />

      {/* 1. Isometric Scrolling Background Image Grid (Unfold Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.16] sm:opacity-[0.22] flex flex-col gap-6 rotate-[-12deg] scale-[1.3] origin-center translate-y-[-5%] translate-x-[5%] select-none">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex gap-6 w-[200%] animate-[scrollRowLeft_45s_linear_infinite]">
          {[...ROW_1, ...ROW_1].map((img, idx) => (
            <div key={`r1-${idx}`} className="h-44 w-72 rounded-[24px] overflow-hidden border border-white/5 bg-[#16161a] shadow-2xl shrink-0">
              <img src={img} alt="Travel grid" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex gap-6 w-[200%] animate-[scrollRowRight_55s_linear_infinite]">
          {[...ROW_2, ...ROW_2].map((img, idx) => (
            <div key={`r2-${idx}`} className="h-44 w-72 rounded-[24px] overflow-hidden border border-white/5 bg-[#16161a] shadow-2xl shrink-0">
              <img src={img} alt="Travel grid" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Row 3: Scrolling Left */}
        <div className="flex gap-6 w-[200%] animate-[scrollRowLeft_50s_linear_infinite]">
          {[...ROW_3, ...ROW_3].map((img, idx) => (
            <div key={`r3-${idx}`} className="h-44 w-72 rounded-[24px] overflow-hidden border border-white/5 bg-[#16161a] shadow-2xl shrink-0">
              <img src={img} alt="Travel grid" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

      </div>

      {/* 2. Gradient Overlay to maximize typography legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#08080a] via-[#08080a]/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#08080a] via-transparent to-transparent pointer-events-none" />

      {/* 3. Foreground Contents */}
      <div className="mx-auto max-w-7xl w-full z-20 flex flex-col justify-center items-start text-left mt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 select-none max-w-3xl"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-nature-azure">
            <MapPin size={13} className="text-nature-cobalt" />
            Made For Extraordinary
          </span>

          <RevealText
            as="h1"
            text="Travel experiences you can trust."
            className="font-display text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-8xl"
          />

          <p className="mt-2 text-base leading-relaxed text-nature-slate sm:text-lg max-w-xl">
            Thoughtfully planned domestic and international holidays—designed around the moments you want to remember.
          </p>
        </motion.div>

        {/* Simplified Premium Glassmorphic Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-2 rounded-[28px] bg-white/5 border border-white/10 p-2.5 backdrop-blur-xl sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center shadow-2xl"
        >
          <label className="flex items-center gap-2 px-3 py-2 text-left sm:border-r sm:border-white/15">
            <MapPin size={18} className="shrink-0 text-nature-cobalt" />
            <input
              list="destinations-hero"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where to? Try Bali, Wayanad..."
              className="w-full bg-transparent text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none"
            />
            <datalist id="destinations-hero">
              {DESTINATIONS.map((d) => (
                <option key={d} value={d} />
              ))}
            </datalist>
          </label>

          <label className="flex items-center gap-2 px-3 py-2 text-left sm:border-r sm:border-white/15">
            <CalendarDays size={18} className="shrink-0 text-nature-cobalt" />
            <input
              type="text"
              placeholder="Travel dates"
              onFocus={(e) => (e.target.type = "date")}
              className="w-full bg-transparent text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <label className="flex items-center gap-2 px-3 py-2 text-left">
            <Users size={18} className="shrink-0 text-nature-cobalt" />
            <input
              type="number"
              min={1}
              defaultValue={2}
              placeholder="Guests"
              className="w-full bg-transparent text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-nature-gradient px-6 py-3.5 text-sm font-bold text-white shadow-glow"
          >
            <Search size={16} strokeWidth={2.5} />
            Search
          </motion.button>
        </motion.div>

        {/* Scroll cues or CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-nature-slate"
        >
          <a
            href="#packages"
            className="flex items-center gap-2 text-white hover:text-[#f7d58b] transition-colors"
          >
            Browse curated packages <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
