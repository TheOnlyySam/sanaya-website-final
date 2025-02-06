import React from "react";

const professionalServices = [
  {
    title: "Odoo ERP System",
    description:
      "Through our in-house Odoo expertise, we offer a comprehensive suite of solutions designed to transform your business operations. By delivering turnkey Odoo implementations, we seamlessly integrate multiple modules into a scalable, secure, and high-performance ERP platform—empowering your organization to streamline workflows, boost productivity, and drive innovation.",
    image: "odoo.webp", // Replace with the actual path
    link: "#",
  },
  {
    title: "Networking & Security Solutions",
    description:
      "Through our Networking and security vendors, we provide a wide range of products and services by delivering turnkey solutions, allowing the combination of many platforms' connectivity.",
    image: "Network-Security.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "CCTV Solutions",
    description:
      "Through our trusted CCTV technology partners, we offer a comprehensive suite of surveillance products and services. By delivering turnkey solutions, we seamlessly integrate multiple platforms to provide robust, centralized monitoring and enhanced security across any environment.",
    image: "cctv.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "Data Centers",
    description:
      "Through our trusted data center partners, we offer a comprehensive suite of data center solutions. By delivering turnkey offerings, we seamlessly integrate multiple technology platforms to provide scalable, secure, and reliable infrastructure—ensuring optimal performance for your mission-critical applications.",
    image: "datacenter.webp", // Replace with the actual path
    link: "#",
  },
  {
    title: "Servers and Storage",
    description:
      "Through our trusted server and storage partners, we offer a comprehensive suite of solutions tailored to meet the demands of modern IT environments. By delivering turnkey offerings, we seamlessly integrate multiple technology platforms to provide scalable, secure, and high-performance infrastructure—ensuring your critical applications operate efficiently and reliably.",
    image: "storage.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "Database",
    description:
      "Through our trusted database partners, we offer a comprehensive suite of solutions for effective data management and analytics. By delivering turnkey solutions, we seamlessly integrate multiple technology platforms to provide scalable, secure, and high-performance database infrastructure—empowering your business to unlock the full potential of its data.",
    image: "database.png", // Replace with the actual path
    link: "#",
  },
  {
    title: "Mobile Applications",
    description:
      "Through our trusted mobile application partners, we offer a comprehensive suite of solutions designed to deliver seamless digital experiences on the go. By providing turnkey solutions, we seamlessly integrate multiple technology platforms to create scalable, secure, and high-performance mobile applications—empowering your business to engage and connect with users anytime, anywhere.",
    image: "mobile.png", // Replace with the actual path
    link: "#",
  },
  {
    title: "Website Development Services",
    description:
      "Through our trusted website development partners, we offer a comprehensive suite of services that bring your digital vision to life. By delivering turnkey solutions, we seamlessly integrate multiple technologies and platforms to create scalable, secure, and high-performance websites—empowering your business to engage audiences and excel online.",
    image: "website.jpg", // Replace with the actual path
    link: "#",
  },
];

const supportServices = [
  {
    title: "24/7 Support Services",
    description:
      "Sanaya's support team provides round-the-clock support for all IT-related services to ensure maximum uptime.",
    image: "247.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "On-Call Services",
    description:
      "We offer expert-level on-call services to help you resolve technical challenges efficiently.",
    image: "oncall.jpeg", // Replace with the actual path
    link: "#",
  },
  {
    title: "On-Demand Support Services",
    description:
      "Get flexible and on-demand support services to meet your IT requirements whenever needed.",
    image: "ondemand.jpg", // Replace with the actual path
    link: "#",
  },
];

const consultingServices = [
  {
    title: "Networking & Security Solutions",
    description:
      "Through our Networking and security vendors, we provide wide range of products and services by delivering turnkey solutions, allowing the combination of many platforms’ connectivity services to wide range of clients and organizations.",
    image: "security.webp", // Replace with the actual path
    link: "#",
  },
  {
    title: "Structured Cabling",
    description:
      "Sanaya Passive team can deliver, design and install the structured cabling for a building, campus and telecommunication cabling infrastructure.",
    image: "cable.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "IP Telephony and Video Conferencing Systems",
    description:
      "Through our leading vendors in IP telephony and video conferencing systems, Sanaya can provide the video conferencing room that meet all business needs from small to enterprise to give our clients flexibility and easy to use and manage their online meetings through user friendly systems in different locations across Iraq by secure connections.",
    image: "telephony.png", // Replace with the actual path
    link: "#",
  },
  {
    title: "Computing",
    description:
      "We as Sanaya can provide wide range of servers either by on-premises or through Sanaya Cloud Providers. We design and implement the servers that meet all business needs for client’s Data Centers where they can have the trusted platforms to host their applications.",
    image: "computing.png", // Replace with the actual path
    link: "#",
  },
  {
    title: "Storage Systems",
    description:
      "Storage is a process through which digital data is saved within a data storage device by means of computing technology. Storage is a mechanism that enables a computer to retain data, either temporarily or permanently. Sanaya can deliver and implement SAN and NAS storage Systems based on the workload and capacity required.",
    image: "storage.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "Back-up & Data Protection",
    description:
      "There are massive amounts of data, and its growth trajectory is not projected to slow down anytime soon. And to add to the challenge of managing this data growth, computing is also going through a “massive distribution of massive data” due to new options in deployment models such as XaaS and Cloud, as well as IoT. The data center walls no longer define where a companies’ mission critical data resides. data protection is one of the TOP-most concerns for all IT organizations. Sanaya deliver i ntegrated Back-up and Data Protection as end to end solution (HW&SW) that meet your business needs.",
    image: "backup.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "Private Cloud",
    description:
      "The private cloud is defined as a computing services offered either over the Internet or a private internal network. Also called an internal or corporate cloud, private cloud computing gives businesses many of the benefits including self-service, scalability, and elasticity - with the additional control and customization available from dedicated resources over a computing infrastructure hosted on-premises. Sanaya Solution team can design, implement the Private Cloud Infrastructure for any organization that need to build Platform as a Service or Infrastructure as a Services.",
    image: "private.webp", // Replace with the actual path
    link: "#",
  },
  {
    title: "CCTV",
    description:
      "Installation and setup of CCTV systems ranging from Small to Enterprise sizes. Sanaya experts can design and deployment CCTV solutions through our CCTV leader providers.By using advanced technologies that include end to end solutions for IP Cameras, Video Analytics with advanced IT infrastructure which provide high quality of view, high performance and stability.",
    image: "cctv1.jpg", // Replace with the actual path
    link: "#",
  },
  {
    title: "Data Centers",
    description:
      "Through our cloud providers we can deliver and implement compute and storage resources as a ready cloud platform where the client can operate its applications or services quickly based on the needed resources and pay as you grow.",
    image: "datacenters.webp", // Replace with the actual path
    link: "#",
  },
  {
    title: "Software",
    description:
      "If you are seeking software company that combines technical expertise, personalized attention, and a passion for innovation, We are the ideal partner for your software development needs. Contact us today to discuss how we can help you leverage technology to drive your business forward.",
    image: "software.webp", // Replace with the actual path
    link: "#",
  },
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
          <a
            href={service.link}
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
          </a>
        </div>
      </div>
    ));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24" id="services">
      <div className="container mx-auto">
        {/* Professional Services */}
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

        {/* Support Services */}
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

        {/* Consulting Services */}
        <div>
          <h2
            className="text-4xl font-bold text-gray-800 mb-6"
            data-aos="fade-up">
            Consulting Services & Soltions
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
