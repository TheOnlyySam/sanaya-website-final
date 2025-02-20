import React, { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

// Standard Typewriter Component (for one‑time typing)
const Typewriter = ({
  text = "",
  speed = 100,
  className = "",
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < text.length) {
          return prev + text.charAt(prev.length);
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText.split("\n").map((line, idx, arr) => (
        <React.Fragment key={idx}>
          {line}
          {idx < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

// LoopingTypewriter Component (types, deletes, and retypes in a loop)
const LoopingTypewriter = ({
  text = "",
  speed = 100,
  deletionSpeed = 50,
  pause = 2000,
  className = "",
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleType = () => {
      if (!isDeleting) {
        // Typing phase: add one character at a time.
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
          timeoutRef.current = setTimeout(handleType, speed);
        } else {
          // Pause when full text is displayed, then start deleting.
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            timeoutRef.current = setTimeout(handleType, deletionSpeed);
          }, pause);
        }
      } else {
        // Deletion phase: remove one character at a time.
        if (displayedText.length > 0) {
          setDisplayedText(text.substring(0, displayedText.length - 1));
          timeoutRef.current = setTimeout(handleType, deletionSpeed);
        } else {
          // When deletion is complete, restart typing.
          setIsDeleting(false);
          timeoutRef.current = setTimeout(handleType, speed);
        }
      }
    };

    timeoutRef.current = setTimeout(handleType, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayedText, isDeleting, text, speed, deletionSpeed, pause]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

const Landing = () => {
  // Smooth scrolling functions for navigation.
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text for the main heading prefix (without "2x faster.").
  const prefixText = "Data Centers: Your path to \nthe fastest bandwidth ";

  // Wait until the prefix is typed before rendering the looping part.
  const [showLooping, setShowLooping] = useState(false);
  useEffect(() => {
    // Estimate delay: number of characters * speed + extra buffer.
    const delay = prefixText.replace(/\n/g, "").length * 100 + 500;
    const timeout = setTimeout(() => {
      setShowLooping(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [prefixText]);

  return (
    <>
      {/* Inline CSS for the blinking cursor */}
      <style>
        {`
          .blinking-cursor {
            font-weight: 100;
            font-size: 1em;
            color: #ffffff;
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <div
        className="relative h-screen overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0B1E39 0%, #00102E 100%)",
        }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="navbar.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
          playsInline></video>

        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-teal-400 uppercase tracking-widest text-sm sm:text-lg">
            <Typewriter
              text="Alsanaya Alarabia"
              speed={100}
              showCursor={false}
            />
          </h2>

          <h1 className="mt-4 font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl">
            {/* Render the prefix text in white */}
            <Typewriter
              text={prefixText}
              speed={100}
              showCursor={false}
              className="inline text-white"
            />
            {/* Render the looping "2x faster." text with gradient style and blinking cursor */}
            {showLooping && (
              <LoopingTypewriter
                text="2x faster."
                speed={100}
                deletionSpeed={50}
                pause={2000}
                className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent inline"
                showCursor={true}
              />
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
            <Typewriter
              text="Experience cutting-edge technology with unparalleled speed and reliability. Optimize your business with our state-of-the-art data solutions."
              speed={50}
              showCursor={false}
            />
          </p>

          <button
            onClick={scrollToContact}
            className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:scale-105 hover:shadow-xl">
            Work With Us
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        {/* Bouncing Down Arrow Indicator */}
        <div className="absolute bottom-8 w-full flex justify-center">
          <button onClick={() => scrollToSection("about")}>
            <FaArrowDown className="text-white text-3xl animate-bounce" />
          </button>
        </div>

        {/* Optional Analytics Graphic */}
        <div className="absolute bottom-4 right-4 bg-teal-900 bg-opacity-75 p-2 sm:p-4 rounded-lg shadow-md">
          <p className="text-teal-300 text-xs sm:text-sm uppercase tracking-widest">
            Analytics
          </p>
          <p className="text-sm sm:text-lg font-bold text-white">100.00 %</p>
        </div>

        {/* Optional Floating Dots/Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 h-10 w-10 bg-blue-500 rounded-full opacity-30 blur-xl sm:top-10 sm:left-16 sm:h-16 sm:w-16"></div>
          <div className="absolute bottom-10 left-10 h-16 w-16 bg-teal-400 rounded-full opacity-20 blur-2xl sm:bottom-20 sm:left-20 sm:h-24 sm:w-24"></div>
          <div className="absolute top-16 left-4 h-8 w-8 bg-purple-600 rounded-full opacity-40 blur-lg sm:top-32 sm:left-12 sm:h-12 sm:w-12"></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
