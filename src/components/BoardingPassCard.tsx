import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import type { Package } from "../data/packagesData";

interface BoardingPassCardProps {
  tourPackage: Package;
  onClick: () => void;
  index: number;
  seatNumber?: string;
  gateNumber?: string;
}

export default function BoardingPassCard({
  tourPackage,
  onClick,
  index,
}: BoardingPassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[32px] bg-nature-meadow shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col h-[480px]"
    >
      {/* 1. Fullscreen Scenic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={tourPackage.image}
          alt={tourPackage.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Scenic Vignette / Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500 group-hover:via-black/45" />
      </div>

      {/* 2. Floating Rating Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="flex items-center gap-1 bg-[#121416]/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
          <Star size={11} className="fill-amber-400 text-amber-400" />
          {tourPackage.rating.toFixed(1)}
        </span>
      </div>

      {/* 3. Floating Glassmorphic Details Console */}
      <div className="mt-auto z-10 p-4 w-full">
        <div className="w-full bg-[#121416]/55 border border-white/10 backdrop-blur-xl rounded-[24px] p-5 text-white shadow-2xl transition-all duration-500 group-hover:bg-[#121416]/75">
          <div className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-nature-azure">
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-nature-cobalt animate-pulse" />
              {tourPackage.location}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10">{tourPackage.duration}</span>
          </div>

          <h3 className="mt-2.5 font-display text-2xl font-bold leading-snug text-white transition-colors group-hover:text-[#f7d58b]">
            {tourPackage.name}
          </h3>

          <p className="mt-2 text-xs text-white/70 line-clamp-2 leading-relaxed transition-all duration-300">
            {tourPackage.tagline}
          </p>

          {/* Action Row */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#f7d58b]">
            <span>View Itinerary</span>
            <motion.div
              animate={{ x: 0 }}
              whileHover={{ x: 3 }}
              className="inline-flex items-center"
            >
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
