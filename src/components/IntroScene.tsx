import type { FC } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const IntroScene: FC = () => {
  const navigate = useNavigate();
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.97,
    },
  };

  const pageTransition: any = {
    duration: 0.9,
    delay: 0.5,
    ease: "easeOut",
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="absolute top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 lg:-translate-x-2/3 -translate-y-1/2 flex flex-col items-center lg:items-end gap-3 text-center lg:text-right w-[90%] md:w-[60%]"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#d9a926] font-bold">
        العيد بيقرب
      </h1>
      <h3 className="text-3xl md:text-4xl lg:text-5xl text-white leading-15">
        وجايب معاه فرحة تستاهل نشاركها مع حبايبنا
      </h3>
      <button
        onClick={() => {
            navigate("/name");
        }}
        className="relative overflow-visible px-6 py-3 rounded-full font-medium  bg-[#d9a926] text-white mt-4 hover:bg-[#c18e1f] hover:cursor-pointer transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
      >
        شارك الفرحة
      </button>
    </motion.div>
  );
};
export default IntroScene;
