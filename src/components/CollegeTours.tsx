import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Compass, Music, Flame, ArrowUpRight, MapPin, Star } from "lucide-react";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";

interface CollegeToursProps {
  onBack: () => void;
  onSelectPackage: (pkg: Package) => void;
}

const COLLEGE_PILLARS = [
  {
    icon: BookOpen,
    title: "Industrial Visits (IV)",
    description: "Hassle-free permission coordination with leading manufacturing units, IT parks, and tech hubs across India."
  },
  {
    icon: Compass,
    title: "Adventure & Trekking",
    description: "Expert-guided hikes, river rafting, ropes courses, and wild outdoor learning challenges."
  },
  {
    icon: Music,
    title: "DJ Nights & Campfires",
    description: "Unforgettable evening programs featuring high-energy sound systems, bonfire circles, and group dinner buffets."
  },
  {
    icon: Flame,
    title: "Leadership Outbound Camps",
    description: "Designed to inspire teamwork, peer bonding, and strategic problem-solving skills in student groups."
  }
];

export default function CollegeTours({ onBack, onSelectPackage }: CollegeToursProps) {
  const collegePackages = TOUR_PACKAGES.filter((pkg) => pkg.category === "College");

  return (
    <div className="bg-white">
      {/* Navigation Banner */}
      <div className="mx-auto max-w-[1280px] px-4 pt-28 sm:px-8 lg:px-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#f5f5f5] px-4 py-2 text-xs font-bold uppercase tracking-wider text-nature-forest transition-colors hover:bg-nature-azure"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Educational & Adventure Tours</p>
              <RevealText
                as="h1"
                text="Turn classroom learning into outdoor adventure."
                className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-nature-forest sm:text-7xl"
              />
              <p className="mt-6 text-base leading-relaxed text-nature-slate sm:text-lg">
                Classic 360 Holidays plans student group tours that balance academic requirements with life-long memories. From official factory tours to high-altitude campfires and whitewater rafting, our student tours are safe, budget-friendly, and completely coordinated.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#college-packages"
                  className="rounded-full bg-nature-cobalt px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Explore College Packages
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-black/10 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-nature-forest transition-colors hover:bg-[#f5f5f5]"
                >
                  Request Student Quotation
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                alt="Happy college students celebrating together on a trip"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-nature-forest/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#f5f5f5] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">College Group Specials</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl">
              Engineered for learning, built for fun
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COLLEGE_PILLARS.map(({ icon: Icon, title, description }, idx) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-[28px] bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="inline-flex rounded-2xl bg-nature-azure/40 p-4 text-nature-cobalt">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-nature-forest">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-nature-slate">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured College Packages */}
      <section id="college-packages" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Popular College Routes</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl">
              Student packages our campuses choose
            </h2>
            <p className="mt-4 text-sm text-nature-slate">
              Complete itineraries showing daily travel, Industrial Visits, and adventure camp highlights.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {collegePackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[#f5f5f5] shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/40 to-transparent" />
                  <span className="absolute right-4 top-4 flex items-center gap-1 bg-white/95 px-3 py-1 text-xs font-bold text-nature-forest backdrop-blur-md">
                    <Star size={12} className="fill-nature-cobalt text-nature-cobalt" />
                    {pkg.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-nature-cobalt">
                    <MapPin size={14} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {pkg.location}, {pkg.region}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-3xl font-bold leading-none text-nature-forest">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 text-sm text-nature-slate leading-relaxed flex-1">
                    {pkg.tagline}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-nature-slate">
                      Duration: {pkg.duration}
                    </span>
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-nature-cobalt hover:underline"
                    >
                      View Itinerary
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
