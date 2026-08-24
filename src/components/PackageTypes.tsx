import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealText from "./RevealText";

const CATEGORIES = [
  {
    title: "Family Tour",
    copy: "Easy-paced trips built for every age in the group.",
    image:
      "https://site.startupmatricks.in/wp-content/uploads/2021/09/happy-father-hiking-with-children-mountains-scaled.jpg",
    href: "#contact",
  },
  {
    title: "Honeymoon Tour",
    copy: "Quiet, scenic escapes designed for two.",
    image:
      "https://site.startupmatricks.in/wp-content/uploads/2021/09/young-hipster-beautiful-couple-love-walking-mountains-scaled.jpg",
    href: "#contact",
  },
  {
    title: "Educational Tour",
    copy: "Guided group trips that turn learning into adventure.",
    image:
      "https://site.startupmatricks.in/wp-content/uploads/2021/09/adventure-hike-people-concept-group-smiling-friends-forest-man-with-map-scaled.jpg",
    href: "#contact",
  },
  {
    title: "Domestic Tours",
    copy: "Kerala, Karnataka, North India and Tamil Nadu, covered.",
    image: "https://site.startupmatricks.in/wp-content/uploads/2025/04/portrait-fat-tourist-travelling-scaled.jpg",
    href: "#contact",
  },
  {
    title: "International Tours",
    copy: "Bali, Thailand, Dubai, Maldives and more, planned end-to-end.",
    image: "https://site.startupmatricks.in/wp-content/uploads/2025/04/full-shot-woman-taking-selfie-scaled.jpg",
    href: "#contact",
  },
];

export default function PackageTypes() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-4">Travel, your way</p>
        <RevealText
          as="h2"
          text="Find the package that fits your trip"
          className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl"
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {CATEGORIES.map(({ title, copy, image, href }, i) => (
          <div key={title} className={`perspective-container ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}>
            <motion.a
              href={href}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group block overflow-hidden rounded-[28px] border border-black/5 bg-[#f5f5f5] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover will-change-transform"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-3xl font-bold leading-none text-nature-forest">{title}</h3>
                <p className="mt-3 min-h-10 max-w-md text-sm leading-relaxed text-nature-slate">{copy}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-nature-cobalt">
                  Explore
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </div>
            </motion.a>
          </div>
        ))}
      </div>
    </section>
  );
}
