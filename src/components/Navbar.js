import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const downloadFile = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-75 ${
        scrolled || isOpen
          ? "bg-white text-gray-900 shadow-md"
          : "bg-transparent text-white"
      }`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-3">
        <img
          src={scrolled || isOpen ? "/logo2.png" : "/logo1.png"}
          alt="Logo"
          className="h-12 sm:h-14 lg:h-16 cursor-pointer"
          onClick={() => scrollToSection("landing")}
        />

        <ul className="hidden lg:flex space-x-10 text-base font-medium">
          {[
            { label: "About Us", id: "about" },
            { label: "Partners", id: "partners" },
            { label: "Solutions", id: "services" },
            { label: "Services", id: "ConsultingServices" },
            { label: "Contact Us", id: "contact" },
          ].map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection(item.id)}>
              {item.label}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => downloadFile("Sanaya Company Profile Digital.pdf")}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Download Profile
          </button>
          <button
            onClick={() => downloadFile("Sanaya Reference List.pdf")}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Download References
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white text-gray-900 shadow-md p-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-center">
            {[
              { label: "About Us", id: "about" },
              { label: "Partners", id: "partners" },
              { label: "Solutions", id: "services" },
              { label: "Services", id: "ConsultingServices" },
              { label: "Contact Us", id: "contact" },
            ].map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => scrollToSection(item.id)}>
                {item.label}
              </li>
            ))}
            <li className="mt-4">
              <button
                onClick={() =>
                  downloadFile("Sanaya Company Profile Digital.pdf")
                }
                className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Download Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => downloadFile("Sanaya Reference List.pdf")}
                className="block w-full text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Download References
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
