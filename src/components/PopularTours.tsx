import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import RevealText from "./RevealText";

const TOURS = [
  {
    name: "Wayanad",
    tagline: "Misty hills & spice trails",
    image: "https://site.startupmatricks.in/wp-content/uploads/2021/09/way.jpg",
    rating: 5.0,
  },
  {
    name: "Munnar",
    tagline: "Rolling tea gardens",
    image: "https://site.startupmatricks.in/wp-content/uploads/2021/09/mun.jpg",
    rating: 5.0,
  },
  {
    name: "Kochi",
    tagline: "Coastal heritage city",
    image: "https://site.startupmatricks.in/wp-content/uploads/2025/04/koch.jpg",
    rating: 5.0,
  },
  {
    name: "Vagamon",
    tagline: "Meadows & pine forests",
    image: "https://site.startupmatricks.in/wp-content/uploads/2025/04/vag-1.jpg",
    rating: 5.0,
  },
];

export default function PopularTours() {
  return (
    <section id="packages" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <RevealText
          as="h2"
          text="Popular tours our travelers keep choosing"
          className="text-3xl font-extrabold tracking-tight text-nature-forest sm:text-4xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-base text-nature-forest/70 sm:text-lg"
        >
          A handful of Kerala favorites travelers keep coming back for.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TOURS.map((tour, i) => (
          <div key={tour.name} className="perspective-container">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300 will-change-transform"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/60 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-xl bg-white/90 px-2.5 py-1 text-xs font-bold text-nature-forest backdrop-blur-xl">
                  <Star size={12} className="fill-nature-cobalt text-nature-cobalt" />
                  {tour.rating.toFixed(1)}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-nature-azure">
                  <MapPin size={14} />
                  <span className="text-xs font-semibold uppercase tracking-wide">Kerala</span>
                </div>
                <h3 className="mt-1.5 text-lg font-bold text-nature-forest">{tour.name}</h3>
                <p className="mt-1 text-sm text-nature-forest/70">{tour.tagline}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
