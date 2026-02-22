import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const useLightNavbar = isHomePage && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToElement(id), 300);
    } else {
      scrollToElement(id);
    }
  };

  const scrollToElement = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "About Us", id: "about" },
    { label: "Partners", id: "partners" },
    { label: "Solutions", id: "services" },
    { label: "Services", id: "ConsultingServices" },
    { label: "Shop", url: "https://sanayatechs.odoo.com/shop" },
    { label: "Our Team", path: "/our-team" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleNavItemClick = (item) => {
    if (item.url) {
      setIsOpen(false);
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.path) {
      setIsOpen(false);
      navigate(item.path);
      return;
    }

    scrollToSection(item.id);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-75 ${
        useLightNavbar ? "bg-transparent text-white" : "bg-white text-gray-900 shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-3">
        <img
          src={useLightNavbar ? "/logo1.png" : "/logo2.png"}
          alt="Logo"
          className="h-12 sm:h-14 lg:h-16 cursor-pointer"
          onClick={() => scrollToSection("landing")}
        />

        <ul className="hidden lg:flex space-x-10 text-base font-medium">
          {menuItems.map((item) => (
            <li
              key={item.path || item.id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => handleNavItemClick(item)}
            >
              {item.label}
            </li>
          ))}

        </ul>

        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="/Sanaya%20Company%20Profile.pdf"
            download
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Download Profile
          </a>
        </div>


        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white text-gray-900 shadow-md p-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-center">
            {menuItems.map((item) => (
              <li
                key={item.path || item.id}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleNavItemClick(item)}
              >
                {item.label}
              </li>
            ))}
            <li className="mt-2">
              <a
                href="/Sanaya%20Company%20Profile.pdf"
                download
                className="block w-full text-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Download Profile
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
