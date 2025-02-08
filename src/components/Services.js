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
    title: "Networking & Security Solutions",
    description:
      "Through our Networking and security vendors, we provide a wide range of products and services by delivering turnkey solutions, allowing the combination of many platforms' connectivity.",
    image: "Network-Security.jpg",
    link: "/services/networking-security-solutions",
  },
  {
    title: "CCTV Solutions",
    description:
      "Through our trusted CCTV technology partners, we offer a comprehensive suite of surveillance products and services. By delivering turnkey solutions, we seamlessly integrate multiple platforms to provide robust, centralized monitoring and enhanced security across any environment.",
    image: "cctv.jpg",
    link: "/services/cctv-solutions",
  },
  // Add more services similarly...
];

const supportServices = [
  {
    title: "24/7 Support Services",
    description:
      "Sanaya's support team provides round-the-clock support for all IT-related services to ensure maximum uptime.",
    image: "247.jpg",
    link: "/services/247-support-services",
  },
  {
    title: "On-Call Services",
    description:
      "We offer expert-level on-call services to help you resolve technical challenges efficiently.",
    image: "oncall.jpeg",
    link: "/services/on-call-services",
  },
  {
    title: "On-Demand Support Services",
    description:
      "Get flexible and on-demand support services to meet your IT requirements whenever needed.",
    image: "ondemand.jpg",
    link: "/services/on-demand-support-services",
  },
  // Add more services similarly...
];

const consultingServices = [
  {
    title: "Networking & Security Solutions",
    description:
      "Through our Networking and security vendors, we provide wide range of products and services by delivering turnkey solutions, allowing the combination of many platforms’ connectivity services to wide range of clients and organizations.",
    image: "security.webp",
    link: "/services/networking-security-solutions",
  },
  {
    title: "Structured Cabling",
    description:
      "Sanaya Passive team can deliver, design and install the structured cabling for a building, campus and telecommunication cabling infrastructure.",
    image: "cable.jpg",
    link: "/services/structured-cabling",
  },
  {
    title: "IP Telephony and Video Conferencing Systems",
    description:
      "Through our leading vendors in IP telephony and video conferencing systems, Sanaya can provide the video conferencing room that meet all business needs from small to enterprise to give our clients flexibility and easy to use and manage their online meetings through user friendly systems in different locations across Iraq by secure connections.",
    image: "telephony.png",
    link: "/services/ip-telephony",
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
            className="text-blue-500 hover:underline flex items-center">
            Read More
            <svg
              className="ml-1 w-5 h-5"
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
            Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderServiceCards(professionalServices)}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-4xl font-bold text-gray-800 mb-6"
            data-aos="fade-up">
            Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderServiceCards(supportServices)}
          </div>
        </div>

        <div>
          <h2
            className="text-4xl font-bold text-gray-800 mb-6"
            data-aos="fade-up">
            Consulting Services & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderServiceCards(consultingServices)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
