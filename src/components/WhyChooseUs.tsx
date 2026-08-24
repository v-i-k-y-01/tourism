import { BadgeCheck, Headphones, Sparkles, WalletCards } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: "Experience That Matters",
    copy: "Years of travel expertise behind every smooth, safe, and memorable journey.",
  },
  {
    icon: Sparkles,
    title: "Customized Tour Packages",
    copy: "Every itinerary is shaped around your interests, pace, and budget—not a one-size-fits-all plan.",
  },
  {
    icon: Headphones,
    title: "24/7 Travel Support",
    copy: "Helpful support from your first enquiry until you are safely back home.",
  },
  {
    icon: WalletCards,
    title: "Flexible Planning",
    copy: "Clear options and thoughtful recommendations to help you travel with confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Why choose Classic 360</p>
          <RevealText
            as="h2"
            text="The details are where a great journey begins."
            className="font-display text-4xl font-semibold leading-none text-nature-forest sm:text-6xl"
          />
          <p className="mt-7 max-w-md leading-relaxed text-nature-slate">
            We go beyond booking trips. Classic 360 creates unforgettable travel experiences tailored to your comfort,
            needs, and dreams—with expert service, flexible packages, and dependable support.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, copy }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] bg-white p-7 sm:p-8"
            >
              <Icon size={26} className="text-nature-cobalt" strokeWidth={1.6} />
              <h3 className="mt-7 font-display text-2xl font-bold text-nature-forest">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nature-slate">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
