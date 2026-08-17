import { motion, type Variants } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

interface RevealTextProps {
  text: string;
  as?: Tag;
  className?: string;
  wordClassName?: string;
  delay?: number;
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RevealText({
  text,
  as = "p",
  className = "",
  wordClassName = "",
  delay = 0,
  once = true,
}: RevealTextProps) {
  const MotionTag = motion[as] as typeof motion.div;
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.15em] mr-[0.25em] align-bottom">
          <motion.span variants={word} className={`inline-block ${wordClassName}`}>
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
