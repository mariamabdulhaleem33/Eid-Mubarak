import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutEidScene = () => {
  const navigate = useNavigate();

  // مصفوفة المعلومات بالعامية اللي جهزناها
  const eidInfo = [
    {
      title: " إيه هو العيد؟",
      desc: "ده أول فرحة لينا كمسلمين، بييجي أول يوم في شوال بعد صيام رمضان. وسموه 'فطر' عشان ده أول يوم بنرجع فيه نفطر عادي، وهو يوم الجايزة اللي بنفرح فيه بتمام الطاعة وصلاة العيد سوا."
    },
    {
      title: " ليه بعد رمضان؟",
      desc: "العيد هدية ومكافأة من ربنا للصايمين عشان يفرحوا بصبرهم. وكمان هو يوم 'جبر خواطر' بنطلع فيه زكاة الفطر عشان الكل يفرح ويتبسط، غني وفقير."
    },
    {
      title: " بنعمل إيه فيه؟",
      desc: "الفرحة بتستمر 3 أيام، بتبدأ بصلاة العيد ولبسنا الجديد، وبعدها بننزل نعيد على أهلنا وقرايبنا، وطبعاً مابيكملش من غير لمة العيلة وحلويات العيد المبهجة."
    }
  ];

  return (
    <div className="fixed inset-0 w-full min-h-screen flex items-center justify-center bg-[#0b1d3a]/50 z-50 px-4 py-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/95 text-gray-800 rounded-2xl p-4 md:p-10 max-w-3xl relative"
      >

        <div className="grid grid-cols-1 gap-4 mb-6">
          {eidInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group p-5 rounded-2xl bg-[#0b1d3a]/5 border-r-4 border-[#d9a926] hover:bg-[#d9a926]/5 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-[#0b1d3a] mb-2 flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex gap-2 px-10 py-3 rounded-full bg-[#d9a926] text-white font-bold shadow-lg shadow-[#d9a926]/30 hover:bg-[#c18e1f] transition-all"
          >
            رجوع للتهنئة <Sparkle className="text-sm"/>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutEidScene;