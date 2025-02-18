import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigation hooks
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to home first
      navigate("/", { replace: true });

      // Ensure homepage loads first before scrolling
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const offset = 50;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      }, 300);
    } else {
      // If already on the homepage, scroll instantly
      const section = document.getElementById(id);
      if (section) {
        const offset = 50;
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-75 ease-out ${
          scrolled || isOpen
            ? "bg-white text-gray-900 shadow-md"
            : "bg-transparent text-white"
        }`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={scrolled || isOpen ? "logo2.png" : "logo1.png"}
              alt="Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain cursor-pointer transition-colors duration-75 ease-out"
              onClick={() => scrollToSection("landing")}
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-10 text-base lg:text-lg font-medium items-center">
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("about")}>
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("partners")}>
              Partners
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("services")}>
              Solutions
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("ConsultingServices")}>
              Services
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
              onClick={() => scrollToSection("contact")}>
              Contact Us
            </li>
          </ul>

          {/* Buttons Section */}
          <div className="hidden lg:flex space-x-4">
            <a
              href="/Sanaya Company Profile Digital.pdf"
              download
              className="px-5 py-2 rounded-lg shadow-md transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600 flex items-center">
              Download Company Profile
            </a>
            <a
              href="/reference_list.pdf"
              download
              className="px-5 py-2 rounded-lg shadow-md transition-all duration-300 bg-green-500 text-white hover:bg-green-600 flex items-center">
              Download References List
            </a>
          </div>

          {/* Mobile Menu Toggle */}
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
          <div className="lg:hidden bg-white text-gray-900 shadow-md animate-slideDown p-4">
            <ul className="flex flex-col space-y-4 text-lg font-medium text-center">
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
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors duration-75"
                onClick={() => scrollToSection("contact")}>
                Contact Us
              </li>
              <li className="mt-4">
                <a
                  href="/company_profile.pdf"
                  download
                  className="block w-full text-center px-4 py-2 rounded-lg transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600">
                  Download Profile
                </a>
              </li>
              <li>
                <a
                  href="/reference_list.pdf"
                  download
                  className="block w-full text-center px-4 py-2 rounded-lg transition-all duration-300 bg-green-500 text-white hover:bg-green-600">
                  Download References
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
