import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "⏭️" },
  { name: "Go", icon: "🐹" },
  { name: "Python", icon: "🐍" },
  { name: ".NET", icon: "🧩" },
  { name: "Node.js", icon: "🌿" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🐘" },
];

const codeExample = `
const fetchData = async () => {
  try {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};
`;

const SoftwareEngineering = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCTA = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        requestAnimationFrame(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }, 500);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="software-engineering" className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header + Code + Sidebar */}
        <div className="flex flex-col lg:flex-row lg:space-x-10 mb-16">
          {/* Left column: header text then code snippet */}
          <div className="flex-1" data-aos="fade-down">
            <h2 className="text-4xl font-bold mb-4">Software Engineering Excellence</h2>
            <p className="text-gray-300 mb-8 max-w-md" data-aos="fade-up">
              From backend performance to beautiful UI, we craft scalable, modern software built on real engineering.
            </p>
            <div className="bg-gray-950 rounded-lg shadow-lg p-6 mb-8 relative overflow-hidden" data-aos="zoom-in">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <pre className="text-sm text-green-200 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
          {/* Right column: sidebar info */}
          <div className="flex-1 bg-gray-800 rounded-lg p-6" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Agile-first workflow with rapid iterations</li>
              <li>Test-driven development & continuous integration</li>
              <li>Performance monitoring & proactive optimizations</li>
              <li>Collaborative design sprints & user feedback loops</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-10" data-aos="fade-up">We Build With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-10" data-aos="fade-up">
          <div>
            <h4 className="text-xl font-bold mb-4">Frontend Engineering</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Interactive, responsive UI with React & Next.js</li>
              <li>Reusable components & scalable design systems</li>
              <li>Advanced animations with Framer Motion & Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Backend Architecture</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>RESTful APIs & GraphQL endpoints</li>
              <li>Microservices using Go / Node.js</li>
              <li>Cloud-ready apps with Docker & CI/CD</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Database & Infrastructure</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Relational (PostgreSQL, MySQL) and NoSQL (MongoDB)</li>
              <li>Schema design, indexing, and query optimization</li>
              <li>Secure hosting and deployment on AWS, Vercel, or GCP</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Security & Testing</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>JWT authentication & OAuth2 integration</li>
              <li>OWASP-aligned secure coding practices</li>
              <li>Unit, integration, and E2E tests with Jest & Cypress</li>
            </ul>
          </div>
        </div>

{/* Call-to-Action Section */}
<div
  className="mt-24 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 px-6 sm:px-12 py-16 text-center text-white shadow-xl"
  data-aos="fade-up"
>
  <h2 className="text-3xl font-bold mb-4">Let’s Code the Future Together</h2>
  <p className="text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
    Whether it's a product MVP or full-scale enterprise platform, we bring your ideas to life with robust software engineering.
  </p>
  <button
    onClick={handleCTA}
    className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200"
    data-aos="zoom-in"
  >
    Contact Us
  </button>
</div>

      </div>
    </section>
  );
};

export default SoftwareEngineering;
