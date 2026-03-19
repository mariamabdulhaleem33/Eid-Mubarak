import { motion } from "motion/react";
import StarsBackground from "./StarsBackground";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SparklesEffect from "../Sparkles";
import { toast } from "react-toastify";
import oldPaper from "../../assets/old-paper.png";
import { Balloon, BookText, Heart, Link2, CircleArrowLeft } from "lucide-react";
import { messages } from "../../data/messages";
import { useEffect, useState } from "react";

const EidGreetingScene = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "صديقي";

  const [message, setMessage] = useState("");

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("تم نسخ لينك التهنئة! شاركه مع أصدقائك");
  };

  useEffect(() => {
    setMessage(getRandomMessage());
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white">
      <StarsBackground />
      <motion.img
        loading="lazy"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        src={oldPaper}
        alt="old paper"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-120  lg:w-150  "
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative  w-110 lg:w-150 text-gray-800 px-10 py-6"
      >
        <h2 className="text-sm sm:text-lg md:text-xl lg:text-3xl flex justify-center items-center font-semibold text-center mb-1 sm:mb-2 lg:mb-4">
          <Balloon fill="yellow" />
          <Heart fill="purple" />
          عيد فطر سعيد يا {name}
        </h2>

        <p className="w-full max-h-25 overflow-auto text-xs sm:text-sm md:text-lg lg:text-xl text-center text-amber-900 leading-relaxed mb-1 sm:mb-2 lg:mb-6">
          {message}
        </p>

        <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 lg:gap-3">
          <button
            className="flex text-xs sm:text-sm md:text-lg gap-2 hover:cursor-pointer"
            onClick={handleCopyLink}
          >
            انسخ رابط التهنئة{" "}
            <Link2 className="text-xs sm:text-sm md:text-lg" color="green" />
          </button>

          <button
            className="flex text-xs sm:text-sm md:text-lg gap-2 hover:cursor-pointer"
            onClick={() => navigate("/about-eid")}
          >
            اعرف أكتر عن عيد الفطر
            <BookText className="text-xs sm:text-sm md:text-lg" color="teal" />
          </button>
          <button
            className="flex text-xs sm:text-sm md:text-lg gap-2 hover:cursor-pointer"
            onClick={() => navigate("/name")}
          >
            تغيير الاسم
            <CircleArrowLeft
              className="text-xs sm:text-sm md:text-lg"
              color="teal"
            />
          </button>
        </div>

        <p className="mt-2 sm:mt-4 lg:mt-6 flex justify-center items-center gap-1 text-xs sm:text-sm md:text-lg  text-right">
          <span className="font-bold text-orange-600">
            <Link to="https://www.linkedin.com/in/mariam-abdulhaleem/">
              مريم عبد الحليم
            </Link>
          </span>
          صُنع بواسطة
        </p>
      </motion.div>
      <SparklesEffect />
    </div>
  );
};

export default EidGreetingScene;
