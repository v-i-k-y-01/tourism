import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import GradientMesh from "./GradientMesh";
import RevealText from "./RevealText";

const CONTACT = [
  { icon: Mail, label: "claassicaltours@gmail.com", href: "mailto:claassicaltours@gmail.com" },
  { icon: Phone, label: "+91 99944 33446", href: "tel:+919994433446" },
  { icon: MapPin, label: "Omalur Main Rd, Salem 636004", href: "#" },
];

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const FOOTER_LINKS = ["Home", "About Us", "Domestic Tours", "International Tours", "Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-nature-forest pt-24 text-white">
      <GradientMesh variant="section" className="opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 text-center">
        <RevealText
          as="h2"
          text="Let's plan your next getaway"
          className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
        />

        <motion.a
          href="mailto:claassicaltours@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-nature-forest shadow-glow"
        >
          Talk To A Travel Planner
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {CONTACT.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <span className="text-sm font-medium text-white/80">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Claassical. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
