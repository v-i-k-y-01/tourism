import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CalendarDays, Users, Search } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import RevealText from "./RevealText";


const DESTINATIONS = ["Wayanad", "Munnar", "Kochi", "Vagamon", "Ooty", "Goa", "Bali", "Maldives"];

export default function Hero() {
  const [destination, setDestination] = useState("");

  return (
    <section id="home" className="bg-white px-5 pb-14 pt-32 sm:px-8 sm:pt-40 lg:pb-20">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-center py-8 text-left lg:px-8">

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#f4f4f4] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-nature-cobalt"
        >
          <MapPin size={14} />
          Your Journey Starts Here
        </motion.span>

        <RevealText
          as="h1"
          text="Your next great escape starts here."
          className="font-display text-5xl font-semibold leading-[0.94] tracking-tight text-nature-forest sm:text-7xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-nature-slate sm:text-lg"
        >
          Thoughtfully planned domestic and international holidays from Salem—designed around the moments you want to remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-0 rounded-[28px] bg-[#f4f4f4] p-2 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center"
        >
          <label className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-left sm:border-r sm:border-nature-azure/10">
            <MapPin size={18} className="shrink-0 text-nature-cobalt" />
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
            <CalendarDays size={18} className="shrink-0 text-nature-cobalt" />
            <input
              type="text"
              placeholder="Travel dates"
              onFocus={(e) => (e.target.type = "date")}
              className="w-full bg-transparent text-sm font-medium text-nature-forest placeholder:text-nature-forest/40 focus:outline-none"
            />
          </label>

          <label className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-left">
            <Users size={18} className="shrink-0 text-nature-cobalt" />
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
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-nature-forest px-7 py-4 text-sm font-bold text-white shadow-card"
        >
          Browse All Packages
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.a>
        </div>
        <div className="min-h-[460px] overflow-hidden rounded-[32px] lg:min-h-[620px]">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
