import React from "react";

const Landing = () => {
  return (
    <div
      className="relative h-screen"
      style={{
        background: "linear-gradient(180deg, #0B1E39 0%, #00102E 100%)",
        overflow: "hidden",
      }}>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="navbar.mp4" // Replace with your video file path
        autoPlay
        loop
        muted
        playsInline></video>

      {/* Content */}
      <div className="absolute left-72 top-1/4 z-10 text-white max-w-lg animate-slide-in">
        <h2 className="text-teal-400 uppercase tracking-widest">
          Alsanaya Alarabia
        </h2>
        <h1 className="text-6xl font-extrabold leading-tight mt-6">
          Data Centers: <br />
          Your path to the fastest <br />
          bandwidth <span className="text-blue-400">2x faster.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Experience cutting-edge technology with unparalleled speed and
          reliability. Optimize your business with our state-of-the-art data
          solutions.
        </p>
        <button className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:scale-105 hover:shadow-xl">
          Work With Us
          <span className="ml-2 text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Additional Graphics */}
      <div className="absolute bottom-10 right-10 bg-teal-900 bg-opacity-75 p-4 rounded-lg shadow-md">
        <p className="text-teal-300 text-sm uppercase tracking-widest">
          Analytics
        </p>
        <p className="text-lg font-bold text-white">100.00 %</p>
      </div>

      {/* Floating Dots or Particles (Optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 h-16 w-16 bg-blue-500 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 left-20 h-24 w-24 bg-teal-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-32 left-12 h-12 w-12 bg-purple-600 rounded-full opacity-40 blur-lg"></div>
      </div>
    </div>
  );
};

export default Landing;
