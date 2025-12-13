// Pages/AboutPage.jsx
import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";
import InfoRow from "../components/InfoRow";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import image2 from "../assets/img2.jpeg";
import {
  FaceSmileIcon as Smile,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon as Headphones,
} from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../animations/variants";

const AboutPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="p-5 md:p-10 bg-[#ffffff]">
        <motion.div variants={itemVariants}>
          <SectionHeading title="About" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-10 text-justify text-gray-800 "
        >
          Experienced AI and software developer with software development,
          machine learning, and data analysis and robotics skills, passionate
          about harnessing advanced technologies for innovative technical
          solutions.
        </motion.p>

        {/* Profile + Info Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row mt-10 md:mt-15 gap-10 md:gap-16 max-w-7xl mx-auto"
        >
          <div className="w-full md:w-1/3">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={image2}
              alt="Oshadi Irugalbandara"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="w-full md:w-2/3">
            <motion.p className="text-justify text-2xl font-bold text-gray-600 tracking-tight mt-4 md:mt-16">
              AI Engineer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-justify text-gray-800"
            >
              Experienced AI and software developer with a strong background in
              full-stack software development, machine learning, deep learning,
              data analysis, and robotics...
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col md:flex-row mt-10 gap-8"
            >
              <div className="w-full md:w-1/2">
                <div className="space-y-6 p-6 max-w-lg font-sans bg-gray-50 rounded-xl">
                  <InfoRow label="Birthday" value="28 March 2000" />
                  <InfoRow label="Location" value="Coventry, England" />
                  <InfoRow label="Email" value="iboshadi@gmail.com" />
                  <InfoRow label="Phone" value="+94 715198343" />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="space-y-6 p-6 max-w-lg font-sans bg-gray-50 rounded-xl">
                  <InfoRow label="Age" value="25" />
                  <InfoRow label="Degree" value="Master" />
                  <InfoRow
                    label="Website"
                    value={
                      <a
                        href="https://portfolio-opal-one-m4fkujetv2.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#3b82f6]"
                      >
                        Visit Website
                      </a>
                    }
                  />
                  <InfoRow
                    label="Upwork"
                    value={
                      <a
                        href="https://www.upwork.com/freelancers/~0138a519cc1c237698"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#3b82f6]"
                      >
                        Available
                      </a>
                    }
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          className="max-w-7xl mx-auto mt-16 md:mt-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div variants={itemVariants}>
              <StatsCard
                icon={<Smile className="w-10 h-10" />}
                number="150"
                title="Happy Clients"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatsCard
                icon={<BriefcaseIcon className="w-10 h-10" />}
                number="20"
                title="Projects"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatsCard
                icon={<Headphones className="w-10 h-10" />}
                number="1453"
                title="Hours Of Support"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="bg-[#f4fafd]">
        <div className="p-5 md:p-10">
          <motion.div variants={itemVariants}>
            <SectionHeading title="Skills" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-10 max-w-5xl mx-auto px-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-6">
                {[
                  { label: "Web Development", percentage: 100 },
                  { label: "Mobile Development", percentage: 65 },
                  { label: "Software Development", percentage: 85 },
                  { label: "UI/UX Designing", percentage: 90 },
                  { label: "Data Science", percentage: 98 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    variants={itemVariants}
                    custom={i}
                  >
                    <ProgressBar {...skill} />
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                {[
                  { label: "Data Engineering", percentage: 75 },
                  { label: "AI Model Training", percentage: 95 },
                  { label: "Computer Vision", percentage: 87 },
                  { label: "NLP", percentage: 80 },
                  { label: "Robotics", percentage: 60 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    variants={itemVariants}
                    custom={i + 5}
                  >
                    <ProgressBar {...skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
