import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Compass, Globe2, Palmtree } from "lucide-react";
import RevealText from "./RevealText";

type Collection = "Domestic" | "International" | "Special";

const DESTINATIONS: Record<Collection, { name: string; region: string; image: string }[]> = {
  Domestic: [
    { name: "Wayanad", region: "Kerala", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=85" },
    { name: "Munnar", region: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85" },
    { name: "Alappuzha", region: "Kerala", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=85" },
    { name: "Kochi", region: "Kerala", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=85" },
    { name: "Vagamon", region: "Kerala", image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=900&q=85" },
    { name: "Varkala", region: "Kerala", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=85" },
    { name: "Coorg", region: "Karnataka", image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=85" },
    { name: "Chikkamagaluru", region: "Karnataka", image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=85" },
    { name: "Dandeli", region: "Karnataka", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=85" },
    { name: "Gokarna", region: "Karnataka", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85" },
    { name: "Mysuru", region: "Karnataka", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=85" },
    { name: "Hampi", region: "Karnataka", image: "https://images.unsplash.com/photo-1600100397608-f010f1812b2e?auto=format&fit=crop&w=900&q=85" },
    { name: "Pune", region: "Maharashtra", image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=85" },
    { name: "Goa", region: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85" },
    { name: "Manali", region: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85" },
    { name: "Golden Triangle", region: "North India", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85" },
    { name: "Rajasthan", region: "North India", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85" },
    { name: "Kashmir", region: "North India", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85" },
    { name: "Ooty", region: "Tamil Nadu", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85" },
    { name: "Kodaikanal", region: "Tamil Nadu", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=85" },
    { name: "Pondicherry", region: "Tamil Nadu", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=85" },
  ],
  International: [
    { name: "Bali", region: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85" },
    { name: "Thailand", region: "Southeast Asia", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=85" },
    { name: "Malaysia", region: "Southeast Asia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=85" },
    { name: "Singapore", region: "Southeast Asia", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85" },
    { name: "Sri Lanka", region: "South Asia", image: "https://images.unsplash.com/photo-1586181108511-5e5511e12e7c?auto=format&fit=crop&w=900&q=85" },
    { name: "Dubai", region: "United Arab Emirates", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85" },
    { name: "Maldives", region: "Indian Ocean", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85" },
  ],
  Special: [
    { name: "Family Tour", region: "Made for every generation", image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=900&q=85" },
    { name: "Honeymoon Tour", region: "Made for two", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85" },
    { name: "Educational Tour", region: "Made to inspire", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85" },
    { name: "Devotional Tour", region: "Made for reflection", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85" },
  ],
};

const ICONS = { Domestic: Compass, International: Globe2, Special: Palmtree };

export default function DestinationExplorer() {
  const [collection, setCollection] = useState<Collection>("Domestic");
  const Icon = ICONS[collection];

  return (
    <section id="domestic-tours" className="relative overflow-hidden bg-nature-forest px-6 py-24 text-white sm:py-32">
      <span id="international-tours" className="absolute top-0" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-nature-azure/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#f7d58b]">Destination list</p>
            <RevealText as="h2" text="Go where the story takes you." className="font-display text-5xl font-semibold leading-none sm:text-7xl" />
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(DESTINATIONS) as Collection[]).map((item) => (
              <button key={item} type="button" onClick={() => setCollection(item)} className={`border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] transition-colors ${collection === item ? "border-nature-azure bg-nature-azure text-nature-forest" : "border-white/30 text-white hover:border-white"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3 text-[#f7d58b]"><Icon size={20} /><span className="text-xs font-bold uppercase tracking-[0.2em]">{collection} journeys</span></div>
          <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {DESTINATIONS[collection].map((destination, index) => (
                <motion.a key={destination.name} href="#contact" layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, delay: index * 0.025 }} whileHover={{ y: -5 }} className="group relative h-60 overflow-hidden border border-white/15 bg-white/5">
                  <img src={destination.image} alt={destination.name} loading="lazy" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/95 via-nature-forest/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"><div><p className="text-xs uppercase tracking-[0.15em] text-white/65">{destination.region}</p><h3 className="mt-1 font-display text-3xl font-bold">{destination.name}</h3></div><ArrowUpRight className="mb-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={19} /></div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
