// src/components/TestimonialCarousel.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";
import TestimonialCard from "../components/TestimonialCard";
import { containerVariants, itemVariants } from "../animations/variants";
import image2 from "../assets/img2.jpeg";

const testimonials = [
  {
    image: image2,
    name: "Sarah Wilson",
    designation: "Product Designer at TechCorp",
    comment: "Working with Oshadi was a game-changer. The AI chatbot increased our engagement by 300% in just two weeks!",
  },
  {
    image: image2,
    name: "Michael Chen",
    designation: "CEO at StartupX",
    comment: "Delivered a production-ready computer vision system ahead of schedule. Professional, fast, and incredibly talented.",
  },
  {
    image: image2,
    name: "Emma Larsson",
    designation: "Founder at AIHealth",
    comment: "The medical image analysis model she built has transformed how we detect diseases. Absolute genius!",
  },
  {
    image: image2,
    name: "David Kim",
    designation: "CTO at FinTech Pro",
    comment: "Her RAG-powered chatbot with Pinecone integration saved us months of development. Highly recommend!",
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