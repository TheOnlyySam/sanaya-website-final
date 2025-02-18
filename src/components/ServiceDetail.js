import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceDetails = {
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
  "data-centers": {
    title: "Data Centers",
    description:
      "In today’s digital landscape, businesses require high-performance, scalable, and secure data centers to drive innovation, streamline operations, and ensure business continuity. Sanaya Techs delivers cutting-edge data center solutions, tailored to the evolving needs of enterprises, startups, and government institutions. Our solutions range from on-premises and cloud-based server deployments to hyper-converged infrastructures (HCI), virtual desktop environments (VDI), and high-speed networking technologies.",
    image: "/assets/data-center-banner.png",
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
