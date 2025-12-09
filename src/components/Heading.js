// src/components/SectionHeading.js
import React from "react";

const SectionHeading = ({
  title,
  className = "",
  lineColor = "bg-blue-500",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl mt-5 font-bold text-gray-900 tracking-tight">
        {title}
      </h2>

      {/* Thin Colored Underline */}
      <div className="absolute -bottom-3 left-0 w-12 h-1">
        <div className={`w-full h-full ${lineColor} rounded-full`} />
      </div>
    </div>
  );
};

export default SectionHeading;
