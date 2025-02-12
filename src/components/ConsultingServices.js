import React from "react";
import { Link } from "react-router-dom";

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

const ConsultingServices = () => {
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

export default ConsultingServices;
