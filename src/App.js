import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/About"; // Import the AboutUs component

function App() {
  return (
    <div>
      <Navbar />
      <div id="landing">
        <Landing />
      </div>
      <div id="about" className="bg-gray-200">
        <AboutUs />
      </div>
      <div id="services" className="h-screen bg-gray-300">
        Services Section
      </div>
      <div id="contact" className="h-screen bg-gray-400">
        Contact Section
      </div>
    </div>
  );
}

export default App;
