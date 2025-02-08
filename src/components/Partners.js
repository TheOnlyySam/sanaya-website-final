import React from "react";

const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "partner1.png" },
    { name: "Partner 2", logo: "partner2.png" },
    { name: "Partner 3", logo: "partner3.png" },
    { name: "Partner 4", logo: "partner4.png" },
    { name: "Partner 5", logo: "partner5.png" },
  ];

  return (
    <section
      id="partners"
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Partners</h2>
        <p className="text-lg text-gray-600 mb-16">
          We are proud to collaborate with industry-leading companies.
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
          data-aos="fade-up">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center transform transition hover:scale-110">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
