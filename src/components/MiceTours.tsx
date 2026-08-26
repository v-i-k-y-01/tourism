import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Landmark, Trophy, Users2 } from "lucide-react";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";
import BoardingPassCard from "./BoardingPassCard";

interface MiceToursProps {
  onBack: () => void;
  onSelectPackage: (pkg: Package) => void;
}

const MICE_SERVICES = [
  {
    icon: Landmark,
    title: "Corporate Conferences",
    description: "End-to-end venue sourcing, advanced AV setup, stage design, and registration desks for major industry symposiums."
  },
  {
    icon: Trophy,
    title: "Incentive Travel Programs",
    description: "Reward top-performing employees with luxury getaways, private cruise charters, and premium destination banquets."
  },
  {
    icon: Briefcase,
    title: "Executive Meetings",
    description: "Discreet and sophisticated arrangements for high-level board meetings, strategy retreats, and leadership workshops."
  },
  {
    icon: Users2,
    title: "Team-Building Activities",
    description: "Bespoke outbound exercises, navigation challenges, and collaborative programs that strengthen group dynamics."
  }
];

export default function MiceTours({ onBack, onSelectPackage }: MiceToursProps) {
  const micePackages = TOUR_PACKAGES.filter((pkg) => pkg.category === "MICE");

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
              <p className="eyebrow mb-4">Meetings & Incentives</p>
              <RevealText
                as="h1"
                text="Inspire excellence with corporate tours."
                className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-nature-forest sm:text-7xl"
              />
              <p className="mt-6 text-base leading-relaxed text-nature-slate sm:text-lg">
                Classic 360 Holidays transforms corporate travel into strategic success. From seamless high-tech conference setups to thrilling outbound team-building adventures, we handle the details so you can focus on building connections.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#mice-packages"
                  className="rounded-full bg-nature-cobalt px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  View Corporate Packages
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-black/10 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-nature-forest transition-colors hover:bg-[#f5f5f5]"
                >
                  Contact Corporate Desk
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="/images/unsplash_1511578314322-379afb476865.jpg"
                alt="Corporate conference auditorium setup"
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
            <p className="eyebrow mb-4">Strategic Corporate Support</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl">
              Tailored services for professional groups
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MICE_SERVICES.map(({ icon: Icon, title, description }, idx) => (
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

      {/* Featured MICE Packages */}
      <section id="mice-packages" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Elite Business Destinations</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-nature-forest sm:text-6xl">
              Curated corporate package itineraries
            </h2>
            <p className="mt-4 text-sm text-nature-slate">
              Custom-built international travel itineraries featuring strategic meeting periods combined with luxury hospitality.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {micePackages.map((pkg, idx) => (
              <BoardingPassCard
                key={pkg.id}
                tourPackage={pkg}
                onClick={() => onSelectPackage(pkg)}
                seatNumber={`CORP-${idx + 1}`}
                gateNumber="VIP"
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
