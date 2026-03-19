// components/StarsBackground.tsx
import { motion } from "motion/react";

const stars = Array.from({ length: 20 });

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-yellow-300 opacity-70"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + Math.random() * 200,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );
};

export default StarsBackground;