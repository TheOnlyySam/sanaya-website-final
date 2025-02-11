import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setStatus(
      result.success ? "Email sent successfully!" : "Error sending email"
    );
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          rows="5"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded">
          Send Message
        </button>
        <p className="text-center mt-4">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
