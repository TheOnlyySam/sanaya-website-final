import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Close dropdown on scroll
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, dropdownOpen]);

  return (
    <nav
      className={`fixed top-0 w-full py-6 z-50 transition-all duration-150 ease-out ${
        scrolled
          ? "bg-white text-gray-900 shadow-md"
          : "bg-transparent text-white"
      }`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={scrolled ? "logo2.png" : "logo1.png"} // Replace with your actual logo paths
            alt="Logo"
            className="h-16 w-auto object-contain transition-transform duration-0 ease-out"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-20 text-lg font-medium">
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-0">
            About Us
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-0">
            Services
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-0">
            Partners
          </li>
          <li className="relative">
            {/* Dropdown Trigger */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-blue-500 cursor-pointer flex items-center transition-colors duration-0">
              Solutions
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Mega Menu */}
            {dropdownOpen && (
              <div className="fixed top-24 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black shadow-lg rounded-md p-6 w-[800px] z-50 opacity-1 scale-100 animate-fade-in-down">
                <div className="grid grid-cols-3 gap-8">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/solution1"
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          Online Stores
                        </div>
                        <p className="text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solution2"
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          Segmentation
                        </div>
                        <p className="text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solution3"
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          Marketing CRM
                        </div>
                        <p className="text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/solution4"
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          Audience Management
                        </div>
                        <p className="text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solution5"
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          Creative Tools
                        </div>
                        <p className="text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solution6"
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          Marketing Automation
                        </div>
                        <p className="text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
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
