import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/About"; // Import the AboutUs component
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import MissionVision from "./components/MissionVision";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation occurs only once
      offset: 100, // Adjust offset to trigger animations earlier or later
    });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Landing Section */}
      <div id="landing" className="bg-gradient-to-b from-blue-900 to-blue-500">
        <Landing />
      </div>
      {/* About Us Section */}
      <div id="about" className="py-16 bg-gray-100">
        <AboutUs />
        <div id="missionvision">
          <MissionVision />
        </div>
      </div>
      {/* Services Section */}
      <div id="services" className="bg-gray-100">
        <Services />
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="h-screen bg-gray-400 py-16"
        data-aos="fade-up">
        <h2
          className="text-center text-3xl font-bold text-gray-800 mb-8"
          data-aos="fade-left">
          Contact Section
        </h2>
        {/* Add your contact content here */}
      </div>
    </div>
  );
}

export default App;
