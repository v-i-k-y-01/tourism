import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, MapPin, Calendar, Check, XCircle, ArrowRight, Clock, Plane } from "lucide-react";
import type { Package } from "../data/packagesData";

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourPackage: Package | null;
}

export default function ItineraryModal({ isOpen, onClose, tourPackage }: ItineraryModalProps) {
  const [activeTab, setActiveTab] = useState<"itinerary" | "inclusions" | "inquire">("itinerary");
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState(1);

  // Reset active day when package changes
  useEffect(() => {
    setActiveDay(1);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [tourPackage]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = container.querySelectorAll(".itinerary-day-item");
    let currentActive = 1;
    let minDiff = Infinity;

    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const diff = Math.abs(rect.top - containerRect.top - 16);
      if (diff < minDiff) {
        minDiff = diff;
        currentActive = index + 1;
      }
    });

    setActiveDay(currentActive);
  };

  const scrollToDay = (day: number) => {
    if (containerRef.current) {
      const children = containerRef.current.querySelectorAll(".itinerary-day-item");
      const targetChild = children[day - 1] as HTMLElement;
      if (targetChild) {
        containerRef.current.scrollTo({
          top: targetChild.offsetTop - 16,
          behavior: "smooth",
        });
        setActiveDay(day);
      }
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!tourPackage) return null;

  const handleInquireClick = () => {
    onClose();
    // Pre-fill destination input if it exists
    const destInput = document.querySelector('input[name="destination"]') as HTMLInputElement;
    if (destInput) {
      destInput.value = `${tourPackage.name} (${tourPackage.duration})`;
    }
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-nature-forest/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 flex h-full max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl lg:flex-row"
          >
            {/* Left/Top Image Banner */}
            <div className="relative h-48 shrink-0 lg:h-full lg:w-[38%]">
              <img
                src={tourPackage.image}
                alt={tourPackage.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-forest via-nature-forest/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-nature-forest/10 lg:to-nature-forest/90" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white lg:bottom-10 lg:left-8 lg:right-8">
                <span className="inline-flex items-center gap-1 bg-nature-cobalt px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {tourPackage.category} Journey
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  {tourPackage.location}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                  <MapPin size={12} className="text-nature-cobalt" />
                  {tourPackage.region}
                </p>
              </div>

              {/* Close Button on Mobile */}
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 lg:hidden"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Right/Bottom Detailed Section */}
            <div className="flex flex-1 flex-col overflow-hidden p-6 sm:p-8 lg:p-10">
              {/* Header Details */}
              <div className="hidden items-start justify-between border-b border-black/5 pb-5 lg:flex">
                <div>
                  <h2 className="font-display text-3xl font-bold text-nature-forest">
                    {tourPackage.name}
                  </h2>
                  <p className="mt-1 text-sm text-nature-slate italic">
                    {tourPackage.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="flex items-center gap-1 text-xs font-bold text-nature-forest">
                      <Star size={13} className="fill-nature-cobalt text-nature-cobalt" />
                      {tourPackage.rating.toFixed(1)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-nature-slate">
                      Rating
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-nature-azure/40 text-nature-forest transition-colors hover:bg-nature-azure"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Quick Info bar */}
              <div className="mt-4 flex flex-wrap items-center gap-6 rounded-2xl bg-nature-azure/40 p-4 text-sm font-semibold text-nature-forest lg:mt-6">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-nature-cobalt" />
                  <span>{tourPackage.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-nature-cobalt" />
                  <span>Customizable Dates</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-nature-cobalt" />
                  <span>Multi-City Departures</span>
                </div>
              </div>

              {/* Tabs navigation */}
              <div className="mt-6 flex border-b border-black/5">
                {(["itinerary", "inclusions", "inquire"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                      activeTab === tab
                        ? "text-nature-cobalt font-extrabold"
                        : "text-nature-slate hover:text-nature-forest"
                    } mr-6 sm:mr-8`}
                  >
                    {tab === "itinerary" && "Day-by-Day Itinerary"}
                    {tab === "inclusions" && "Inclusions / Exclusions"}
                    {tab === "inquire" && "Inquire Now"}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeModalTab"
                        className="absolute bottom-0 inset-x-0 h-0.5 bg-nature-cobalt"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="mt-6 flex-1 overflow-y-auto pr-1"
              >
                {activeTab === "itinerary" && (
                  <div className="relative pl-10 py-2">
                    {/* The vertical track line */}
                    <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-black/10" />

                    {tourPackage.itinerary.map((item) => (
                      <div key={item.day} className="relative mb-8 last:mb-0 itinerary-day-item">
                        {/* Landing Pad showing day number (clickable to snap to day) */}
                        <button
                          type="button"
                          onClick={() => scrollToDay(item.day)}
                          className="absolute -left-[35px] top-1 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#f5f5f5] border border-black/10 text-[9px] font-bold text-nature-slate z-10 hover:border-nature-cobalt hover:text-nature-cobalt transition-colors"
                        >
                          {activeDay === item.day ? (
                            <motion.div
                              layoutId="timelinePlane"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                              className="absolute -inset-[1px] z-20 flex items-center justify-center rounded-full bg-white text-nature-cobalt shadow-md border border-nature-cobalt"
                            >
                              <Plane size={11} className="rotate-90" />
                            </motion.div>
                          ) : (
                            <span>{item.day}</span>
                          )}
                        </button>
                        
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-nature-cobalt bg-nature-azure px-2 py-0.5 rounded-full">
                            Day {item.day}
                          </span>
                          <h4 className="mt-2.5 font-display text-lg font-bold text-nature-forest">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-nature-slate">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "inclusions" && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-nature-cobalt mb-3">
                        What's Included
                      </h4>
                      <ul className="space-y-2.5">
                        {tourPackage.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-nature-slate">
                            <Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-nature-cobalt mb-3">
                        What's Excluded
                      </h4>
                      <ul className="space-y-2.5">
                        {tourPackage.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-nature-slate">
                            <XCircle size={16} className="mt-0.5 shrink-0 text-rose-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "inquire" && (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="rounded-full bg-nature-azure/40 p-4 text-nature-cobalt mb-4">
                      <Calendar size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-nature-forest">
                      Ready to book or customize?
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-nature-slate leading-relaxed">
                      We'll construct a personalized quote based on your guest count, travel dates, and optional preferences. Click below to pre-fill our contact planner form.
                    </p>
                    <button
                      type="button"
                      onClick={handleInquireClick}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-nature-cobalt px-8 py-4 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03]"
                    >
                      Fill Passenger Boarding Pass
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
