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
