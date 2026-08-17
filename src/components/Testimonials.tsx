import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import TiltCard from "./TiltCard";
import RevealText from "./RevealText";

const TESTIMONIALS = [
  {
    name: "Sneha & Arjun",
    location: "Bangalore",
    quote: "Our Munnar trip was planned down to the last detail. We just showed up and enjoyed it.",
  },
  {
    name: "Deepika S",
    location: "Chennai",
    quote: "Quick to respond, honest about pricing, and the stays they picked were genuinely great.",
  },
  {
    name: "Mohan Raj",
    location: "Coimbatore",
    quote: "Booked a last-minute Wayanad weekend and everything was sorted within a day.",
  },
  {
    name: "Revathi M",
    location: "Madurai",
    quote: "Our family tour had kids and grandparents in the group, they planned around everyone comfortably.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <RevealText
          as="h2"
          text="Travelers who trusted us with their trip"
          className="text-3xl font-extrabold tracking-tight text-nature-forest sm:text-4xl"
        />
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {TESTIMONIALS.map(({ name, location, quote }, i) => (
          <TiltCard key={name} delay={i * 0.12} className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-nature-gradient text-sm font-bold text-white">
                  {initials(name)}
                </span>
                <div>
                  <p className="text-sm font-bold text-nature-forest">{name}</p>
                  <p className="text-xs text-nature-forest/60">{location}</p>
                </div>
              </div>
              <Quote size={22} className="text-nature-azure/30" />
            </div>

            <div className="mt-4 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={14} className="fill-nature-cobalt text-nature-cobalt" />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-sm leading-relaxed text-nature-forest/70"
            >
              "{quote}"
            </motion.p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
