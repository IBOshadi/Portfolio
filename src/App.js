// App.jsx
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Sidebar from "./components/SideBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ServicesPage from "./Pages/ServicesPage";
import TestamonialPage from "./Pages/TestimonialsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageSections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth <= 768;
      setIsSmallScreen(small);
      if (!small) setSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll on mobile when sidebar open
  useEffect(() => {
    if (isSmallScreen && sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSmallScreen, sidebarOpen]);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* ==================== SIDEBAR (NO SHADOW AT ALL) ==================== */}
      {(!isSmallScreen || sidebarOpen) && (
        <div
          className={`
            ${
              isSmallScreen
                ? "fixed inset-y-0 left-0 z-50 w-80"
                : "w-80 flex-shrink-0"
            }
            h-full bg-[#040b14
            transition-transform duration-300 ease-in-out
            ${
              isSmallScreen && !sidebarOpen
                ? "-translate-x-full"
                : "translate-x-0"
            }
          `}
          // NO shadow, NO box-shadow, clean edge
        >
          <div className="h-full overflow-y-auto">
            <Sidebar
              items={pageSections}
              onClose={() => setSidebarOpen(false)}
              isSmallScreen={isSmallScreen}
            />
          </div>
        </div>
      )}

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Hamburger */}
        {isSmallScreen && (
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="fixed top-5 left-5 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full text-gray-600 border border-white/20"
          >
            {sidebarOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        )}
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="resume">
          <ResumePage />
        </section>
        <section id="portfolio">
          <PortfolioPage />
        </section>
        <section id="services">
          <ServicesPage />
          <TestamonialPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </div>

      {/* ==================== MOBILE BACKDROP ==================== */}
      {isSmallScreen && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
