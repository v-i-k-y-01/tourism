import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutClaassical from "./components/AboutClaassical";
import PopularTours from "./components/PopularTours";
import PackageTypes from "./components/PackageTypes";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import DestinationExplorer from "./components/DestinationExplorer";
import Footer from "./components/Footer";

// New Page Views and Components
import MiceTours from "./components/MiceTours";
import CollegeTours from "./components/CollegeTours";
import SchoolTours from "./components/SchoolTours";
import ItineraryModal from "./components/ItineraryModal";
import FlightWindowSection from "./components/FlightWindowSection";
import type { Package } from "./data/packagesData";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  // Page Routing and Itinerary State
  const [activeView, setActiveView] = useState<"home" | "mice" | "college" | "school">("home");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on page view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-nature-bg">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-nature-gradient"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {activeView === "home" && (
              <>
                <Hero />
                <AboutClaassical />
                <PopularTours onSelectPackage={handleSelectPackage} />
                <DestinationExplorer onSelectPackage={handleSelectPackage} />
                <PackageTypes setActiveView={setActiveView} />
                <WhyChooseUs />
                <Stats />
                <Testimonials />
                <FlightWindowSection onSelectPackage={handleSelectPackage} />
              </>
            )}
            {activeView === "mice" && (
              <MiceTours
                onBack={() => {
                  setActiveView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onSelectPackage={handleSelectPackage}
              />
            )}
            {activeView === "college" && (
              <CollegeTours
                onBack={() => {
                  setActiveView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onSelectPackage={handleSelectPackage}
              />
            )}
            {activeView === "school" && (
              <SchoolTours
                onBack={() => {
                  setActiveView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onSelectPackage={handleSelectPackage}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Shared Itinerary Modal */}
      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourPackage={selectedPackage}
      />
    </div>
  );
}
