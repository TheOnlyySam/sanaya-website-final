import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Partners from "./components/Partners";
import ServiceDetail from "./components/ServiceDetail"; // Import ServiceDetail component
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div
                id="landing"
                className="bg-gradient-to-b from-blue-900 to-blue-500">
                <Landing />
              </div>
              <div id="about" className="py-16 bg-gray-100">
                <AboutUs />
                <MissionVision />
              </div>
              <div id="services" className="bg-gray-100">
                <Services />
              </div>
              <div id="partners">
                <Partners />
              </div>
              <div
                id="contact"
                className="h-screen bg-gray-400 py-16"
                data-aos="fade-up">
                <h2
                  className="text-center text-3xl font-bold text-gray-800 mb-8"
                  data-aos="fade-left">
                  Contact Section
                </h2>
              </div>
            </>
          }
        />
        {/* Service Detail Page */}
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
