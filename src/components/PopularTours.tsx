import { motion } from "framer-motion";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";
import BoardingPassCard from "./BoardingPassCard";

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
          <BoardingPassCard
            key={tour.id}
            tourPackage={tour}
            onClick={() => onSelectPackage(tour)}
            seatNumber={`360-${10 + i}`}
            gateNumber={`GATE ${i + 1}`}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
