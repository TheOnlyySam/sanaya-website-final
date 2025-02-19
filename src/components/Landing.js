import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Landing = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Scroll to Contact Section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Play/Pause Music
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {}); // Catch any play errors
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0B1E39 0%, #00102E 100%)",
      }}>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="navbar.mp4"
        autoPlay
        loop
        muted
        playsInline></video>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Background Music (Only plays when the button is pressed) */}
      <audio ref={audioRef} src="/music.mp3" loop></audio>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-teal-400 uppercase tracking-widest text-sm sm:text-lg">
          Alsanaya Alarabia
        </h2>

        <h1 className="mt-4 font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl text-white">
          Data Centers: Your path to <br /> the fastest bandwidth
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
          Experience cutting-edge technology with unparalleled speed and
          reliability. Optimize your business with our state-of-the-art data
          solutions.
        </p>

        {/* Work With Us Button - Scrolls to Contact Section */}
        <button
          onClick={scrollToContact}
          className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:scale-105 hover:shadow-xl">
          Work With Us <span className="ml-2 text-xl">→</span>
        </button>

        {/* Play/Pause Music Button */}
        <button
          onClick={toggleMusic}
          className="mt-4 bg-gray-800 bg-opacity-75 text-white px-6 py-2 rounded-lg transition hover:bg-gray-600 flex items-center">
          {isPlaying ? (
            <>
              <FaPause className="mr-2" /> Pause Music
            </>
          ) : (
            <>
              <FaPlay className="mr-2" /> Play Music
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Landing;
