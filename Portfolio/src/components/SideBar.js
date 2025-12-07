import React from "react";
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
  MessageCircle // WhatsApp icon
} from "lucide-react";
import image2 from "../assets/img2.jpeg";

// Menu icons mapping
const menuIcons = {
  Home: Home,
  About: User,
  Resume: FileText,
  Portfolio: Briefcase,
  Services: Wrench,
  Contact: Mail,
};

export default function Sidebar({ items }) {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#040b14] py-12 px-6 sticky top-0 flex-shrink-0 z-50 overflow-y-auto">
      <div className="flex flex-col items-center">

        {/* Profile Image */}
        <div className="relative group">
          <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#040b14] shadow-2xl ring-4 ring-gray-800/50 transition-all duration-500 group-hover:scale-105 group-hover:ring-white/20">
            <img
              src={image2}
              alt="Oshadi Irugalbandara"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-white mt-4 text-center tracking-wide leading-tight">
          Oshadi Irugalbandara
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-8">
          {[
            { href: "https://wa.me/94715198343", icon: MessageCircle, bg: "bg-gray-800", hover: "hover:bg-[#25D366]" },
            { href: "https://github.com/IBOshadi", icon: Github, bg: "bg-gray-900", hover: "hover:bg-white hover:text-black" },
            { href: "https://www.linkedin.com/in/oshadi-irugalbandara/", icon: Linkedin, bg: "bg-gray-800", hover: "hover:bg-[#0077b5]" },
            { href: "https://www.facebook.com/profile.php?id=100072485026589", icon: Facebook, bg: "bg-gray-800", hover: "hover:bg-[#1877f2]" },
            { href: "https://www.instagram.com/oshadi_irugalbandara/?next=%2F", icon: Instagram, bg: "bg-gray-800", hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500" },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bg} ${social.hover} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl`}
                aria-label={social.icon.name}
              >
                <Icon className="w-5 h-5 text-white" strokeWidth={2.3} />
              </a>
            );
          })}
        </div>

        {/* Navigation Menu */}
        <nav className="mt-10 w-full">
          <ul className="flex flex-col gap-5 w-full">
            {items.map((item) => {
              const Icon = menuIcons[item.label] || Home;
              return (
                <li
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  onKeyDown={(e) => e.key === "Enter" && handleScroll(item.id)}
                  role="button"
                  tabIndex={0}
                  className="w-full cursor-pointer"
                >
                  <div className="flex items-center gap-4 w-full text-white text-lg font-medium group select-none transition-all duration-300 hover:text-gray-200">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300">
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
    </div>
  );
}
