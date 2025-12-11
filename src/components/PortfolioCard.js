// src/components/ImageCard.jsx
import { motion } from "framer-motion";

const ImageCard = ({ image, title, description = "", onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group"
      whileHover={{ 
        scale: 1.05, 
        rotateX: -5, // Tilt up (3D effect)
        rotateY: 5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay (fades in on hover) */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h3
            className="text-white text-2xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {title}
          </motion.h3>
          {description && (
            <motion.p
              className="text-white/80 text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCard;