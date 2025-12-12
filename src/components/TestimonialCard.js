// src/components/TestimonialCard.jsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({ image, name, designation, comment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative max-w-lg mx-auto"
    >
      {/* Speech Bubble */}
      <div className="relative bg-white rounded-md shadow-lg p-8 pt-12 pb-12 min-h-64 flex flex-col justify-between">
        {/* Opening Quote – Top Left */}
        <Quote className="absolute bottom-6 right-6 w-5 h-5 text-blue-500 opacity-20 scale-x-[-1] rotate-[-90]" />

        {/* Closing Quote - Bottom Right */}

        <Quote className="absolute top-6 left-6 w-5 h-5 text-blue-500 opacity-20 scale-x-[-1] rotate-270" />
        {/* Comment */}
        <p className="text-gray-700 text-base leading-relaxed text-center italic relative z-10 flex-1 flex items-center justify-center">
          {comment}
        </p>

        {/* Tail */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <svg width="40" height="25" viewBox="0 0 40 25" className="fill-white drop-shadow-md">
            <path d="M20 25 L0 0 L40 0 Z" />
          </svg>
        </div>
      </div>

      {/* Avatar + Name – perfectly centered under the tail */}
      <div className="flex flex-col items-center mt-10">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-blue-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="mt-4 text-xl font-bold text-gray-900 text-center">{name}</h3>
        <p className="text-gray-600 text-sm text-center">{designation}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;