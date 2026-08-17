import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CalendarDays, Users, Search } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import RevealText from "./RevealText";


const DESTINATIONS = ["Wayanad", "Munnar", "Kochi", "Vagamon", "Ooty", "Goa", "Bali", "Maldives"];

export default function Hero() {
  const [destination, setDestination] = useState("");

  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-32 sm:pt-40">
      <HeroCarousel />

      <div className="perspective-container relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-xl"
        >
          <MapPin size={14} />
          Your Journey Starts Here
        </motion.span>

        <RevealText
          as="h1"
          text="Explore. Discover. Wander. Belong."
          className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base text-white/85 drop-shadow sm:text-lg"
        >
          Handpicked domestic and international getaways, planned end-to-end by Claassical so every trip feels effortless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-card backdrop-blur-xl sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center"
        >
          <label className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-left sm:border-r sm:border-nature-azure/10">
            <MapPin size={18} className="shrink-0 text-nature-azure" />
            <input
              list="destinations"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where to? Try Wayanad, Munnar..."
              className="w-full bg-transparent text-sm font-medium text-nature-forest placeholder:text-nature-forest/40 focus:outline-none"
            />
            <datalist id="destinations">
              {DESTINATIONS.map((d) => (
                <option key={d} value={d} />
              ))}
            </datalist>
          </label>

          <label className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-left sm:border-r sm:border-nature-azure/10">
            <CalendarDays size={18} className="shrink-0 text-nature-azure" />
            <input
              type="text"
              placeholder="Travel dates"
              onFocus={(e) => (e.target.type = "date")}
              className="w-full bg-transparent text-sm font-medium text-nature-forest placeholder:text-nature-forest/40 focus:outline-none"
            />
          </label>

          <label className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-left">
            <Users size={18} className="shrink-0 text-nature-azure" />
            <input
              type="number"
              min={1}
              defaultValue={2}
              placeholder="Guests"
              className="w-full bg-transparent text-sm font-medium text-nature-forest placeholder:text-nature-forest/40 focus:outline-none"
            />
          </label>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-nature-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow"
          >
            <Search size={16} strokeWidth={2.5} />
            Search
          </motion.button>
        </motion.div>

        <motion.a
          href="#packages"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-nature-forest shadow-card"
        >
          Browse All Packages
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.a>
      </div>
    </section>
  );
}
