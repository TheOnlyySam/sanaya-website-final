import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    try {
      const response = await axios.post("/api/email", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus({ type: "success", message: response.data.message });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.error ||
          "Failed to send email. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            Get in Touch
          </h2>
          <p
            className="text-lg text-gray-600 mt-3"
            data-aos="fade-up"
            data-aos-delay="200">
            We'd love to hear from you! Contact us for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            className="bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Send us a Message
            </h3>
            {status.message && (
              <p
                className={`mb-4 text-center ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}>
                {status.message}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
                  placeholder="Enter your message"
                  required></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@sanayatechs.iq</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaPhone className="text-blue-500 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+964 777 799 5015</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  6th Floor, Al-Masar Building, Sinaa'a Street, Baghdad, Iraq
                </p>
              </div>
            </div>

            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Location Map"
                className="w-full h-full"
                src="https://maps.google.com/maps?q=33.30806621622016,44.44865317989087&z=15&output=embed"
                allowFullScreen
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
