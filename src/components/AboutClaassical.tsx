import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealText from "./RevealText";

const CARDS = [
  {
    title: "Personalized Travel",
    copy: "Trips shaped around your pace, interests, and the people you want to share them with.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    alt: "Friends enjoying a trip together",
  },
  {
    title: "Expert Planning",
    copy: "Well-chosen stays, thoughtful routes, and clear support from the first call to the return journey.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=85",
    alt: "Mountain landscape viewed from a scenic road",
  },
  {
    title: "Memorable Experiences",
    copy: "Beautiful places and unhurried moments that stay with you long after the trip is over.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
    alt: "Sunset over a tropical beach",
  },
];

export default function AboutClaassical() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <RevealText
          as="h2"
          text="At Claassical, we turn travel dreams into reality"
          className="text-3xl font-extrabold tracking-tight text-nature-forest sm:text-4xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-base text-nature-forest/70 sm:text-lg"
        >
          A Salem-based team of travel planners who handle the logistics so you can focus on the experience.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ title, copy, image, alt }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-2xl border border-nature-cobalt/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-nature-forest">{title}</h3>
                <ArrowUpRight size={19} className="mt-1 shrink-0 text-nature-azure transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-nature-forest/70">{copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}