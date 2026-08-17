import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ShieldCheck, LifeBuoy } from "lucide-react";
import GradientMesh from "./GradientMesh";

const COUNTED_STATS = [
  { value: 2, suffix: " Lakh+", label: "Happy Clients" },
  { value: 10000, suffix: "+", label: "Successful Trips" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`;
      }),
    [springValue, suffix]
  );

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-nature-forest py-20 text-white sm:py-24">
      <GradientMesh variant="section" className="opacity-40" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
        {COUNTED_STATS.map(({ value, suffix, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-extrabold sm:text-4xl">
              <Counter value={value} suffix={suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-xl"
        >
          <ShieldCheck size={22} />
          <p className="text-3xl font-extrabold sm:text-4xl">100%</p>
          <p className="text-sm font-medium text-white/70">Safety & Security</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-xl"
        >
          <LifeBuoy size={22} />
          <p className="text-3xl font-extrabold sm:text-4xl">24/7</p>
          <p className="text-sm font-medium text-white/70">Support Available</p>
        </motion.div>
      </div>
    </section>
  );
}
