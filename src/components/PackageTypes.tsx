import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealText from "./RevealText";

interface PackageTypesProps {
  setActiveView: (view: "home" | "mice" | "college" | "school") => void;
}

const CATEGORIES = [
  {
    title: "MICE Tourism",
    copy: "Premium corporate meetings, conferences, incentive travel, and outbound team-building retreats.",
    image: "https://images.unsplash.com/photo-1542744173-8e0896fa7558?auto=format&fit=crop&w=800&q=85",
    view: "mice" as const,
    href: null,
  },
  {
    title: "College Tours",
    copy: "Industrial visits (IV), adventure trekking, campfires, and DJ nights for college student groups.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=85",
    view: "college" as const,
    href: null,
  },
  {
    title: "School Tours",
    copy: "Curriculum-linked nature, science & history excursions with safety-first standards.",
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=85",
    view: "school" as const,
    href: null,
  },
  {
    title: "International Tours",
    copy: "Explore Bali, Singapore, Dubai, Maldives, Thailand, and Europe, planned end-to-end.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=85",
    view: "home" as const,
    href: "#international-tours",
  },
  {
    title: "Domestic Tours",
    copy: "Bespoke itineraries covering Wayanad, Munnar, Kochi, Coorg, Ooty, and Goa.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85",
    view: "home" as const,
    href: "#domestic-tours",
  },
];

export default function PackageTypes({ setActiveView }: PackageTypesProps) {
  const handleCardClick = (e: React.MouseEvent, cat: typeof CATEGORIES[number]) => {
    if (cat.href) {
      // If we scroll to a section on the home page
      setActiveView("home");
      setTimeout(() => {
        const el = document.querySelector(cat.href!);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      e.preventDefault();
      setActiveView(cat.view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
        {CATEGORIES.map((cat, i) => (
          <div key={cat.title} className={`perspective-container ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}>
            <motion.a
              href={cat.href || "#"}
              onClick={(e) => handleCardClick(e, cat)}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group block overflow-hidden rounded-[28px] border border-black/5 bg-[#f5f5f5] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover will-change-transform cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-3xl font-bold leading-none text-nature-forest group-hover:text-nature-cobalt transition-colors">{cat.title}</h3>
                <p className="mt-3 min-h-10 max-w-md text-sm leading-relaxed text-nature-slate">{cat.copy}</p>
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
