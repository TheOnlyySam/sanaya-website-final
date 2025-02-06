import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Helper function to scroll to a section by its id
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full py-2 z-50 transition-all duration-150 ease-out ${
        scrolled
          ? "bg-white text-gray-900 shadow-md"
          : "bg-transparent text-white"
      }`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* Clicking the logo scrolls to the landing section */}
          <img
            src={scrolled ? "logo2.png" : "logo1.png"}
            alt="Logo"
            className="h-16 w-auto object-contain transition-transform duration-0 ease-out cursor-pointer"
            onClick={() => scrollToSection("landing")}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-20 text-lg font-medium">
          <li
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            onClick={() => scrollToSection("about")}>
            About Us
          </li>
          <li
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            onClick={() => scrollToSection("services")}>
            Services
          </li>
          <li
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            onClick={() => scrollToSection("partners")}>
            Partners
          </li>
          <li
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            onClick={() => scrollToSection("consulting")}>
            Consulting Services & Solutions
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-4 py-2 rounded-full transition duration-300 ease-out shadow-md ${
              scrolled
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-500 hover:to-blue-600"
            }`}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
