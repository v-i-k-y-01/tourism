import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Compass, Globe2, Palmtree } from "lucide-react";
import RevealText from "./RevealText";
import { TOUR_PACKAGES, type Package } from "../data/packagesData";

type Collection = "Domestic" | "International" | "Special";

interface DestinationExplorerProps {
  onSelectPackage: (pkg: Package) => void;
}

const DESTINATIONS: Record<Collection, { name: string; region: string; image: string }[]> = {
  Domestic: [
    { name: "Wayanad", region: "Kerala", image: "/images/unsplash_1627060938622-7f27ac14878a.jpg" },
    { name: "Munnar", region: "Kerala", image: "/images/unsplash_1602216056096-3b40cc0c9944.jpg" },
    { name: "Alappuzha", region: "Kerala", image: "/images/unsplash_1593693397690-362cb9666fc2.jpg" },
    { name: "Kochi", region: "Kerala", image: "/images/unsplash_1589308078059-be1415eab4c3.jpg" },
    { name: "Vagamon", region: "Kerala", image: "/images/unsplash_1518002171953-a080ee817e1f.jpg" },
    { name: "Varkala", region: "Kerala", image: "/images/unsplash_1544735716-392fe2489ffa.jpg" },
    { name: "Coorg", region: "Karnataka", image: "/images/unsplash_1597074866923-dc0589150358.jpg" },
    { name: "Chikkamagaluru", region: "Karnataka", image: "/images/unsplash_1598091383021-15ddea10925d.jpg" },
    { name: "Dandeli", region: "Karnataka", image: "/images/unsplash_1527631746610-bca00a040d60.jpg" },
    { name: "Gokarna", region: "Karnataka", image: "/images/unsplash_1590490360182-c33d57733427.jpg" },
    { name: "Mysuru", region: "Karnataka", image: "/images/unsplash_1582510003544-4d00b7f74220.jpg" },
    { name: "Hampi", region: "Karnataka", image: "/images/unsplash_1600100397608-f010f1812b2e.jpg" },
    { name: "Pune", region: "Maharashtra", image: "/images/unsplash_1595658658481-d53d3f999875.jpg" },
    { name: "Goa", region: "Goa", image: "/images/unsplash_1507525428034-b723cf961d3e.jpg" },
    { name: "Manali", region: "Himachal Pradesh", image: "/images/unsplash_1626621341517-bbf3d9990a23.jpg" },
    { name: "Golden Triangle", region: "North India", image: "/images/unsplash_1564507592333-c60657eea523.jpg" },
    { name: "Rajasthan", region: "North India", image: "/images/unsplash_1477587458883-47145ed94245.jpg" },
    { name: "Kashmir", region: "North India", image: "/images/unsplash_1595815771614-ade9d652a65d.jpg" },
    { name: "Ooty", region: "Tamil Nadu", image: "/images/unsplash_1548013146-72479768bada.jpg" },
    { name: "Kodaikanal", region: "Tamil Nadu", image: "/images/unsplash_1580618672591-eb180b1a973f.jpg" },
    { name: "Pondicherry", region: "Tamil Nadu", image: "/images/unsplash_1590050752117-238cb061295a.jpg" },
  ],
  International: [
    { name: "Bali", region: "Indonesia", image: "/images/unsplash_1537996194471-e657df975ab4.jpg" },
    { name: "Thailand", region: "Southeast Asia", image: "/images/unsplash_1508009603885-50cf7c579365.jpg" },
    { name: "Malaysia", region: "Southeast Asia", image: "/images/unsplash_1596422846543-75c6fc197f07.jpg" },
    { name: "Singapore", region: "Southeast Asia", image: "/images/unsplash_1525625293386-3f8f99389edd.jpg" },
    { name: "Sri Lanka", region: "South Asia", image: "/images/unsplash_1586181108511-5e5511e12e7c.jpg" },
    { name: "Dubai", region: "United Arab Emirates", image: "/images/unsplash_1512453979798-5ea266f8880c.jpg" },
    { name: "Maldives", region: "Indian Ocean", image: "/images/unsplash_1514282401047-d79a71a590e8.jpg" },
  ],
  Special: [
    { name: "Family Tour", region: "Made for every generation", image: "/images/unsplash_1502086223501-7ea6ecd79368.jpg" },
    { name: "Honeymoon Tour", region: "Made for two", image: "/images/unsplash_1519741497674-611481863552.jpg" },
    { name: "Educational Tour", region: "Made to inspire", image: "/images/unsplash_1523050854058-8df90110c9f1.jpg" },
    { name: "Devotional Tour", region: "Made for reflection", image: "/images/unsplash_1561361513-2d000a50f0dc.jpg" },
  ],
};

const ICONS = { Domestic: Compass, International: Globe2, Special: Palmtree };

export default function DestinationExplorer({ onSelectPackage }: DestinationExplorerProps) {
  const [collection, setCollection] = useState<Collection>("International"); // Default to International to focus more towards international trips!
  const Icon = ICONS[collection];

  const handleCardClick = (e: React.MouseEvent, dest: typeof DESTINATIONS[Collection][number]) => {
    e.preventDefault();
    
    // Find matching package or generate custom package on the fly
    const existing = TOUR_PACKAGES.find(p => p.location.toLowerCase() === dest.name.toLowerCase());
    if (existing) {
      onSelectPackage(existing);
      return;
    }

    // Generate custom package dynamically
    const customPkg: Package = {
      id: dest.name.toLowerCase().replace(/\s+/g, "-"),
      name: `${dest.name} Highlights Tour`,
      location: dest.name,
      region: dest.region,
      duration: "4 Days / 3 Nights",
      rating: 4.9,
      image: dest.image,
      tagline: `Experience the signature landmarks, culture and scenic spots of ${dest.name}.`,
      category: (collection === "Special" ? "International" : collection) as any,
      inclusions: [
        `3 Nights accommodation in a handpicked boutique hotel`,
        "Daily breakfast at hotel",
        "Private sightseeing vehicle with driver",
        "Experienced local tour guide",
        "Entry passes to major historical / scenic sites"
      ],
      exclusions: [
        "Transport to destination (flights/trains/cabs)",
        "Lunch and dinner meals",
        "Personal tipping and shopping",
        "Adventure ride tickets"
      ],
      itinerary: [
        {
          day: 1,
          title: `Arrival & Leisure at ${dest.name}`,
          description: `Arrive at the destination. Check in to your hotel and unwind. Enjoy a quiet evening walking around the scenic surroundings.`
        },
        {
          day: 2,
          title: "Guided Sightseeing Tour",
          description: `Visit the most prominent landmarks of ${dest.name}. Capture spectacular photographs and enjoy authentic regional cuisine for lunch.`
        },
        {
          day: 3,
          title: "Scenic Excursion & Sunset View",
          description: `Travel slightly outer to discover pristine waterfalls, plantations or viewpoint cliffs. Experience a stunning sunset followed by group dinner.`
        },
        {
          day: 4,
          title: "Shopping & Departure",
          description: `Indulge in buying local spices, fabrics or souvenirs. Checkout of hotel and proceed for your return journey back home.`
        }
      ]
    };

    onSelectPackage(customPkg);
  };

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
                <motion.a key={destination.name} href="#contact" onClick={(e) => handleCardClick(e, destination)} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, delay: index * 0.025 }} whileHover={{ y: -5 }} className="group relative h-60 overflow-hidden border border-white/15 bg-white/5">
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
