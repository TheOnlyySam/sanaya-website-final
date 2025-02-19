import React from "react";
import { Link } from "react-router-dom";

const professionalServices = [
  {
    title: "Odoo ERP System",
    description:
      "Through our in-house Odoo expertise, we offer a comprehensive suite of solutions designed to transform your business operations. By delivering turnkey Odoo implementations, we seamlessly integrate multiple modules into a scalable, secure, and high-performance ERP platform—empowering your organization to streamline workflows, boost productivity, and drive innovation.",
    image: "odoo.webp",
    link: "/services/odoo-erp-system",
  },
  {
    title: "Data Centers",
    description:
      "Sanaya's data centers deliver high-performance computing with cutting-edge infrastructure, ensuring maximum uptime, scalability, and security for businesses of all sizes. Designed for efficiency, they feature advanced cooling, energy optimization, and robust networking to handle high workloads with minimal latency. With top-tier security, redundancy, and seamless cloud integration, Sanaya’s data centers provide a reliable foundation for mission-critical applications.",

    image: "datacenter.webp",
    link: "/services/data-centers",
  },
  {
    title: "Networking & Security Solutions",
    description:
      "Through our Networking and security vendors, we provide a wide range of products and services by delivering turnkey solutions, allowing the combination of many platforms' connectivity.",
    image: "Network-Security.jpg",
    link: "/services/networking-security-solutions",
  },

  // Add more services similarly...
];

const Services = () => {
  const renderServiceCards = (services) => {
    return services.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-delay={`${index * 100}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link
            to={service.link}
            className="inline-block bg-blue-500 text-white rounded-full py-2 px-6 font-semibold shadow hover:bg-blue-600 transition-colors duration-300">
            Read More
            <svg
              className="ml-2 w-5 h-5 inline"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24" id="services">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold text-gray-800 mb-6"
            data-aos="fade-up">
            Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderServiceCards(professionalServices)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
