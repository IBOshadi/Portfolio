import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";
import ServiceCard from "../components/ServiceCard";
import { containerVariants, itemVariants } from "../animations/variants";
import {
  PaintBrushIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  SparklesIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="p-6 md:p-10 bg-white min-h-screen"
    >
      <motion.div variants={itemVariants}>
        <SectionHeading title="Services" />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-10 text-justify text-gray-700 text-lg leading-relaxed"
      >
        I deliver end-to-end solutions in AI and software development,
        specializing in natural language processing (NLP), computer vision, data
        science, and data engineering, alongside modern full-stack web and
        mobile applications. From building intelligent chatbots, image
        recognition systems, and predictive analytics pipelines to crafting
        responsive frontends,backends, and intuitive mobile apps with clean
        UI/UX design. I handle everything from concept to deployment. Available
        for freelance or long-term projects with a focus on scalable,
        production-ready results.
      </motion.p>
      <motion.div
        variants={containerVariants}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <ServiceCard
            icon={SparklesIcon}
            title="AI-Powered Web & Mobile Apps"
            description="Custom applications infused with ChatGPT, computer vision, recommendation systems, or generative AI features."
          />

          <ServiceCard
            icon={EyeIcon}
            title="Computer Vision Solutions"
            description="Object detection, facial recognition, medical imaging, quality inspection using YOLOv8, TensorFlow, and OpenCV."
          />

          <ServiceCard
            icon={ChatBubbleLeftRightIcon}
            title="Intelligent Chatbots & Agents"
            description="GPT-4 / Claude powered assistants with RAG, vector search (Pinecone), memory, and multi-platform deployment."
          />
          <ServiceCard
            icon={ChartBarIcon}
            title="Machine Learning & Data Science"
            description="Predictive models, NLP, computer vision, and production-grade MLOps pipelines using TensorFlow, PyTorch, and Scikit-learn."
          />

          <ServiceCard
            icon={PaintBrushIcon}
            title="UI/UX & Product Design"
            description="Pixel-perfect, responsive designs and interactive prototypes crafted in Figma. Design systems, accessibility, and user research-driven UX."
          />

          <ServiceCard
            icon={CpuChipIcon}
            title="Automation & AI Agents"
            description="Autonomous AI agents that can browse the web, fill forms, manage emails, run workflows, and integrate with any API using CrewAI, Playwright, and LangGraph."
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
