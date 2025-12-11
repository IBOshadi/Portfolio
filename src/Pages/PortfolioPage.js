// Pages/PortfolioPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";
import ImageCard from "../components/PortfolioCard"; // your hover card
import ProjectModal from "../components/ProjectCard"; // dark modal
import { containerVariants, itemVariants } from "../animations/variants";

// Import your images
import Img1 from "../assets/img3.jpg";
import Img2 from "../assets/img4.jpg";
import Img3 from "../assets/img5.png";
import Img4 from "../assets/img6.jpeg";
import Img5 from "../assets/img7.jpg";
import Img6 from "../assets/img8.jpg";
import Img7 from "../assets/img9.jpg";
import Img8 from "../assets/img10.jpeg";
import Img9 from "../assets/img11.jpg";
import Img10 from "../assets/img12.jpg";
import Img11 from "../assets/img13.png";
import Img12 from "../assets/img14.jpg";
import Img13 from "../assets/img15.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("ALL"); // ALL, AI, WEB

  const projects = [
    {
      image: Img7,
      title: "Retail Web",
      description: "Sales and stock dashboard system",
      details:
        "A retail web platform that provides an online sales and stock dashboard integrated with full inventory management.",
      category: "Web development • E-commerce",
      client: "Retail Target Software Solutions",
      date: "2025",
      url: "https://retailtarget.lk/",
      technologies:
        "ReactJS, Node.js, Express.js, MSSQL, REST APIs, Vercel, Flutter",
      id: "Web",
    },
    {
      image: Img8,
      title: "SyncFlow",
      description: "Real-time data sync",
      details:
        "Automated real-time data sync for continuous and consistent sales updates.",
      category: "Web development • SaaS",
      client: "DBlaq - One Galle Face",
      date: "2025",
      url: "",
      technologies:
        "Node.js, Express.js, MSSQL, REST APIs, WebSockets, Cron Jobs",
      id: "Web",
    },
    // Add the rest...
    {
      image: Img9,
      title: "BillBuzz",
      description: "Smart invoice system",
      details:
        "A system that sends the bill to the customer’s mobile phone via SMS, allowing them to download the e-bill instantly.",
      category: "Web Development • SaaS",
      client: "Retail Target Software Solutions",
      date: "2025",
      url: "",
      technologies:
        "Node.js, Express.js, SMS APIs, MSSQL, Google API, Database Watcher, Cron Jobs",
      id: "Web",
    },
    {
      image: Img10,
      title: "SmartHR",
      description: "Smart HR management system",
      details:
        "A smart HR management system that handles attendance, leave management, salary calculations, and employee information management.",
      category: "Web Development • Corporate",
      client: "Royal Insurance Brokers",
      date: "2025",
      url: "",
      technologies:
        "ReactJS, Node.js, Express.js, MySQL, REST APIs, Vercel, Figma",
      id: "Web",
    },
    {
      image: Img11,
      title: "StyleScan AI",
      description: "Style classification system",
      details:
        "A style classification system that uses image search techniques to suggest the most likely styles.",
      category: "Web Development • Apparel",
      client: "Star Garments",
      date: "2022",
      url: "",
      technologies:
        "ReactJS, Node.js, Express.js, Python, CNN, Image Search Algorithms",
      id: "AI",
    },
    {
      image: Img12,
      title: "TexVision",
      description: "Fabric flow detection system",
      details:
        "A fabric flow detection system that monitors and analyzes the movement of fabric in real-time to ensure smooth and efficient production.",
      category: "Web Development • Apparel",
      client: "Star Garments",
      date: "2022",
      url: "",
      technologies:
        "ReactJS, Node.js, Express.js, Python, CNN, Computer Vision",
      id: "AI",
    },
    {
      image: Img13,
      title: "TMS",
      description: "Transport Management System",
      details:
        "A Transport Management System with QR code-based payment for buses, enabling seamless and contactless ticketing.",
      category: "Web • Logistics",
      client: "SLIIT",
      date: "2023",
      url: "",
      technologies:
        "Angular, Node.js, Express.js, MySQL, REST APIs, QR Code Integration",
      id: "Web",
    },
    {
      image: Img1,
      title: "MathSmart",
      description: "AI-powered math solver",
      details:
        "An AI-powered math learning platform that helps students understand the steps of solving complex math word problems.",
      category: "AI • Education",
      client: "University Project",
      date: "2024",
      url: "",
      technologies:
        "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG, Figma",
      id: "AI",
    },
    {
      image: Img2,
      title: "DefCov",
      description: "Real time Covid-19 detector",
      details:
        "A real-time COVID-19 detection system that records respiratory sounds and analyzes them to determine whether a person is COVID-positive.",
      category: "Data Science • Healthcare",
      client: "University Project",
      date: "2022",
      url: "",
      technologies: "Hugging Face, Python, ReactJS, Flask, Librosa, CNN",
      id: "AI",
    },
    {
      image: Img3,
      title: "Smart Eye",
      description: "Real time incident detector",
      details:
        "A real-time incident detection system that identifies accidents and robberies instantly and triggers an alarm.",
      category: "AI • Security",
      client: "University Project",
      date: "2023",
      url: "",
      technologies: "ReactJS, Flask, Python, Flutter, AWS, Edge AI, CNN, Figma",
      id: "AI",
    },
    {
      image: Img4,
      title: "OncoBrain",
      description: "Brain tumor analysis",
      details:
        "A brain tumor analysis system that detects tumors in MRI scans and, when a tumor is identified, displays previously recorded similar cases along with the corresponding prescriptions and medical recommendations provided.",
      category: "AI • Healthcare",
      client: "University Project",
      date: "2024",
      url: "",
      technologies: "Python, CNN, Image Processing, Image Search Algorithms",
      id: "AI",
    },
    {
      image: Img5,
      title: "GeniRoute",
      description: "Smart routing engine",
      details:
        "A smart routing engine that uses genetic algorithms to optimize routes and inventory management.",
      category: "AI • Logistics",
      client: "University Project",
      date: "2024",
      url: "",
      technologies: "ReactJS, Genetic Algorithms, Python, Flask, Deep",
      id: "AI",
    },
    {
      image: Img6,
      title: "CardioAI",
      description: "Cardiology with XAI",
      details:
        "A cardiology diagnostic system enhanced with Explainable AI (XAI) to provide transparent and interpretable insights into cardiovascular assessments.",
      category: "AI • Healthcare",
      client: "University Project",
      date: "2024",
      url: "",
      technologies: "ReactJS, Flask, Python, CNN, LIME, SHAP, Grad-CAM",
      id: "AI",
    },
  ];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (filter === "ALL") return true;
    return project.id === filter;
  });

  const filters = ["ALL", "AI", "Web"];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="min-h-screen bg-[#f4fafd]"
      >
        <div className="p-5 md:p-10">
          <motion.div variants={itemVariants}>
            <SectionHeading title="Portfolio" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-justify text-gray-800"
          >
            Built modern, responsive web applications using ReactJS, AngularJS,
            Node.js, Flask, MySQL, and MSSQL for startups and businesses.
            Developed AI solutions including computer vision models for object
            detection, chatbots and automation tools using OpenAI APIs, genetic
            algorithm optimizations, and data science projects with predictive
            analytics and data visualization. All projects are clean,
            well-documented, deployed, and focused on delivering real value to
            users.
          </motion.p>

          <div className="flex justify-center mt-10 mb-10">
            <div className="flex gap-10 md:gap-16 ">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`
          relative pb-2 transition-all duration-300
          ${
            filter === item
              ? "text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }
        `}
                >
                  {item}

                  {/* Active Indicator – Blue underline */}
                  {filter === item && (
                    <motion.div
                      layoutId="activeFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="mt-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout // ← smooth animation when filtering!
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -12 }}
                >
                  <ImageCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* DARK MODAL */}
      <ProjectModal
        key={selectedProject?.title}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Portfolio;
