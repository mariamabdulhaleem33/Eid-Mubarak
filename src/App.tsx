import bg from "./assets/bg.png";
import eid from "./assets/eidmubarak.png";
import { motion } from "motion/react";
import { Outlet } from "react-router-dom";
import SparklesEffect from "./components/Sparkles";

import { ToastContainer } from "react-toastify";

function App() {
  const transition: any = {
    duration: 0.9,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <div className="relative">
      <img src={bg} className="h-screen w-full object-cover" alt="bg" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
        src={eid}
        className="absolute top-2 right-0 w-1/3 md:w-1/6 opacity-70"
        alt="eid"
      />
      <Outlet />
      <SparklesEffect />
      <ToastContainer closeButton={false} hideProgressBar position="bottom-right" />
    </div>
  );
}

export default App;
