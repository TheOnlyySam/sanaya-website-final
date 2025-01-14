import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-gray-100 py-16 px-6 lg:px-24" id="about-us">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="About.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg object-cover w-full h-80 lg:h-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            At Alsanaya Alarabia, we are dedicated to delivering cutting-edge
            data center solutions that prioritize speed, reliability, and
            innovation. Our mission is to empower businesses with the fastest
            and most secure infrastructure.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With years of experience in the industry, we strive to stay ahead of
            the curve, offering unmatched bandwidth and top-notch customer
            support.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
