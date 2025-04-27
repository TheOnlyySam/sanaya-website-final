import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// PDF Modal component to display docs inline
const PDFModal = ({ url, title, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-xl w-11/12 h-5/6 lg:w-3/4 lg:h-4/5"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="flex justify-between items-center bg-gray-200 p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close PDF"
        >
          ✕
        </button>
      </header>
      <div className="w-full h-full">
        <object
          data={url}
          type="application/pdf"
          width="100%"
          height="100%"
          className="border-t border-gray-200"
        >
          <p className="p-4">
            It appears your browser doesn't support PDFs.{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Click here to view the document.
            </a>
          </p>
        </object>
      </div>
    </div>
  </div>
);

const FireAlarmService = () => {
  const navigate = useNavigate();
  const [modalUrl, setModalUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const features = [
    {
      icon: "📟",
      title: "Intelligent Addressable Fire Alarm System",
      desc:
        "Leverage FLASHLINK™ protocol for uninterrupted, peer-to-peer communication across loops—supports up to 508 devices per panel, full network scalability, and real-time mobile/cloud monitoring.",
      url: "/docs/Catalogue_Addressable_Fire_Alarm.pdf",
      img: "/assets/11.png",
    },
    {
      icon: "🚨",
      title: "Conventional Fire Alarm System",
      desc:
        "4- or 8-zone capacity, separate fire & fault indicators, built-in Intelligent walk‑through test mode, and smart battery management for extended uptime.",
      url: "/docs/Catalogue_Conventional_Fire_Alarm.pdf",
      img: "/assets/conve.png",
    },
    {
      icon: "📡",
      title: "Wireless Fire Alarm Systems",
      desc:
        "Deploy fully wireless or hybrid systems using IEEE 802.15.4 low‑power mesh—up to 31 devices per coordinator, layered ACK for guaranteed delivery, and up to 2.5km range outdoors.",
      url: "/docs/Catalogue_Wireless_Fire_Alarm_System.pdf",
      img: "/assets/fire-alarm.jpg",
    },
    {
      icon: "💻",
      title: "Mosaic-2000 Teknim Addressable Fire Alarm Monitoring Software",
      desc:
        "Centralized web dashboard: multi-floor/map views, instant pop-up alarms, remote reset/silence/evacuate commands, PDF export, and third‑party API integration.",
      url: "/docs/Monitoring_Software.pdf",
      img: "/assets/mosaic.jpg",
    },
  ];

  const faqs = [
    {
      q: "How do I choose between addressable and conventional systems?",
      a: "Addressable panels offer individual device monitoring and faster pinpointing of events—ideal for large or complex facilities. Conventional panels are cost‑effective for smaller sites with simpler layouts.",
    },
    {
      q: "Can I mix wired and wireless devices?",
      a: "Yes, Teknim supports hybrid architectures—use wireless for hard‑to‑wire areas and wired loops elsewhere, all managed from the same control panel and monitoring software.",
    },
    {
      q: "What certifications do these systems hold?",
      a: "All Teknim products are EN54‑2, EN54‑4 certified (panels) and EN54‑7, EN54‑17, EN54‑25 certified (detectors & wireless), ensuring compliance with European safety standards.",
    },
    {
      q: "Is remote mobile access available?",
      a: "Yes, our cloud‑based mobile app lets you receive alerts and send panel commands from any internet‑connected smartphone—no extra hardware needed.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Al‑Hussein",
      role: "Facility Manager, Al‑Rasheed Hotel",
      quote:
        "Teknim’s addressable system and Mosaic software cut our alarm response time by 70%. The real‑time map view is a game changer during drills.",
    },
    {
      name: "Leila Karim",
      role: "Maintenance Supervisor, Central Mall",
      quote:
        "Implementing hybrid wireless detectors saved us 60% in cabling costs for the new wing. Installation was seamless.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden" id="hero">
        <img
          src="/assets/teknim_banner.png"
          alt="Fire Alarm Banner"
          className="absolute inset-0 w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4" data-aos="fade-down">
            Comprehensive Fire Alarm Systems
          </h1>
          <p className="text-gray-200 max-w-2xl text-center text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            Under the trusted Teknim brand: addressable, conventional, wireless, and fully integrated monitoring software for any facility size.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto py-24 px-6 lg:px-32" id="solutions">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Our Key Solutions
        </h2>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="text-6xl mb-4 text-blue-600 group-hover:text-teal-500">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-600">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{f.desc}</p>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() => {
                    setModalUrl(f.url);
                    setModalTitle(f.title);
                  }}
                  className="bg-blue-600 text-white py-1.5 px-4 rounded-full text-sm hover:bg-teal-500"
                >
                  View Catalog
                </button>
                <a
                  href={f.url}
                  download
                  className="bg-gray-200 text-gray-800 py-1.5 px-4 rounded-full text-sm hover:bg-gray-300"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="bg-white py-24 px-6 lg:px-32" id="details">
        {features.map((f, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center mb-24 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="lg:w-1/2 p-6" data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{f.desc}</p>
              <div className="flex gap-4">
                <button
                  className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-teal-500 transition-colors duration-300"
                  onClick={() => {
                    setModalUrl(f.url);
                    setModalTitle(f.title);
                  }}
                >
                  View Catalog
                </button>
                <a
                  href={f.url}
                  download
                  className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300 transition-colors duration-300"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 p-6" data-aos="fade-left">
              <img
                src={f.img || `/assets/${f.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                alt={f.title}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-24 px-6 lg:px-32" id="faq">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow-inner"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h4 className="text-xl font-semibold mb-2">{item.q}</h4>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-teal-50 to-white py-24 px-6 lg:px-32" id="testimonials">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          What Our Clients Say
        </h2>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <p className="italic text-gray-600 mb-4">“{t.quote}”</p>
              <div className="font-semibold text-gray-800">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="bg-blue-600 py-16 text-center text-white" id="footer">
        <h3 className="text-3xl font-bold mb-4" data-aos="zoom-in">
          Secure Your Facility Today
        </h3>
        <p className="mb-6" data-aos="zoom-in" data-aos-delay="150">
          Ready to discuss custom fire alarm solutions? Reach out now and let’s start planning.
        </p>
        <button
          onClick={() => navigate("/", { state: { scrollTo: "hero" } })}
          className="bg-white text-blue-600 font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Contact Us
        </button>
      </footer>

      {/* Modal for PDFs */}
      {modalUrl && (
        <PDFModal url={modalUrl} title={modalTitle} onClose={() => setModalUrl("")} />
      )}
    </div>
  );
};

export default FireAlarmService;
