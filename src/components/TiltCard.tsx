import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TiltCard({ children, className = "", delay = 0 }: TiltCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}