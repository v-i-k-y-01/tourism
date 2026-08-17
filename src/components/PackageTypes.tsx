import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealText from "./RevealText";

const CATEGORIES = [
  {
    title: "Family Tour",
    copy: "Easy-paced trips built for every age in the group.",
    image:
      "https://site.startupmatricks.in/wp-content/uploads/2021/09/happy-father-hiking-with-children-mountains-scaled.jpg",
  },
  {
    title: "Honeymoon Tour",
    copy: "Quiet, scenic escapes designed for two.",
    image:
      "https://site.startupmatricks.in/wp-content/uploads/2021/09/young-hipster-beautiful-couple-love-walking-mountains-scaled.jpg",
  },
  {
    title: "Educational Tour",
    copy: "Guided group trips that turn learning into adventure.",
    image:
      "https://site.startupmatricks.in/wp-content/uploads/2021/09/adventure-hike-people-concept-group-smiling-friends-forest-man-with-map-scaled.jpg",
  },
  {
    title: "Domestic Tours",
    copy: "Kerala, Karnataka, North India and Tamil Nadu, covered.",
    image: "https://site.startupmatricks.in/wp-content/uploads/2025/04/portrait-fat-tourist-travelling-scaled.jpg",
  },
  {
    title: "International Tours",
    copy: "Bali, Thailand, Dubai, Maldives and more, planned end-to-end.",
    image: "https://site.startupmatricks.in/wp-content/uploads/2025/04/full-shot-woman-taking-selfie-scaled.jpg",
  },
];

export default function PackageTypes() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <RevealText
          as="h2"
          text="Find the package that fits your trip"
          className="text-3xl font-extrabold tracking-tight text-nature-forest sm:text-4xl"
        />
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(({ title, copy, image }, i) => (
          <div key={title} className={`perspective-container ${i === 3 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-64 overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 will-change-transform"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/90 via-nature-forest/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-1 max-w-xs text-sm text-white/80">{copy}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white">
                  Explore
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
