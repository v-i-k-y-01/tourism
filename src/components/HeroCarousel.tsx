import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=85",
    alt: "Traveler taking in a mountain valley view",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=85",
    alt: "Friends enjoying a road trip together",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`pointer-events-none relative h-full overflow-hidden ${className}`} aria-hidden="true">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000 + 1, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[index].image}
            alt={SLIDES[index].alt}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setIndex(i)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
