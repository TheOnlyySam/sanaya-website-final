import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative bg-gray-100 py-20 px-6 lg:px-24"
      id="about-us"
      data-aos="fade-up">
      <div className="container  mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div
          className="relative w-full lg:w-1/2 mb-10 lg:mb-0"
          data-aos="fade-right"
          data-aos-delay="200">
          <div className="relative overflow-hidden">
            <img
              src="aboutus.png" // Replace with your actual image path
              alt="About Us"
              className="object-cover w-full h-80 lg:h-full"
              style={{
                border: "none",
                boxShadow: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          className="w-full lg:w-1/2 lg:pl-16 relative"
          data-aos="fade-left"
          data-aos-delay="400">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            About us
          </h2>
          <p className="text-2xl text-gray-600 mb-4 leading-relaxed">
            At Alsanaya Alarabia, we are dedicated to delivering cutting-edge
            data center solutions that prioritize speed, reliability, and
            innovation. Our mission is to empower businesses with the fastest
            and most secure infrastructure.
          </p>
          <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
            With years of experience in the industry, we strive to stay ahead of
            the curve, offering unmatched bandwidth and top-notch customer
            support.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
