import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// Sample partner data – update file names/paths as needed.
const partnersData = [
  {
    category: "Data Center and Digital Power",
    partners: [
      { name: "Partner A", logo: "/partners/Huawei.png", link: "#" },
      { name: "Partner B", logo: "/partners/Canovate Logo.png", link: "#" },
      { name: "Partner C", logo: "/partners/Vertiv.png", link: "#" },
      { name: "Partner D", logo: "/partners/schneider.png", link: "#" },
    ],
  },
  {
    category: "Structured Cabling",
    partners: [
      { name: "Partner D", logo: "/partners/Canovate Logo.png", link: "#" },
      { name: "Partner E", logo: "/partners/leviton.png", link: "#" },
      { name: "Partner F", logo: "/partners/linx.png", link: "#" },
    ],
  },
  {
    category: "IP Surveillance and Smart Home Solutions",
    partners: [
      { name: "Partner G", logo: "/partners/hawk.png", link: "#" },
      { name: "Partner K", logo: "/partners/tiandy.png", link: "#" },
      { name: "Partner K", logo: "/partners/bosch.png", link: "#" },
      { name: "Partner K", logo: "/partners/genetec.png", link: "#" },
      { name: "Partner H", logo: "/partners/axis.png", link: "#" },
      { name: "Partner I", logo: "/partners/nix.jpg", link: "#" },
      { name: "Partner J", logo: "/partners/bcdv.png", link: "#" },
      { name: "Partner K", logo: "/partners/brief.png", link: "#" },

      { name: "Partner L", logo: "/partners/veracity.webp", link: "#" },
    ],
  },
  {
    category: "IP PBX and Video Conferencing Systems",
    partners: [
      { name: "Partner M", logo: "/partners/3cxx.png", link: "#" },
      { name: "Partner N", logo: "/partners/grandstream.png", link: "#" },
      { name: "Partner O", logo: "/partners/fanvil.png", link: "#" },
    ],
  },
  {
    category: "Network and Security",
    partners: [
      { name: "Partner P", logo: "/partners/aruba.png", link: "#" },
      { name: "Partner Q", logo: "/partners/forcepoint.png", link: "#" },
      { name: "Partner R", logo: "/partners/Forinet.png", link: "#" },
      { name: "Partner S", logo: "/partners/kasper.png", link: "#" },
      { name: "Partner T", logo: "/partners/OIP.jpeg", link: "#" },
      { name: "Partner U", logo: "/partners/Unifi.jpeg", link: "#" },
    ],
  },
];

const Partners = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [autoSwitch, setAutoSwitch] = useState(true);

  // Auto-switch tabs every 3 seconds if autoSwitch is enabled.
  useEffect(() => {
    if (autoSwitch) {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % partnersData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeTab, autoSwitch]);

  // Disable auto-switching when a user clicks a tab.
  const handleTabClick = (index) => {
    setAutoSwitch(false);
    setActiveTab(index);
  };

  return (
    <>
      {/* Custom CSS for fade-in animation and hiding scrollbar */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.5s ease-out;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <section
        id="partners"
        className="py-16 px-4 lg:px-24 bg-gradient-to-br from-blue-50 to-white scroll-mt-20">
        <div className="container mx-auto">
          {/* Section Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-12"
            data-aos="fade-up">
            Our Partners
          </h2>

          {/* Horizontal Tab Navigation */}
          <div className="relative">
            <div
              className="flex overflow-x-auto no-scrollbar mb-2"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="flex flex-nowrap space-x-4">
                {partnersData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300 border border-blue-600 ${
                      activeTab === index
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}>
                    {item.category}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile scroll indicator for categories */}
            <div className="sm:hidden flex items-center justify-center mt-1">
              <FaArrowRight className="animate-bounce text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">
                Scroll to see more categories
              </span>
            </div>
          </div>

          {/* Logos Row */}
          <div
            key={activeTab}
            className="flex flex-nowrap justify-start sm:justify-center items-center 
  gap-8 no-scrollbar fade-in-up mt-8 overflow-x-auto sm:overflow-visible"
            data-aos="fade-up">
            {partnersData[activeTab].partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                data-aos="fade-up"
                data-aos-delay="0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-48 h-48 object-contain"
                />
              </a>
            ))}
          </div>
          {/* Mobile scroll indicator for logos */}
          <div className="sm:hidden flex items-center justify-center mt-2">
            <FaArrowRight className="animate-bounce text-blue-600 mr-2" />
            <span className="text-sm text-gray-600">
              Scroll to see more brands
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
