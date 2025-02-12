import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Set up scroll listener once on mount.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to scroll to a section and close the mobile menu.
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Custom CSS for mobile menu slide-down animation */}
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-75 ease-out ${
          scrolled || isOpen
            ? "bg-white text-gray-900 shadow-md"
            : "bg-transparent text-white"
        }`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src={scrolled || isOpen ? "logo2.png" : "logo1.png"}
              alt="Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain cursor-pointer transition-colors duration-75 ease-out"
              onClick={() => scrollToSection("landing")}
            />
          </div>

          {/* Desktop Navigation Links (visible on lg and up) */}
          <ul className="hidden lg:flex space-x-16 text-base lg:text-lg font-medium">
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("about")}>
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("services")}>
              Services
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("partners")}>
              Partners
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("consulting")}>
              Consulting Services & Solutions
            </li>
          </ul>

          {/* Desktop Contact Button (visible on lg and up) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-4 py-2 rounded-full shadow-md transition-colors duration-75 ease-out ${
                scrolled || isOpen
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-500 hover:to-blue-600"
              }`}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button (visible below lg) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-transform duration-300 transform">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white text-gray-900 shadow-md animate-slideDown">
            <ul className="flex flex-col space-y-4 px-4 py-4 text-base">
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
                onClick={() => scrollToSection("about")}>
                About Us
              </li>
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
                onClick={() => scrollToSection("services")}>
                Services
              </li>
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
                onClick={() => scrollToSection("partners")}>
                Partners
              </li>
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
                onClick={() => scrollToSection("consulting")}>
                Consulting Services & Solutions
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-left px-4 py-2 rounded-full transition-colors duration-75 ease-out shadow-md bg-blue-500 text-white hover:bg-blue-600">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
