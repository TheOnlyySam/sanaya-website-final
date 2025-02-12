import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceDetails = {
  "odoo-erp-system": {
    title: "Odoo ERP System",
    description:
      "Odoo ERP System is an all-in-one management software that provides a range of business applications including CRM, eCommerce, accounting, inventory, and project management. It enables businesses to streamline operations, improve efficiency, and drive innovation.",
    image: "/assets/odoo-banner.jpg",
    features: [
      {
        title: "Integrated CRM & Sales",
        description:
          "Manage leads, track opportunities, and close deals efficiently.",
        icon: "📊",
      },
      {
        title: "Accounting & Finance",
        description:
          "Automate invoicing, track expenses, and manage cash flow seamlessly.",
        icon: "💰",
      },
      {
        title: "Inventory & Warehouse",
        description:
          "Advanced inventory management with real-time stock tracking.",
        icon: "📦",
      },
      {
        title: "HR & Employee Management",
        description:
          "Simplify HR tasks, payroll, and employee records management.",
        icon: "👨‍💼",
      },
      {
        title: "Project Management",
        description:
          "Plan, track, and execute projects with powerful collaboration tools.",
        icon: "📝",
      },
      {
        title: "E-Commerce Integration",
        description:
          "Sync online stores with inventory, sales, and marketing tools.",
        icon: "🛒",
      },
    ],
    additionalInfo: {
      title: "Why Choose Odoo ERP?",
      description:
        "Odoo ERP provides an extensive set of tools that help companies optimize their business processes. With seamless integrations, advanced analytics, and real-time collaboration, it's the perfect choice for scaling businesses.",
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
      {/* Hero Section */}
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

      {/* Description Section */}
      <div className="container mx-auto py-16 px-6 lg:px-24">
        <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
          {service.description}
        </p>
      </div>

      {/* Features Section */}
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

      {/* Additional Info Section */}
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

      {/* Call to Action */}
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
