import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceDetails = {
  "data-centers": {
    title: "Data Centers",
    image: "/assets/data-center-banner.png",
    description: "We deliver state-of-the-art data solutions",
    features: [
      {
        title: "High Speed Networking",
        description: " Implemenation of high-bandwidth connections",
        icon: "⚡",
      },
      {
        title: "Software-defined Networking (SDN)",
        description:
          "Adoption of SDN to separate the control plane from the data plane, allowing for dynamic and flexible network management.",
        icon: "🌐",
      },
      {
        title: "Advanced Security Measures",
        description:
          "Integration of next-generation firewalls, intrusion prevention systems, and security information and event management (SIEM) systems to protect against cyber threats and ensure data integrity",
        icon: "🔒",
      },
      {
        title: "Energy-Efficient Infrastructure",
        description:
          "Design and implementation of energy-efficient cooling systems and power management solutions to optimize energy consumption and reduce operational costs.",
        icon: "❄️",
      },
    ],
    additionalInfo: {
      title: "Why choose out data center solutions?",
      description:
        "Sanaya is committed to providing state-of-the-art data center solutions that align with the evolving needs of modern businesses. Our team of certified professionals leverages industry best practices and cutting-edge technologies to deliver data centers that are not only efficient and secure but also adaptable to future advancements. Partner with us to build a data center infrastructure that supports your business objectives and drives growth.",
    },
  },
};

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  if (!service) {
    return <div className="text-center text-2xl py-20">Service Not Found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative w-full h-96">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold" data-aos="fade-down">
            {service.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-16 px-6 lg:px-24">
        <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
          {service.description}
        </p>
      </div>

      <div className="bg-white py-16 px-6 lg:px-24">
        <h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          data-aos="fade-up">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}>
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {service.additionalInfo && (
        <div className="container mx-auto py-16 px-6 lg:px-24">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8"
            data-aos="fade-up">
            {service.additionalInfo.title}
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            data-aos="fade-up">
            {service.additionalInfo.description}
          </p>
        </div>
      )}

      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Get Started with {service.title}
        </h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          Transform your business operations today with {service.title}.
        </p>
        <button
          onClick={() => navigate("/", { state: { scrollTo: "Contact" } })}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200 pointer-events-auto"
          data-aos="zoom-in">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
