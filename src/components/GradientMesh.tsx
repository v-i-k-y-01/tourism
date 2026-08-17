import { motion } from "framer-motion";

interface GradientMeshProps {
  className?: string;
  variant?: "hero" | "section";
}

export default function GradientMesh({ className = "", variant = "section" }: GradientMeshProps) {
  const intensity = variant === "hero" ? "opacity-100" : "opacity-60";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className={`absolute inset-0 ${intensity}`}
      >
        <div className="absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-nature-azure/30 blur-[110px] animate-mesh-move" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-nature-forest/30 blur-[110px] animate-mesh-move-slow" />
        <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-nature-cobalt/20 blur-[110px] animate-mesh-move" />
      </motion.div>
    </div>
  );
}
