import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24" id="contact">
      <div className="container mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-gray-800 text-center mb-6"
          data-aos="fade-up">
          Contact Us
        </h2>
        <p
          className="text-lg text-gray-600 text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200">
          Have a question or want to work with us? Fill out the form below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div
            className="bg-white p-8 shadow-lg rounded-lg"
            data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
              <span className="text-blue-500 text-3xl mr-4">📍</span>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Our Address
                </h4>
                <p className="text-gray-600">Baghdad, Iraq</p>
              </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
              <span className="text-blue-500 text-3xl mr-4">📞</span>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+964 777 799 5015</p>
              </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
              <span className="text-blue-500 text-3xl mr-4">✉️</span>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@sanayatechs.iq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
