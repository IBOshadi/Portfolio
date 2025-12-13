// src/components/TestimonialCarousel.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";
import TestimonialCard from "../components/TestimonialCard";
import { containerVariants, itemVariants } from "../animations/variants";
import image1 from "../assets/img16.png";
import image2 from "../assets/img17.jpg";

const testimonials = [
  {
    image: image2,
    name: "Ananda Gunathilaka",
    designation: "Director at Royal Insurance Brokers",
    comment: "The HR management system developed by Oshadi has streamlined our HR processes, making them more efficient and user-friendly. Highly recommended!",
  },
  {
    image: image2,
    name: "Gayan Gamage",
    designation: "Director at Retail Target Software Solutions",
    comment: "Oshadi continues to perform her duties with exceptional dedication and professionalism and remains in excellent standing within the organization",
  },
  {
    image: image1,
    name: "Organization",
    designation: "Kingslake Engineering Solutions",
    comment: "She successfully implemented the style classification model using CNNs, and fabric flow detection system that significantly improving our image recognition capabilities.",
  },
  {
    image: image1,
    name: "Organization",
    designation: "Miracle Creative Solutions",
    comment: "Delivered a face recognition based attendance system and a hr management system that boosted our operational efficiency. Outstanding work!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="min-h-screen bg-[#f4fafd]"
      >
      <div className="p-5 md:p-10">
        <motion.div variants={itemVariants}>
          <SectionHeading title="Testimonials" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-600 "
        >
          Happy clients, successful projects — a few kind words from people I’ve helped.
        </motion.p>

        {/* Carousel Container */}
        <div
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
  <motion.div
    className="flex"
    animate={{
      x: `-${currentIndex * (window.innerWidth >= 1024 ? 33.333 : 100)}%`,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className={`flex-shrink-0 px-4 ${
          window.innerWidth >= 1024 ? "w-1/3" : "w-full"
        }`}
      >
        <div className="max-w-md mx-auto">
          <TestimonialCard {...testimonial} />
        </div>
      </div>
    ))}
  </motion.div>
</div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-blue-600 w-10 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;