// components/HomePage.jsx
import React, { useState, useEffect } from "react";
import profileImg from "../assets/img1.jpeg";

export default function HomePage() {
  const fullText = "Exploring the Frontiers of AI, Software Engineering & Robotics";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const i = loop % (fullText.length + 15);
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, i + 1));
        if (i === fullText.length) setTimeout(() => setIsDeleting(true), 1800);
      } else {
        setText(fullText.substring(0, i));
        if (i === 0) setIsDeleting(false);
      }
      setLoop(loop + 1);
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timer);
  }, [loop, isDeleting]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={profileImg}
        alt="Oshadi Irugalbandara"
        className="
          absolute inset-0 w-full h-full
          object-cover object-center
         
          scale-125
          sm:scale-115
          md:scale-110
          lg:scale-105
          xl:scale-100
        "
      />

      {/* Subtle dark overlay only on the image */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content - Full width on mobile, right side on desktop */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-16 px-8
                      md:ml-2 md:justify-end md:pb-24 md:px-12 lg:px-16">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-black leading-none">
            Oshadi<br />Irugalbandara
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light tracking-wider opacity-95">
            {text}
            <span className="inline-block w-1 ml-1 bg-white animate-blink">|</span>
          </p>
        </div>
      </div>
    </div>
  );
}