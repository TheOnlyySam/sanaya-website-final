import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const dataCenterDetails = {
  title: "Data Centers",
  description:
    "In today’s digital landscape, businesses require high-performance, scalable, and secure data centers to drive innovation, streamline operations, and ensure business continuity. Sanaya Techs delivers cutting-edge data center solutions, tailored to the evolving needs of enterprises, startups, and government institutions. Our solutions range from on-premises and cloud-based server deployments to hyper-converged infrastructures (HCI), virtual desktop environments (VDI), and high-speed networking technologies.",
  image: "/assets/data-center-banner.png",
  descriptionImage: "/assets/data-center-banner.png", // Added image for description
  features: [
    {
      title: "FM200 Fire Suppression System 🔥",
      description:
        "A fast-acting fire suppression system that protects critical IT infrastructure without damaging sensitive equipment.",
      icon: "🚨",
    },
    {
      title: "Fire Alarm System 🚒",
      description:
        "An advanced fire detection and alarm system ensuring quick response to fire hazards, minimizing downtime and damage.",
      icon: "🔔",
    },
    {
      title: "CCTV Surveillance System 📹",
      description:
        "24/7 high-resolution surveillance monitoring with real-time alerts for enhanced security and incident tracking.",
      icon: "🎥",
    },
    {
      title: "Intrusion Detection System 🔐",
      description:
        "An advanced security system that detects and prevents unauthorized access, ensuring maximum data center protection.",
      icon: "🛡️",
    },
    {
      title: "Public Address & Voice Alarm (PAVA) System 📢",
      description:
        "A critical communication system for emergency announcements and evacuation procedures within the data center.",
      icon: "📡",
    },
    {
      title: "Automatic Transfer Switch (ATS) ⚡",
      description:
        "Ensures seamless power transition between primary and backup sources, preventing downtime during power failures.",
      icon: "🔄",
    },
    {
      title: "Uninterruptible Power Supply (UPS) 🔋",
      description:
        "Provides continuous and stable power to critical infrastructure, protecting against outages and power fluctuations.",
      icon: "🔌",
    },
    {
      title: "Precision Cooling System ❄️",
      description:
        "Maintains optimal temperature and humidity levels for servers, preventing overheating and maximizing performance.",
      icon: "🌡️",
    },
    {
      title: "Environmental Monitoring System (EMS) 🌍",
      description:
        "Monitors temperature, humidity, and other environmental factors to ensure ideal data center conditions in real time.",
      icon: "📊",
    },
    {
      title: "High-Speed Fiber Infrastructure 🔗",
      description:
        "Ensures ultra-fast and reliable data transmission with cutting-edge fiber optic networking solutions.",
      icon: "🛜",
    },
    {
      title: "Structured Copper Cabling Infrastructure 🏗️",
      description:
        "Reliable copper networking infrastructure for high-performance data and voice communication within the data center.",
      icon: "🔌",
    },
    {
      title: "Data Center Racks & Accessories 🏢",
      description:
        "High-quality racks, cable management systems, and accessories to optimize space utilization and airflow.",
      icon: "🗄️",
    },
  ],
  additionalInfo: [
    {
      title: "Fixed Data Centers",
      description:
        "A fixed data center is a dedicated facility designed to house IT infrastructure and provide centralized data storage and management. Fixed data centers are typically used by businesses and organizations that require high levels of data security and reliability, such as financial institutions, government agencies, and healthcare providers. Fixed data centers are designed to provide a stable and secure environment for IT equipment, including servers, storage devices, networking equipment, and cooling and power systems. These facilities often have redundant systems to ensure that data and applications remain available in case of a power outage or equipment failure. Fixed data centers can be either owned and operated by the organization or leased from a third-party provider. Leasing a fixed data center can be a cost-effective solution for smaller businesses that do not have the resources to build and maintain their own facility. Fixed data centers provide several benefits, including improved security, reliability, and performance for critical IT infrastructure. They also offer centralized management and monitoring, making it easier for organizations to control and maintain their IT systems. Additionally, fixed data centers can help organizations meet regulatory requirements for data storage and management. Overall, fixed data centers are an essential component of modern IT infrastructure, providing organizations with the necessary tools and resources to manage and protect their valuable data.",
    },
    {
      title: "Micro Data Centers",
      description:
        "A micro data center is a compact, self-contained IT infrastructure designed to provide localized data processing and storage capabilities. Micro data centers are typically used by businesses and organizations that require high-performance computing and storage capabilities in remote or edge locations, such as manufacturing plants, retail stores, and remote offices. Unlike traditional data centers, which are often large, centralized facilities, micro data centers are designed to be small and modular, allowing for easy deployment and scalability. They typically consist of a compact enclosure or rack that houses servers, storage devices, networking equipment, and cooling and power systems. Micro data centers offer several benefits, including improved performance and reduced latency for critical applications, as well as improved data security and privacy. Because they are located close to the edge, micro data centers can process and store data locally, reducing the need for data to be transmitted to a centralized facility. Micro data centers can also help organizations reduce costs by reducing the need for expensive network infrastructure and reducing the amount of data that needs to be transmitted over long distances. Additionally, micro data centers can help organizations comply with data privacy regulations by ensuring that data is stored and processed locally. Overall, micro data centers are an essential component of modern IT infrastructure, providing organizations with the necessary tools and resources to manage and process data in remote and edge locations.",
    },
    {
      title: "Modular Data Centers",
      description:
        "A modular data center is a pre-engineered, self-contained IT infrastructure designed for rapid deployment, scalability, and high efficiency. These data centers consist of pre-fabricated modules that house essential components such as servers, networking equipment, power, cooling, and security systems. They are widely used by enterprises, cloud service providers, and organizations needing flexible and cost-effective data center solutions. Unlike traditional brick-and-mortar data centers, modular data centers are designed to be highly scalable and portable, allowing organizations to expand their IT capacity quickly and efficiently. Each module functions as an independent unit, meaning businesses can add or remove modules based on demand without disrupting existing operations. This modular approach significantly reduces deployment time, allowing businesses to set up a data center in weeks instead of months or years. Modular data centers offer several advantages, including faster deployment, lower energy consumption, and improved cooling efficiency due to their compact and optimized designs. They are also cost-effective, as organizations can invest in only the capacity they need, avoiding the high upfront costs of building traditional data centers. Additionally, modular data centers are designed with advanced security and redundancy features, ensuring high availability and disaster recovery capabilities. Another key benefit of modular data centers is their ability to be deployed in remote or harsh environments, making them ideal for industries such as military, mining, oil & gas, and telecommunications. Their self-contained nature also improves energy efficiency by utilizing advanced airflow management and liquid cooling technologies. Overall, modular data centers represent the future of IT infrastructure, offering organizations a scalable, efficient, and rapidly deployable solution to meet their growing computing and storage needs.",
    },
    {
      title: "Mobile Data Centers (Container)",
      description:
        "A mobile data center, also known as a data center container, is a self-contained, portable IT infrastructure designed to provide computing and storage capabilities in remote or temporary locations. Mobile data centers are typically housed in shipping containers that can be easily transported by truck, train, or ship. Mobile data centers offer several benefits over traditional data centers, including easy deployment and scalability, as well as the ability to quickly respond to changing business needs. Because they are self-contained, mobile data centers can be easily transported to remote or temporary locations, providing computing and storage capabilities where they are needed most. Mobile data centers are also designed to be highly efficient, with optimized cooling and power systems that can operate in a wide range of temperatures and environmental conditions. They can also be configured with redundant systems to ensure high availability and reliability. Mobile data centers are used in a wide range of industries, including healthcare, finance, and government, as well as in disaster response and military applications. They can be customized to meet specific business needs and can be easily upgraded or expanded as business needs change. Overall, mobile data centers are an essential component of modern IT infrastructure, providing organizations with the necessary tools and resources to manage and process data in remote or temporary locations. They offer flexibility, scalability, and reliability, making them an ideal solution for organizations that need to operate in dynamic or challenging environments.",
    },
  ],
};

const DataCenter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-80">
        <img
          src={dataCenterDetails.image}
          alt={dataCenterDetails.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold" data-aos="fade-down">
            {dataCenterDetails.title}
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2" data-aos="fade-up">
          <p className="text-lg text-gray-700 leading-relaxed">
            {dataCenterDetails.description}
          </p>
        </div>
        <div className="lg:w-1/2" data-aos="fade-up">
          <img
            src={dataCenterDetails.descriptionImage}
            alt="Data Center Overview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-6 lg:px-24">
        <h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          data-aos="fade-up">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dataCenterDetails.features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}>
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-blue-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      {dataCenterDetails.additionalInfo &&
        Array.isArray(dataCenterDetails.additionalInfo) && (
          <div className="container mx-auto py-16 px-6 lg:px-24">
            {dataCenterDetails.additionalInfo.map((info, index) => (
              <div key={index} className="mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        )}

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Secure & Scale Your Business with Our Data Centers
        </h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          Upgrade to a cutting-edge infrastructure today!
        </p>
        <button
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");

              setTimeout(() => {
                requestAnimationFrame(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                });
              }, 500);
            } else {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }
          }}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200 pointer-events-auto"
          data-aos="zoom-in">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default DataCenter;
