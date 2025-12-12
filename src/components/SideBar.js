// components/SideBar.jsx
import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Wrench,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import image2 from "../assets/img2.jpeg";

const menuIcons = {
  Home: Home,
  About: User,
  Resume: FileText,
  Portfolio: Briefcase,
  Services: Wrench,
  Contact: Mail,
};

export default function Sidebar({ items, onClose, isSmallScreen }) {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    if (isSmallScreen && onClose) onClose();
  };

  return (
    <div className="min-h-screen bg-[#040b14] py-12 px-8 flex flex-col items-center overflow-y-auto">
      {/* Profile */}
      <div className="relative group mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#040b14] shadow-2xl ring-4 ring-gray-800/50 transition-all duration-500 group-hover:scale-105 group-hover:ring-cyan-500/30">
          <img
            src={image2}
            alt="Oshadi Irugalbandara"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white text-center tracking-wide mb-10">
        Oshadi Irugalbandara
      </h1>

      {/* === SOCIAL ICONS - NOW WITH CORRECT COLORS === */}
      <div className="flex gap-5 mb-12">
        {[
          { Icon: MessageCircle, href: "https://wa.me/94715198343", color: "hover:bg-[#25D366]" },
          { Icon: Github,       href: "https://github.com/IBOshadi",                     color: "hover:bg-white hover:text-black" },
          { Icon: Linkedin,     href: "https://www.linkedin.com/in/oshadi-irugalbandara/", color: "hover:bg-[#0077b5]" },
          { Icon: Facebook,     href: "https://www.facebook.com/profile.php?id=100072485026589", color: "hover:bg-[#1877f2]" },
          { Icon: Instagram,    href: "https://www.instagram.com/oshadi_irugalbandara/", gradient: true },
        ].map(({ Icon, href, color, gradient }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              bg-gray-800 text-white
              transition-all duration-300 hover:scale-125 hover:shadow-2xl
              ${gradient ? "hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500" : color}
            `}
          >
            <Icon className="w-6 h-6" strokeWidth={2.2} />
          </a>
        ))}
      </div>

      {/* === NAVIGATION MENU === */}
      <nav className="w-full">
        <ul className="space-y-5">
          {items.map((item) => {
            const Icon = menuIcons[item.label] || Home;
            const isActive = activeSection === item.id;

            return (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                role="button"
                tabIndex={0}
                className="w-full cursor-pointer group"
              >
                <div className="flex items-center gap-6 w-full text-white text-lg font-medium select-none transition-all duration-300 hover:text-gray-200">
                  {/* Icon Circle */}
                  <div
                    className={`
                      w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center
                      shadow-md transition-all duration-300
                      ${isActive  
                        ? "bg-white text-black scale-110 ring-4"
                        : "bg-gray-800 group-hover:bg-white group-hover:text-black"
                        }
                    `}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <span className="tracking-wide">{item.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}