import { motion } from "framer-motion";

const InfoCard = ({ icon: Icon, title, description }) => {

  return (
    <motion.div
      className="flex items-start gap-5 p-6 bg-white"
    >
      {/* Icon with hover color change */}
      <motion.div
  whileHover={{ scale: 1.1 }}
  className="w-14 h-14 rounded-full flex items-center justify-center 
             bg-blue-500 text-white
             border-2 border-transparent
             hover:border-blue-500 
             hover:bg-white hover:text-blue-600 
             transition-all duration-300 cursor-pointer"
>
  <Icon className="w-8 h-8" />
</motion.div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;