import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceDetails = {
  "deployment-services": {
    title: "Deployment Services",
    image: "/deployment.jpg",
    description:
      "All our deployment services are executed by a team of highly trained professionals with deep technical expertise, ensuring seamless implementation, integration, and optimization of cutting-edge solutions. Whether it’s IT infrastructure, cloud solutions, or security systems, our specialists follow best practices to guarantee efficient, secure, and scalable deployments tailored to your business needs.",
    features: [
      {
        title: "IT Infrastructure Deployment",
        description:
          "We deploy and configure IT infrastructure, including servers, storage, and networking solutions, ensuring high performance and scalability.",
        icon: "🖥️",
      },
      {
        title: "Cloud Deployment & Integration",
        description:
          "Our team specializes in deploying cloud-based environments, integrating hybrid cloud solutions, and ensuring seamless cloud adoption.",
        icon: "☁️",
      },
      {
        title: "Cybersecurity Solutions Deployment",
        description:
          "We implement advanced security measures, including firewalls, intrusion detection systems, and endpoint security to safeguard your digital assets.",
        icon: "🔒",
      },
      {
        title: "Data Center Deployment",
        description:
          "We design and deploy data centers with optimal power efficiency, security, and high availability to meet enterprise-level demands.",
        icon: "🏢",
      },
      {
        title: "CCTV & Surveillance System Deployment",
        description:
          "We install and configure surveillance systems, ensuring 24/7 monitoring, remote access, and high-definition security footage.",
        icon: "📹",
      },
      {
        title: "Software & Application Deployment",
        description:
          "We handle the deployment of software solutions, from enterprise applications to SaaS platforms, ensuring smooth integration with existing systems.",
        icon: "💻",
      },
      {
        title: "Internal Systems & ERP Deployment",
        description:
          "We deploy ERP, CRM, and HRMS solutions to enhance internal operations, improve workflow automation, and drive business efficiency.",
        icon: "🏢",
      },
      {
        title: "Network Deployment & Optimization",
        description:
          "Our team deploys robust network infrastructures, optimizing for speed, security, and reliability to support business operations.",
        icon: "📶",
      },
      {
        title: "IoT & Smart Systems Deployment",
        description:
          "We deploy IoT solutions for smart homes, industrial automation, and business environments, enabling seamless connectivity and automation.",
        icon: "📡",
      },
      {
        title: "AI & Machine Learning Deployment",
        description:
          "We implement AI models and machine learning solutions, integrating intelligent automation and data-driven insights into business processes.",
        icon: "🤖",
      },
      {
        title: "Business Process Automation Deployment",
        description:
          "We deploy automation tools to streamline repetitive tasks, enhance operational efficiency, and reduce manual workloads.",
        icon: "⚙️",
      },
      {
        title: "IT Support & Managed Services Deployment",
        description:
          "We set up IT support systems, ensuring proactive monitoring, troubleshooting, and maintenance for uninterrupted business continuity.",
        icon: "🛠️",
      },
    ],
  },
  "consulting-services": {
    title: "Consulting Services",
    image: "/consulting.jpg",
    description:
      "All our consultation services are delivered by a team of highly trained professionals with extensive industry experience, ensuring expert guidance, innovative solutions, and tailored strategies that align with your business goals. Our specialists are equipped with the latest knowledge, certifications, and hands-on expertise to provide top-tier consulting, guaranteeing efficiency, security, and long-term success for your organization.",
    features: [
      {
        title: "IT Consultation",
        description:
          "We provide expert guidance on IT infrastructure, digital transformation, and technology implementation strategies to optimize business operations.",
        icon: "🖥️",
      },
      {
        title: "Cybersecurity Consultation",
        description:
          "Our team assesses your security posture and provides tailored solutions to protect your digital assets from cyber threats and data breaches.",
        icon: "🔒",
      },
      {
        title: "Cloud Solutions & Migration",
        description:
          "We assist in cloud adoption, migration, and optimization to ensure seamless integration with your business needs.",
        icon: "☁️",
      },
      {
        title: "Data Centers & Infrastructure",
        description:
          "We design, implement, and maintain data center solutions to support high-performance computing and secure data storage.",
        icon: "🏢",
      },
      {
        title: "CCTV & Surveillance Solutions",
        description:
          "Our experts help you choose, install, and manage surveillance systems to enhance security for businesses and residential areas.",
        icon: "📹",
      },
      {
        title: "Software Development Consultation",
        description:
          "From requirement analysis to deployment, we provide software solutions that meet your business needs, ensuring efficiency and scalability.",
        icon: "💻",
      },
      {
        title: "Internal Systems & ERP Consultation",
        description:
          "We help businesses implement internal systems such as ERP, CRM, and HRMS to streamline operations and enhance productivity.",
        icon: "🏢",
      },
      {
        title: "Network Design & Optimization",
        description:
          "Our team designs and optimizes network infrastructure to ensure high availability, scalability, and security.",
        icon: "📶",
      },
      {
        title: "Project Management Consultation",
        description:
          "We provide end-to-end project management services, from planning and execution to monitoring and delivery, ensuring project success.",
        icon: "📊",
      },
      {
        title: "IoT & Smart Solutions",
        description:
          "We offer IoT-based consultation to integrate smart technology into businesses, homes, and industrial environments.",
        icon: "📡",
      },
      {
        title: "Business Process Automation",
        description:
          "We help businesses automate repetitive tasks, optimize workflows, and improve overall efficiency using advanced automation technologies.",
        icon: "⚙️",
      },
      {
        title: "AI & Machine Learning Consultation",
        description:
          "We provide expert guidance on IT infrastructure, digital transformation, and technology implementation strategies to optimize business operations.",
        icon: "🤖",
      },
      {
        title: "IT Support & Managed Services",
        description:
          "We provide 24/7 IT support, maintenance, and troubleshooting services to ensure smooth business operations.",
        icon: "🛠️",
      },
    ],
  },
  "support-services": {
    title: "Support Services",
    image: "/service-banner.jpg",
    description:
      "Our Support Services ensure your business stays operational with round-the-clock assistance, rapid response times, and expert support on-demand. Whether you need immediate troubleshooting, scheduled maintenance, or urgent technical assistance, we are here to provide a seamless support experience tailored to your needs.",
    features: [
      {
        title: "24/7 Support",
        description:
          "We provide continuous support around the clock to address critical issues, minimize downtime, and ensure business continuity.",
        icon: "🕒",
      },
      {
        title: "On-Call Services",
        description:
          "Get access to dedicated experts whenever you need assistance, ensuring your systems remain secure and fully operational.",
        icon: "📞",
      },
      {
        title: "On-Demand Support Services",
        description:
          "Request specialized support as needed for troubleshooting, system updates, performance optimization, and issue resolution.",
        icon: "🛠️",
      },
    ],
  },
  "odoo-erp-system": {
    title: "Odoo ERP System",
    image: "/odoo-banner.png",
    description:
      "Odoo ERP is an all-in-one business management software that streamlines operations, from accounting and inventory to CRM and project management, with a modular and customizable approach. Designed for businesses of all sizes, it enhances efficiency with automation, real-time data insights, and seamless integrations across departments. Its user-friendly interface and extensive app ecosystem make it a powerful solution for optimizing workflows and driving growth.",
    features: [
      {
        title: "Modular Structure",
        description:
          "Odoo offers a flexible system with various modules for CRM, Sales, Accounting, and more, allowing businesses to scale easily.",
        icon: "📦",
      },
      {
        title: "User-Friendly Interface",
        description:
          "A modern, intuitive UI with drag-and-drop features and customizable dashboards for seamless navigation.",
        icon: "🎨",
      },
      {
        title: "Integrated System",
        description:
          "All modules work together, reducing data silos and eliminating the need for third-party integrations.",
        icon: "🔗",
      },
      {
        title: "Scalability",
        description:
          "Suitable for startups to enterprises, with cloud and on-premises deployment options.",
        icon: "📈",
      },
      {
        title: "Customizability",
        description:
          "Open-source and highly customizable, allowing businesses to modify workflows and add new features.",
        icon: "✏️",
      },
      {
        title: "Automation & AI",
        description:
          "Automates tasks like invoicing, follow-ups, and inventory tracking while providing AI-driven insights.",
        icon: "🤖",
      },
      {
        title: "Cloud & On-Premises",
        description:
          "Available as a cloud-based SaaS or self-hosted on-premises solution for greater control.",
        icon: "☁️🏢",
      },
      {
        title: "Multi-Company & Multi-Currency",
        description:
          "Supports multiple businesses, currencies, and tax structures in a single database.",
        icon: "💱🏢",
      },
      {
        title: "Reporting & Analytics",
        description:
          "Real-time dashboards and reports for financial tracking, sales forecasting, and business insights.",
        icon: "📊",
      },
      {
        title: "E-commerce & Website Builder",
        description:
          "Create SEO-optimized websites and online stores with integrated inventory and payments.",
        icon: "🌍🛍️",
      },
      {
        title: "Accounting & Finance",
        description:
          "Automated invoicing, bank reconciliation, and tax compliance tools for financial management.",
        icon: "💰📑",
      },
      {
        title: "HR & Payroll Management",
        description:
          "Manage employees, track attendance, process payroll, and handle contracts effortlessly.",
        icon: "👥💼",
      },
      {
        title: "Inventory & Warehouse",
        description:
          "Real-time stock tracking, barcode scanning, and multi-warehouse management.",
        icon: "📦🚚",
      },
      {
        title: "CRM & Sales",
        description:
          "Track leads, manage customer relationships, automate follow-ups, and analyze sales performance.",
        icon: "📧📞",
      },
      {
        title: "Manufacturing & MRP",
        description:
          "Plan production, manage BOMs, ensure quality control, and streamline manufacturing processes.",
        icon: "🏭🔧",
      },
      {
        title: "Project & Task Management",
        description:
          "Plan, track, and collaborate on projects using Kanban boards and Gantt charts.",
        icon: "📅✅",
      },
    ],
    additionalInfo: [
      {
        title: "What makes Odoo’s modular structure so powerful? 📦",
        description:
          "• Odoo’s modular system allows businesses to choose and integrate only the applications they need, reducing complexity and cost. Whether it’s CRM, Sales, Accounting, Inventory, HR, or Project Management, each module is designed to work independently while seamlessly integrating with others. This flexibility ensures that businesses of any size can scale their ERP system without unnecessary features, making Odoo a cost-effective and efficient solution. By adopting a modular approach, companies can avoid bloated software that slows down operations, ensuring they only use what’s necessary while maintaining the option to expand functionality as they grow. This modularity also improves software performance, as businesses aren’t burdened by unused features. Additionally, the integration between modules eliminates data redundancy and streamlines workflows, enhancing collaboration between departments and ensuring a unified data ecosystem across the organization.",
      },
      {
        title:
          "How does Odoo’s user-friendly interface improve productivity? 🎨",
        description:
          "• Odoo offers a modern, intuitive, and easy-to-use interface that simplifies navigation and enhances the user experience. With drag-and-drop functionality, minimal clicks, and customizable dashboards, employees can quickly adapt to the system without extensive training. Its responsive design also ensures that users can access their workspace from any device, whether on desktops, tablets, or mobile phones. By reducing the learning curve, businesses can onboard new employees faster and minimize downtime. The clean interface reduces cognitive overload, allowing employees to focus on tasks rather than figuring out complex menu structures. Customization options also empower users to create personalized dashboards with real-time reports, task overviews, and relevant KPIs, leading to improved efficiency and better decision-making. Furthermore, Odoo’s UI design aligns with modern web applications, making it familiar and intuitive for users transitioning from other software, reducing the need for extensive IT support.",
      },
      {
        title: "Why is Odoo one of the most integrated ERP solutions? 🔗",
        description:
          "• Unlike traditional ERP systems that require third-party software for integration, Odoo provides a fully integrated suite where all business functions work together seamlessly. Sales teams can access customer invoices, warehouse managers can track inventory in real time, and HR departments can handle payroll—all within a single platform. This reduces data silos, minimizes manual input, and improves business efficiency. By centralizing data and operations, businesses can eliminate inconsistencies and duplication of records. The seamless integration between different modules ensures that information flows effortlessly across departments, enhancing visibility and decision-making. Additionally, the elimination of third-party dependencies reduces the risk of compatibility issues, security vulnerabilities, and extra licensing costs. With real-time data synchronization, businesses can react faster to market changes and customer demands, making Odoo a highly adaptive ERP solution suited for dynamic industries and growing enterprises.",
      },
      {
        title: "Can Odoo grow with my business over time? 📈",
        description:
          "• Yes! Odoo is designed with scalability in mind. Whether you are a startup, SME, or large enterprise, you can begin with a few essential modules and expand as your business grows. Thanks to its cloud-based and on-premises deployment options, Odoo adapts to increasing demands without the need for major infrastructure changes. This scalability is essential for companies in fast-growing industries, allowing them to upgrade and add functionalities without experiencing system slowdowns. Odoo’s flexibility ensures that companies do not outgrow their ERP system but instead evolve with it. As operations expand, businesses can integrate additional modules such as manufacturing, advanced reporting, and AI-powered automation to enhance efficiency. Additionally, Odoo’s architecture supports high volumes of data and users, ensuring that performance remains stable even as the organization grows. With its adaptable licensing model, businesses can control costs by only paying for what they need, making Odoo a cost-effective ERP for long-term use.",
      },
      {
        title: "How customizable is Odoo compared to other ERPs? ✏️",
        description:
          "• One of Odoo’s strongest advantages is its open-source framework, allowing businesses to fully customize the platform to fit their specific needs. From modifying workflows and adding custom fields to developing entirely new applications, Odoo’s modularity ensures that companies aren’t confined by rigid ERP structures. The Odoo Studio tool even allows non-developers to make modifications with a no-code/low-code approach. This flexibility ensures that businesses can tailor the system to align with their unique operational processes rather than adapting their workflows to fit predefined software limitations. Custom modules and integrations enable organizations to incorporate industry-specific features, ensuring that Odoo can serve highly specialized sectors effectively. Additionally, API support enables seamless connections with external tools and services, expanding Odoo’s capabilities beyond its native features. The ability to customize reports, dashboards, and automated workflows ensures that businesses extract maximum value from their ERP system, making Odoo a truly personalized solution.",
      },
      {
        title: "Does Odoo support automation and AI-driven insights? 🤖",
        description:
          "• Odoo incorporates AI-powered automation to enhance business operations. Repetitive tasks such as invoice generation, email follow-ups, stock reordering, and lead scoring can be automated, reducing human errors and freeing up employees for more strategic work. AI-driven analytics also provide predictive insights into customer behavior, sales trends, and inventory demand, enabling businesses to make data-driven decisions efficiently. By automating routine processes, businesses can reduce operational costs while improving accuracy and consistency. AI-powered forecasting helps sales teams optimize their pipelines, supply chain managers anticipate demand fluctuations, and finance teams identify cash flow trends. Odoo’s intelligent automation extends to HR, where recruitment, payroll, and attendance tracking can be streamlined. The platform’s machine learning algorithms continuously refine predictions and recommendations, ensuring that businesses stay ahead of market trends and customer expectations. By integrating automation and AI, Odoo transforms business operations, making them more agile, proactive, and efficient.",
      },
      {
        title: "Can I deploy Odoo on the cloud or on my own servers? ☁️🏢",
        description:
          "• Odoo offers both cloud-based (Odoo Online) and on-premises (Odoo Enterprise) deployment options, giving businesses the freedom to choose what suits them best. Cloud hosting provides hassle-free updates, automatic backups, and global accessibility, while on-premises installations give full control over data security, compliance, and system customization. Businesses with strict regulatory requirements or high customization needs often prefer on-premises deployments, ensuring that they maintain full ownership of their infrastructure. On the other hand, cloud deployment minimizes IT overhead, as maintenance and updates are managed by Odoo, allowing companies to focus on core operations. Odoo’s hybrid approach also allows businesses to transition between cloud and on-premises as needed, ensuring long-term adaptability. Multi-user access control and data encryption further enhance security, regardless of deployment choice. Whether businesses prioritize convenience or control, Odoo’s deployment flexibility ensures that they can choose a solution that aligns with their strategic goals and operational requirements.",
      },
    ],
  },

  "networking-security-solutions": {
    title: "Networking Security Solutions",
    description:
      "Sanaya Techs provides advanced network security solutions to protect businesses from cyber threats, unauthorized access, and data breaches. Our services include firewalls, intrusion prevention, endpoint protection, and real-time threat monitoring to ensure secure and seamless operations. With AI-driven automation, zero-trust security, and cloud integration, we deliver scalable, high-performance protection for enterprises, data centers, and remote work environments. Partner with Sanaya Techs to safeguard your network and maintain business continuity.",
    image: "/networking.jpg",
    features: [
      {
        title: "Software-Defined Networking (SDN)",
        description:
          "Centralizes network control, allowing for dynamic and flexible management to adapt quickly to changing business needs.",
        icon: "🔧",
      },
      {
        title: "Data Center Networking",
        description:
          "Provides high-speed, reliable connections between servers, storage devices, and networking equipment to ensure optimal performance and scalability.",
        icon: "🏢",
      },
      {
        title: "WAN and LAN Infrastructure",
        description:
          "Offers robust and secure wide and local area network solutions to connect multiple locations and devices efficiently.",
        icon: "🌐",
      },
      {
        title: "Wireless Solutions",
        description:
          "Enables seamless and secure wireless connectivity for mobile devices, enhancing flexibility and productivity.",
        icon: "📶",
      },
      {
        title: "Network Monitoring and Management",
        description:
          "Utilizes advanced tools to monitor network performance, detect issues, and manage configurations to maintain optimal operations.",
        icon: "📈",
      },
      {
        title: "Endpoint Protection and Teleworker Solutions",
        description:
          "Secures devices connected to the network, including those used by remote workers, to prevent unauthorized access and data breaches.",
        icon: "🛡️",
      },
      {
        title: "Security Fabric (Orchestration and Automation)",
        description:
          "Integrates and automates various security measures to provide a unified and proactive defense against cyber threats.",
        icon: "🔒",
      },
    ],
    additionalInfo: [
      {
        title: "What is Software-Defined Networking (SDN)?",
        description:
          "SDN centralizes network control, enabling dynamic and flexible management to swiftly adapt to evolving business requirements. It enhances efficiency by allowing administrators to configure network policies centrally, improving scalability and reducing operational complexity.",
      },
      {
        title: "How does Data Center Networking enhance performance?",
        description:
          "Data center networking connects servers, storage, and networking equipment with high-speed links, ensuring efficient data transfer and reliable application performance. It supports modern workloads like cloud computing, virtualization, and big data analytics while minimizing latency.",
      },
      {
        title: "What are WAN and LAN Infrastructure?",
        description:
          "WANs connect multiple LANs over large geographical areas, allowing businesses to maintain seamless communication across different locations. LANs link devices within a localized area, ensuring fast and secure data exchange. Both are essential for business continuity and efficient network operations.",
      },
      {
        title: "Why are Wireless Solutions vital for modern businesses?",
        description:
          "Wireless solutions provide secure, flexible connectivity for mobile devices, allowing employees to work from anywhere without being tied to physical connections. This improves productivity, enhances collaboration, and enables businesses to support remote work environments effectively.",
      },
      {
        title: "What is Network Monitoring and Management?",
        description:
          "Network monitoring and management involve continuously overseeing network performance, traffic, and configurations to ensure optimal operations. By proactively detecting and resolving issues, businesses can minimize downtime, improve security, and maintain peak network efficiency.",
      },
      {
        title: "How does Endpoint Protection secure remote work?",
        description:
          "Endpoint protection secures all devices accessing the network, including those used by remote employees, by preventing unauthorized access and malware attacks. It ensures that business-critical data remains protected, even in a distributed work environment.",
      },
      {
        title: "What is Security Fabric in network security?",
        description:
          "Security Fabric is a unified security approach that integrates and automates multiple security solutions across an organization’s network. It enables real-time threat detection, streamlined security management, and a coordinated response to cyber threats, enhancing overall protection.",
      },
      {
        title: "What are Next-Generation Firewalls (NGFW)?",
        description:
          "Next-Generation Firewalls (NGFWs) go beyond traditional firewalls by offering deep packet inspection, intrusion prevention, and application control. They provide advanced security against modern cyber threats while maintaining high network performance.",
      },
      {
        title: "How does Secure SD-WAN benefit organizations?",
        description:
          "Secure SD-WAN combines SDN with robust security features, ensuring secure, reliable, and cost-effective connectivity across multiple locations. It improves network efficiency, enhances application performance, and provides centralized control for streamlined operations.",
      },
      {
        title: "What is Advanced Threat Protection (ATP)?",
        description:
          "Advanced Threat Protection (ATP) includes security technologies designed to prevent, detect, and respond to sophisticated cyber threats. It uses AI-driven threat intelligence, behavioral analytics, and automated response mechanisms to safeguard critical data and infrastructure.",
      },
      {
        title: "What are SOC Platforms?",
        description:
          "Security Operations Center (SOC) platforms provide centralized tools for monitoring, detecting, and responding to security threats. They enhance visibility, streamline incident response, and enable organizations to maintain a strong security posture against evolving cyber risks.",
      },
      {
        title: "Why is Web Application Security important?",
        description:
          "Web application security focuses on protecting online platforms from cyber threats like SQL injection, cross-site scripting (XSS), and DDoS attacks. It ensures that web applications remain secure, reliable, and compliant with industry regulations.",
      },
      {
        title:
          "What are Data Loss Prevention (DLP) and Risk Management Solutions?",
        description:
          "Data Loss Prevention (DLP) solutions prevent unauthorized access and accidental data leaks, ensuring sensitive information is protected. Risk management solutions help businesses identify and mitigate vulnerabilities, reducing potential security threats and ensuring compliance with regulations.",
      },
    ],
  },
  // Add more services if needed
};

const ServiceDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      {/* Banner Section */}
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

      {/* Key Features Section */}
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
      {service.additionalInfo && Array.isArray(service.additionalInfo) && (
        <div className="container mx-auto py-16 px-6 lg:px-24">
          {service.additionalInfo.map((info, index) => (
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
          Get Started with {service.title}
        </h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          Transform your business operations today with {service.title}.
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

export default ServiceDetail;
