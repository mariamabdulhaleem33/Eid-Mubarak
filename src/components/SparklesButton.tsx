
import { useState } from "react";
import SparklesEffect from "./Sparkles";

const SparkleButton = ({ children, onClick }: any) => {
  const [sparkle, setSparkle] = useState(false);

  const handleClick = () => {
    setSparkle(true);
    onClick?.();

    setTimeout(() => setSparkle(false), 700);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-visible px-6 py-3 rounded-full font-medium  bg-[#d9a926] text-white mt-4 hover:bg-[#c18e1f] hover:cursor-pointer transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
    >
      {children}
      {sparkle && <SparklesEffect />}
    </button>
  );
};

export default SparkleButton;