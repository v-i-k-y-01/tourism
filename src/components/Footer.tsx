import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Twitter, PlaneTakeoff } from "lucide-react";
import GradientMesh from "./GradientMesh";
import RevealText from "./RevealText";

const CONTACT = [
  { icon: Mail, label: "claassicaltours@gmail.com", href: "mailto:claassicaltours@gmail.com" },
  { icon: Phone, label: "+91 99944 33446", href: "tel:+919994433446" },
  { icon: Phone, label: "+91 84282 12937", href: "tel:+918428212937" },
  { icon: Phone, label: "+91 86681 74225", href: "tel:+918668174225" },
  {
    icon: MapPin,
    label: "Kannagi Complex, Kuranguchavadi Bus Stop, Omalur Main Rd, above Lakshmi Coffee Bar, Salem 636004",
    href: "https://maps.google.com/?q=Kannagi+Complex+Kuranguchavadi+Bus+Stop+Salem+636004",
  },
];

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const FOOTER_LINKS = ["Home", "About Us", "Domestic Tours", "International Tours", "Contact"];

function playTicketTear() {
  if (!window.AudioContext) return;
  const context = new window.AudioContext();
  const buffer = context.createBuffer(1, context.sampleRate * 0.48, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    const fade = 1 - index / data.length;
    data[index] = (Math.random() * 2 - 1) * fade * fade;
  }

  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1250;
  filter.Q.value = 0.7;
  const gain = context.createGain();
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.48);
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(context.destination);
  source.start();
  source.onended = () => void context.close();
}

export default function Footer() {
  const [isIssuing, setIsIssuing] = useState(false);

  function issueTravelPass(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isIssuing) return;
    playTicketTear();
    setIsIssuing(true);
    window.setTimeout(() => setIsIssuing(false), 1500);
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-nature-forest pt-28 text-white sm:pt-36">
      <GradientMesh variant="section" className="opacity-15" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 text-center">
        <div className="mb-7 flex justify-center">
          <img
            src="/ppf%2001.png"
            alt="Classic 360 Holidays logo"
            className="h-20 w-20 rounded-full border border-white/25 object-cover shadow-glow"
          />
        </div>

        <RevealText
          as="h2"
          text="Let's plan your next getaway"
          className="mx-auto max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl"
        />

        <motion.a
          href="mailto:claassicaltours@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-nature-forest shadow-glow"
        >
          Talk To A Travel Planner
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.a>

        <div className={`relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-[#fffdf9] text-nature-forest shadow-card lg:grid lg:grid-cols-[0.8fr_1.2fr] ${isIssuing ? "boarding-pass-issuing" : ""}`}>
          <div className="relative overflow-hidden border-b border-dashed border-nature-forest/25 p-8 text-left sm:p-10 lg:border-b-0 lg:border-r">
            <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-nature-forest" />
            <div className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-nature-forest lg:block" />
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-nature-cobalt">Boarding pass</p>
              <PlaneTakeoff size={22} className="text-nature-cobalt" />
            </div>
            <h3 className="mt-8 font-display text-4xl font-bold leading-none sm:text-5xl">Your journey,<br />ready for take-off.</h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-nature-slate">Tell us the essentials and our travel desk will build the rest of your itinerary.</p>
            <div className="mt-10 flex items-end justify-between border-t border-nature-forest/15 pt-5">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-nature-slate">Carrier</p><p className="mt-1 font-display text-xl font-bold">Classic 360</p></div>
              <div className="text-right"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-nature-slate">Class</p><p className="mt-1 font-display text-xl font-bold">Extraordinary</p></div>
            </div>
          </div>
          <form className="relative grid gap-x-5 gap-y-5 p-8 text-left sm:grid-cols-2 sm:p-10" onSubmit={issueTravelPass}>
            <div className="absolute inset-x-0 top-0 h-1 bg-nature-cobalt" />
            <div className="sm:col-span-2 flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[0.2em] text-nature-cobalt">Passenger details</p><p className="font-mono text-[10px] tracking-[0.18em] text-nature-slate">C360 / PLAN</p></div>
            <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-nature-slate">Passenger name<input required name="name" className="mt-2 w-full border-b border-nature-forest/20 bg-transparent py-3 text-base font-normal normal-case tracking-normal text-nature-forest outline-none placeholder:text-nature-slate/70 focus:border-nature-cobalt" placeholder="Your name" /></label>
            <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-nature-slate">Mobile number<input required name="phone" type="tel" className="mt-2 w-full border-b border-nature-forest/20 bg-transparent py-3 text-base font-normal normal-case tracking-normal text-nature-forest outline-none placeholder:text-nature-slate/70 focus:border-nature-cobalt" placeholder="Your number" /></label>
            <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-nature-slate">Destination<input name="destination" className="mt-2 w-full border-b border-nature-forest/20 bg-transparent py-3 text-base font-normal normal-case tracking-normal text-nature-forest outline-none placeholder:text-nature-slate/70 focus:border-nature-cobalt" placeholder="Where would you like to go?" /></label>
            <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-nature-slate">Email<input required name="email" type="email" className="mt-2 w-full border-b border-nature-forest/20 bg-transparent py-3 text-base font-normal normal-case tracking-normal text-nature-forest outline-none placeholder:text-nature-slate/70 focus:border-nature-cobalt" placeholder="you@example.com" /></label>
            <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-5 border-t border-dashed border-nature-forest/25 pt-6"><button type="submit" disabled={isIssuing} className="inline-flex items-center gap-2 rounded-full bg-nature-forest px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] disabled:cursor-wait disabled:opacity-80">{isIssuing ? "Boarding pass issued" : "Issue my travel pass"} <ArrowRight size={16} /></button><span className="font-mono text-[9px] tracking-[0.18em] text-nature-slate">TRAVEL WELL / 360</span></div>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-20 grid max-w-5xl gap-x-10 gap-y-7 border-y border-white/15 py-9 text-left sm:grid-cols-2 lg:grid-cols-3"
        >
          {CONTACT.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ x: 4 }}
              className="group flex items-start gap-3"
            >
              <span className="mt-0.5 text-white/55 transition-colors group-hover:text-white">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <span className="max-w-xs text-sm leading-relaxed text-white/75 transition-colors group-hover:text-white">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="mx-auto mt-9 flex max-w-5xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-bold uppercase tracking-[0.13em] text-white/55 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="text-white/60 transition-colors hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Classic 360 Holidays. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
