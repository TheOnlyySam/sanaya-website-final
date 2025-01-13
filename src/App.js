import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <Navbar />
      <div id="landing">
        <Landing />
      </div>
      <div id="about" className="h-screen bg-gray-200">
        About Section
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
