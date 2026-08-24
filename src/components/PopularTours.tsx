import { motion } from "framer-motion";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";

interface PopularToursProps {
  onSelectPackage: (pkg: Package) => void;
}

export default function PopularTours({ onSelectPackage }: PopularToursProps) {
  // Grab the 4 main popular international packages to feature
  const popularTours = TOUR_PACKAGES.filter(pkg => 
    ["bali-bliss", "singapore-spectacular", "dubai-extravaganza", "maldives-luxury"].includes(pkg.id)
  );

  return (
    <section id="packages" className="relative bg-white px-6 py-24 text-nature-forest sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-4">Curated escapes</p>
        <RevealText
          as="h2"
          text="Popular international tours our travelers keep choosing"
          className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base text-nature-slate sm:text-lg"
        >
          Embark on extraordinary international journeys planned end-to-end for your ultimate comfort.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {popularTours.map((tour, i) => (
          <div key={tour.id} className="perspective-container">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectPackage(tour)}
              className="group cursor-pointer overflow-hidden rounded-[28px] border border-black/5 bg-[#f5f5f5] shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/60 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 flex items-center gap-1 bg-[#fffdf8]/95 px-2.5 py-1 text-xs font-bold text-nature-forest backdrop-blur-xl">
                  <Star size={12} className="fill-nature-cobalt text-nature-cobalt" />
                  {tour.rating.toFixed(1)}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-nature-cobalt">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span className="text-xs font-semibold uppercase tracking-wide">{tour.region}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-nature-slate bg-nature-azure px-2 py-0.5">
                    {tour.duration.split(" ")[0]} Days
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-nature-forest leading-tight group-hover:text-nature-cobalt transition-colors">{tour.location}</h3>
                <p className="mt-1 text-xs text-nature-slate line-clamp-2 leading-relaxed">{tour.tagline}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-nature-cobalt">
                  <span>View Itinerary</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
