import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Partners from "./components/Partners";
import ServiceDetail from "./components/ServiceDetail"; // Import ServiceDetail component
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component
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
      {/* ScrollToTop listens to route changes and scrolls to the top */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* Landing Section */}
              <div
                id="landing"
                className="bg-gradient-to-b from-blue-900 to-blue-500">
                <Landing />
              </div>

              {/* About Us & Mission Vision */}
              <div id="about" className="py-16 bg-gray-100">
                <AboutUs />
                <MissionVision />
              </div>

              {/* Services Section */}
              <div id="services" className="bg-gray-100">
                <Services />
              </div>

              {/* Partners Section */}
              <div id="partners">
                <Partners />
              </div>

              {/* Contact Section */}
              <div id="contact" className="bg-gray-100 py-16">
                <Contact />
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
