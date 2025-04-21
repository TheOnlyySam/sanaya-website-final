import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Partners from "./components/Partners";
import ServiceDetail from "./components/ServiceDetail";
import DataCenter from "./components/DataCenter";
import FireAlarmService from "./components/FireAlarmService";
import SoftwareEngineering from "./components/SoftwareEngineering";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import ConsultingServices from "./components/ConsultingServices";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="landing" className="bg-gradient-to-b from-blue-900 to-blue-500">
                <Landing />
              </div>

              <div id="about" className="py-16 bg-gray-100">
                <AboutUs />
                <div id="partners">
                  <Partners />
                </div>
                <MissionVision />
              </div>

              <div id="services" className="bg-gray-100">
                <Services />
              </div>
              <div id="ConsultingServices" className="bg-gray-100">
                <ConsultingServices />
              </div>

              <div id="contact" className="bg-gray-100 py-16">
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/services/data-centers" element={<DataCenter />} />
        <Route path="/services/fire-alarm-systems" element={<FireAlarmService />} />
        <Route path="/services/software-engineering" element={<SoftwareEngineering />} />
      </Routes>

      {/* 🌐 Global WhatsApp Button */}
      <a
        href="https://wa.me/9647777995015"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48a12.3 12.3 0 00-17.44 0c-4.24 4.24-4.54 10.98-.89 15.71L.69 24l4.92-1.29a12.3 12.3 0 0015.71-.89c4.24-4.25 4.24-11.16 0-15.3zM12 22a9.89 9.89 0 01-5.31-1.53l-.38-.24-2.92.77.78-2.84-.25-.39a9.9 9.9 0 011.57-12.44 9.9 9.9 0 0114 14 9.88 9.88 0 01-7.49 3.67zm5.36-7.56c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.96-.94 1.15-.35.22-.65.07c-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.67-1.6-.92-2.2c-.25-.6-.5-.52-.67-.53l-.57-.01c-.2 0-.52.07-.8.35s-1.05 1.02-1.05 2.5c0 1.48 1.07 2.91 1.22 3.11.15.2 2.11 3.23 5.1 4.52.71.3 1.26.48 1.7.61.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.08-.12-.27-.2-.57-.34z" />
        </svg>
      </a>
    </Router>
  );
}

export default App;
