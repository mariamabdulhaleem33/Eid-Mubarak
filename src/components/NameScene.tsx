import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";

const NameScene = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center  gap-5 text-center  w-[90%] md:w-[60%] "
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#d9a926] font-medium leading-12">
        ربنا أتم علينا نعمته بتمام الصيام، وهدانا العيد مكافأة عشان قلوبنا ترتاح
        وتفرح
      </h2>

      <p className="text-white text-xl md:text-2xl lg:text-3xl">
      افرح و شارك فرحتك مع حبايبك
      </p>

      <input
        type="text"
        placeholder="اكتب اسمك او اسم حبايبك"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" max-w-sm px-6 py-2 rounded-full text-gray-300 text-lg bg-black/20 placeholder-gray-300/60 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition text-center"
      />

      <button
        onClick={() =>
          navigate(`/celebration?name=${encodeURIComponent(name)}`)
        }
        className="px-6 py-3 rounded-full font-medium  bg-[#d9a926] text-white mt-4 hover:bg-[#c18e1f] hover:cursor-pointer transition-colors duration-300 text-md md:text-lg lg:text-xl"
      >
       يلا نعيّد سوا
      </button>
    </motion.div>
  );
};

export default NameScene;
