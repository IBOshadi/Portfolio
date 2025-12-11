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
      image: Img1,
      title: "MathSmart",
      description: "AI-powered math solver",
      details: "An AI-powered math learning platform that helps students understand the steps of solving complex math word problems.",
      category: "AI • Education",
      client: "University Project",
      date: "2024",
      url: "",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img2,
      title: "DefCov",
      description: "Defect detection system",
      details: "...",
      category: "Computer Vision",
      client: "Manufacturing",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img3,
      title: "Smart Eye",
      description: "AI vision assistant",
      details: "...",
      category: "AI • Healthcare",
      client: "Hospital",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img4,
      title: "OncoBrain",
      description: "Cancer detection AI",
      details: "...",
      category: "AI • Medical",
      client: "Oncology Lab",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img5,
      title: "GeniRoute",
      description: "Smart routing engine",
      details: "...",
      category: "AI • Logistics",
      client: "Delivery Co",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img6,
      title: "CardioAI",
      description: "Heart disease prediction",
      details: "...",
      category: "AI • Health",
      client: "Cardio Clinic",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img7,
      title: "Retail Web",
      description: "E-commerce platform",
      details: "...",
      category: "Web • E-commerce",
      client: "Retail Inc",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "Web",
    },
    {
      image: Img8,
      title: "SyncFlow",
      description: "Real-time data sync",
      details: "...",
      category: "Web • SaaS",
      client: "Tech Startup",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "Web",
    },
    // Add the rest...
    {
      image: Img9,
      title: "BillBuzz",
      description: "RAG + LangChain + OpenAI",
      details:
        "Custom chatbot with retrieval-augmented generation for company knowledge base.",
      category: "Web Development • AI",
      client: "EdTech Startup",
      date: "15 Jan, 2025",
      url: "https://mathsmart.example.com",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img10,
      title: "SmartHR",
      description: "RAG + LangChain + OpenAI",
      details:
        "Custom chatbot with retrieval-augmented generation for company knowledge base.",
      category: "Web Development • AI",
      client: "EdTech Startup",
      date: "15 Jan, 2025",
      url: "https://mathsmart.example.com",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img11,
      title: "StyleScan AI",
      description: "RAG + LangChain + OpenAI",
      details:
        "Custom chatbot with retrieval-augmented generation for company knowledge base.",
      category: "Web Development • AI",
      client: "EdTech Startup",
      date: "15 Jan, 2025",
      url: "https://mathsmart.example.com",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img12,
      title: "TexVision",
      description: "RAG + LangChain + OpenAI",
      details:
        "Custom chatbot with retrieval-augmented generation for company knowledge base.",
      category: "Web Development • AI",
      client: "EdTech Startup",
      date: "15 Jan, 2025",
      url: "https://mathsmart.example.com",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "AI",
    },
    {
      image: Img13,
      title: "TMS",
      description: "Transport Management System",
      details: "...",
      category: "Web • Logistics",
      client: "LogiTrans",
      date: "2025",
      url: "#",
      technologies: "ReactJS, Flask, OpenAI API, Pinecone DB, LangChain, RAG",
      id: "Web",
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
          ${filter === item 
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
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
