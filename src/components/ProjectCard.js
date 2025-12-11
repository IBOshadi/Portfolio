// src/components/ProjectModal.jsx
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Click outside or press Escape to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-md shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        >
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-full object-cover p-6"
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-blue-600 text-lg mt-1">{project.description}</p>
              </div>
              
            </div>

            {/* Project Info List */}
            <dl className="space-y-4 text-gray-700">
              {project.category && (
                <>
                  <div className="flex">
                    <dt className="font-semibold w-32">Category:</dt>
                    <dd>{project.category}</dd>
                  </div>
                </>
              )}
              {project.client && (
                <>
                  <div className="flex">
                    <dt className="font-semibold w-32">Client:</dt>
                    <dd>{project.client}</dd>
                  </div>
                </>
              )}
              {project.date && (
                <>
                  <div className="flex">
                    <dt className="font-semibold w-32">Project date:</dt>
                    <dd>{project.date}</dd>
                  </div>
                </>
              )}
              {project.url && (
                <>
                  <div className="flex">
                    <dt className="font-semibold w-32">Project URL:</dt>
                    <dd>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {project.url.replace(/^https?:\/\//, "")}
                      </a>
                    </dd>
                  </div>
                </>
              )}
            </dl>

            {/* Long Description */}
            {project.details && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Project Information
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {project.details}
                </p>
              </div>
            )}

{project.technologies && (
  
  <div className="mt-12">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Technology Stack
    </h3>

    <div className="flex flex-wrap gap-3">
      {project.technologies.split(",").map((tech, index) => {
        const cleanTech = tech.trim();
        if (!cleanTech) return null;

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-gray-700 shadow-lg"
          >
            {cleanTech}
          </motion.span>
        );
      })}
    </div>
  </div>
)}
           
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectModal;