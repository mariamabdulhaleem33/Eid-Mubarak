import { motion } from "motion/react";

const stars = Array.from({ length: 100 });

const SparklesEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((_, i) => {
        const x = Math.random() * 900 - 30;
        const y = Math.random() * -900 - 40;

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 1],
              x,
              y,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute -left-145 bottom-0 lg:left-0 lg:bottom-0 text-yellow-300"
          >
            ✨
          </motion.span>
        );
      })}
    </div>
  );
};

export default SparklesEffect;
