import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";

interface FlightWindowSectionProps {
  onSelectPackage: (pkg: Package) => void;
}

const DESTINATIONS = [
  { id: "bali-bliss", name: "Bali", code: "DPS", image: "/images/unsplash_1537996194471-e657df975ab4.jpg", tagline: "Tropical beaches & volcanic trails" },
  { id: "singapore-spectacular", name: "Singapore", code: "SIN", image: "/images/unsplash_1525625293386-3f8f99389edd.jpg", tagline: "Garden city & Sentosa adventure" },
  { id: "dubai-extravaganza", name: "Dubai", code: "DXB", image: "/images/unsplash_1512453979798-5ea266f8880c.jpg", tagline: "Futuristic skyscrapers & desert safaris" },
  { id: "maldives-luxury", name: "Maldives", code: "MLE", image: "/images/unsplash_1514282401047-d79a71a590e8.jpg", tagline: "Private overwater villa escapes" },
  { id: "paris-swiss-alps", name: "Paris", code: "CDG", image: "/images/unsplash_1502602898657-3e91760cbb34.jpg", tagline: "Eiffel tower & Alpine peak trails" },
];

export default function FlightWindowSection({ onSelectPackage }: FlightWindowSectionProps) {
  const [index, setIndex] = useState(0);
  const [shadeOpen, setShadeOpen] = useState(true);
  const activeDest = DESTINATIONS[index];

  // Auto-play interval for landscape transition (switches every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleExplorePackage = () => {
    const pkg = TOUR_PACKAGES.find((p) => p.id === activeDest.id);
    if (pkg) {
      onSelectPackage(pkg);
    }
  };

  return (
    <section className="relative bg-[#121416] px-6 py-20 sm:px-8 sm:py-28 min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background cabin rib textures */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Dynamic Keyframes for seamless cloud scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollClouds {
          0% { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
      `}} />

      <div className="mx-auto grid max-w-7xl w-full gap-10 items-center lg:grid-cols-[1.15fr_0.85fr] z-10">
        
        {/* Left Column: Glassmorphic Console */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 text-white shadow-2xl flex flex-col gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-nature-azure">
              <Plane size={11} className="rotate-90 text-nature-cobalt" />
              In-Flight Cockpit Planner
            </span>
            <RevealText
              as="h2"
              text="Map your next travel logs"
              className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-[#f7d58b] sm:text-6xl"
            />
            <p className="mt-4 text-sm leading-relaxed text-nature-azure/70 sm:text-base">
              Step into the window seat experience. Simulate the autopiloted flight parameters and check details for each featured destination before booking.
            </p>
          </div>

          {/* Flight status telemetry dashboard */}
          <div className="grid w-full grid-cols-2 gap-4 rounded-2xl bg-white/5 p-4 border border-white/5 sm:grid-cols-4">
            <div className="flex flex-col gap-1 px-4 py-3 bg-black/20 rounded-xl border border-white/5 text-left">
              <span className="text-[10px] text-nature-slate uppercase tracking-wider font-semibold font-mono">Altitude</span>
              <span className="text-xl font-bold text-[#f7d58b] font-mono">36,000 FT</span>
              <span className="text-[9px] text-emerald-500 font-mono">CRUISE LEVEL</span>
            </div>
            <div className="flex flex-col gap-1 px-4 py-3 bg-black/20 rounded-xl border border-white/5 text-left">
              <span className="text-[10px] text-nature-slate uppercase tracking-wider font-semibold font-mono">Ground Speed</span>
              <span className="text-xl font-bold text-[#f7d58b] font-mono">870 KM/H</span>
              <span className="text-[9px] text-[#f7d58b] font-mono">MACH 0.82</span>
            </div>
            <div className="flex flex-col gap-1 px-4 py-3 bg-black/20 rounded-xl border border-white/5 text-left">
              <span className="text-[10px] text-nature-slate uppercase tracking-wider font-semibold font-mono">Outdoor Temp</span>
              <span className="text-xl font-bold text-sky-300 font-mono">-54°C</span>
              <span className="text-[9px] text-sky-400 font-mono">ISA COLD</span>
            </div>
            <div className="flex flex-col gap-1 px-4 py-3 bg-black/20 rounded-xl border border-white/5 text-left">
              <span className="text-[10px] text-nature-slate uppercase tracking-wider font-semibold font-mono">Cabin Status</span>
              <span className="text-xl font-bold text-emerald-400 font-mono">STABILIZED</span>
              <span className="text-[9px] text-emerald-500 font-mono">CLIMATE OK</span>
            </div>
          </div>

          {/* Autopilot Tracker & Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 pt-4 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white/50">FLIGHT PATH TO:</span>
              <span className="font-bold text-[#f7d58b] uppercase tracking-wider">{activeDest.name} ({activeDest.code})</span>
            </div>
            <button
              onClick={handleExplorePackage}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 font-semibold uppercase tracking-wider transition-all"
            >
              Explore Itinerary
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Precise Capsule-Shaped Aeroplane Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center items-center w-full"
        >
          {/* Outer Windows Bezel Frame (Precise capsule shape) */}
          <div className="relative w-[290px] h-[450px] sm:w-[340px] sm:h-[530px] rounded-t-[140px] rounded-b-[140px] border-[18px] border-[#cecece] bg-black shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_4px_12px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
            {/* Inner plastic bezel rim */}
            <div className="absolute inset-[3px] rounded-t-[132px] rounded-b-[132px] border-[8px] border-[#e2e2e2] shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)] z-30 pointer-events-none" />

            {/* Window Glass Viewport */}
            <div className="relative w-full h-full overflow-hidden z-0 rounded-t-[122px] rounded-b-[122px]">
              {/* Landscape slides */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.img
                    key={index}
                    src={activeDest.image}
                    alt={activeDest.name}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                {/* Atmospheric Sky Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-400/20 via-transparent to-indigo-900/10 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Scrolling Clouds (Layered on top of landscape but below wing) */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
                <div
                  className="w-[200%] h-full animate-[scrollClouds_45s_linear_infinite]"
                  style={{
                    backgroundImage: "url('/images/unsplash_1534088568595-a066f410bcda.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat-x"
                  }}
                />
              </div>

              {/* Cruising Wing (Floats over clouds and scenery) */}
              <motion.div
                animate={{
                  y: [0, -3, 1.5, -2, 0],
                  rotate: [0, -0.2, 0.15, -0.1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[-5%] left-[-5%] w-[80%] h-[55%] z-20 pointer-events-none"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Wing body */}
                  <path d="M 0,100 L 88,78 L 98,82 L 0,100 Z" fill="url(#wingGrad)" />
                  {/* Ailerons */}
                  <path d="M 0,100 L 45,88 L 43,90 L 0,100 Z" fill="#b8b8b8" opacity="0.6" />
                  <path d="M 45,88 L 88,78 L 86,80 L 43,90 Z" fill="#cfcfcf" opacity="0.5" />
                  {/* Crimson Winglet */}
                  <path d="M 88,78 L 92,62 L 96,64 L 98,82 Z" fill="url(#wingletGrad)" />
                  
                  <defs>
                    <linearGradient id="wingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#ffffff" />
                      <stop offset="60%" stop-color="#ededed" />
                      <stop offset="100%" stop-color="#bebebe" />
                    </linearGradient>
                    <linearGradient id="wingletGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#7A1422" />
                      <stop offset="100%" stop-color="#4A1018" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Sliding Window Shade overlay */}
              <motion.div
                initial={{ top: "-100%" }}
                animate={shadeOpen ? { top: "-100%" } : { top: "0%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-x-0 h-full bg-[#3a3a3a] border-b-[10px] border-[#2a2a2a] z-30 shadow-[inset_0_-8px_12px_rgba(0,0,0,0.5),0_8px_15px_rgba(0,0,0,0.6)] flex flex-col justify-end"
              >
                {/* Shade handle */}
                <div className="flex justify-center pb-4">
                  <div className="w-16 h-3 rounded-full bg-[#181818] border-t border-white/10 shadow-inner flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Toggle Shade controls overlay */}
              <button
                type="button"
                onClick={() => setShadeOpen(!shadeOpen)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 rounded-full bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/15 hover:bg-black/80 transition-colors"
              >
                {shadeOpen ? "Close Shade" : "Open Shade"}
              </button>

              {/* Viewport Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 mix-blend-overlay z-40 pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
