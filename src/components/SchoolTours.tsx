import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, HeartHandshake, Eye, Sparkles, ArrowUpRight, MapPin, Star } from "lucide-react";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";

interface SchoolToursProps {
  onBack: () => void;
  onSelectPackage: (pkg: Package) => void;
}

const SAFETY_FEATURES = [
  {
    icon: ShieldAlert,
    title: "Uncompromising Safety",
    description: "Strict student-to-teacher escort ratios, female tour coordinators for girl students, and pre-verified safe hotels."
  },
  {
    icon: HeartHandshake,
    title: "Hygienic Dining",
    description: "Kid-friendly, low-spice vegetarian and non-vegetarian meals prepared in verified hygienic kitchens."
  },
  {
    icon: Eye,
    title: "Live GPS Tracking",
    description: "GPS-equipped tourist buses and active updates shared with school administration and parents during the tour."
  },
  {
    icon: Sparkles,
    title: "Curriculum Integration",
    description: "Interactive worksheets, quizzes, and historical walks guided by certified subject instructors."
  }
];

export default function SchoolTours({ onBack, onSelectPackage }: SchoolToursProps) {
  const schoolPackages = TOUR_PACKAGES.filter((pkg) => pkg.category === "School");

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
              <p className="eyebrow mb-4">Educational School Excursions</p>
              <RevealText
                as="h1"
                text="Safety first. Learning always."
                className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-nature-forest sm:text-7xl"
              />
              <p className="mt-6 text-base leading-relaxed text-nature-slate sm:text-lg">
                Classic 360 Holidays has been the trusted travel partner for leading schools in Salem. We design safe, educational, and engaging travel programs that expand children's horizons, supported by a 24/7 medical desk, verified vehicles, and child-safe meals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#school-packages"
                  className="rounded-full bg-nature-cobalt px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  View School Packages
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-black/10 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-nature-forest transition-colors hover:bg-[#f5f5f5]"
                >
                  Contact School Coordinator
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1200&q=85"
                alt="School kids in nature park"
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
            <p className="eyebrow mb-4">Our Trust Framework</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl">
              We care for them like you do
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY_FEATURES.map(({ icon: Icon, title, description }, idx) => (
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

      {/* Featured School Packages */}
      <section id="school-packages" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Curated Educational Paths</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl">
              School itineraries designed for learning
            </h2>
            <p className="mt-4 text-sm text-nature-slate">
              Every day includes historical discoveries, biological gardens, and interactive science experiments.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {schoolPackages.map((pkg, idx) => (
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
