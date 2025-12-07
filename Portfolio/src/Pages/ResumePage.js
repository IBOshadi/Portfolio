// Pages/ResumePage.jsx
import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";

// Animation Variants (same as About page — clean & reusable)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Resume = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="p-6 md:p-10 bg-white min-h-screen"
    >
      <motion.div variants={itemVariants}>
        <SectionHeading title="Resume" />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-10 text-justify text-gray-700 text-lg leading-relaxed"
      >
        AI & Software Engineer with expertise in machine learning, robotics, and
        full-stack development. Passionate about building intelligent, scalable
        systems that turn complex challenges into efficient, real-world solutions.
      </motion.p>

      {/* Two Columns: Education & Experience */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* === EDUCATION COLUMN === */}
        <motion.div variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-10"
          >
            Education
          </motion.h2>

          <div className="space-y-10">
            {[
              {
                degree: "MSc Control Robotics and Intelligent Automation",
                school: "Coventry University, England, UK",
                period: "Reading",
              },
              {
                degree: "BSc (Hons) Artificial Intelligence and Data Science",
                school: "Robert Gordon University, Scotland, UK",
                period: "2021 – 2024",
              },
              {
                degree: "Bachelor of Information Technology",
                school: "University of Colombo, School of Computing, Sri Lanka",
                period: "2021 – 2024",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-5 group"
              >
                <span className="text-blue-600 text-3xl font-bold flex-shrink-0 transition-transform group-hover:scale-125">
                  ›
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 mt-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    {edu.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === EXPERIENCE COLUMN === */}
        <motion.div variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-10"
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-10">
            {[
              {
                role: "Web and Mobile Developer",
                company: "Retail Target Software Solutions (Pvt) Ltd",
                period: "Dec 2024 – Dec 2025",
              },
              {
                role: "Full-Stack Developer",
                company: "Miracle Creative Solutions",
                period: "Sept 2024 – Dec 2024",
              },
              {
                role: "Intern AI Developer",
                company: "Kignslake Engineering Systems",
                period: "July 2022 - July 2023",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-5 group"
              >
                <span className="text-blue-600 text-3xl font-bold flex-shrink-0 transition-transform group-hover:scale-125">
                  ›
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {job.role}
                  </h3>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    {job.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Download Button with Hover Animation */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-14 md:mt-20"
      >
        <motion.a
          href="/resume.pdf"
          download="Oshadi_Irugalbandara_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-5 md:px-10 rounded-xl shadow-xl transition-all duration-300 text-lg"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download My Resume (PDF)
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Resume;