import { motion, useScroll, useSpring } from "framer-motion";
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

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-nature-bg">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-nature-gradient"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <Header />
      <main>
        <Hero />
        <AboutClaassical />
        <PopularTours />
        <DestinationExplorer />
        <PackageTypes />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
