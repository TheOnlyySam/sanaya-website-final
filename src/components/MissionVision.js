import React from "react";

const MissionVision = () => {
  return (
    <section className="relative py-20 px-6 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100 du">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center space-y-16 lg:space-y-0 lg:space-x-16">
        {/* Left Section - Our Vision */}
        <div
          className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue- p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl  border-t-4 border-blue-500"
          data-aos="fade-right"
          data-aos-delay="200">
          <div className="flex items-center mb-4">
            {/* Eye icon to represent Vision */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <h2 className="text-4xl font-bold text-blue-800">Our Vision</h2>
          </div>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Point of View (Locally):</strong>{" "}
            We are looking forward to doing the best in our country and
            providing the best technology to our clients. All types of
            solutions, environmental innovations, and everyday improvements are
            at the heart of our vision.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            <strong className="text-gray-900">
              Point of View (Worldwide):
            </strong>{" "}
            Our vision is to stay ahead of emerging technologies and support
            solutions that help society thrive—with tailor-made innovations for
            every need.
          </p>
        </div>

        {/* Right Section - Our Mission */}
        <div
          className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue- p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-t-4 border-blue-500"
          data-aos="fade-left"
          data-aos-delay="400">
          <div className="flex items-center mb-4">
            {/* Briefcase icon to represent Mission */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12v6m-6-6h12M4 7h16M4 7v13h16V7M4 7l8-4 8 4"
              />
            </svg>
            <h2 className="text-4xl font-bold text-blue-800">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to empower our clients with cutting-edge
            technologies, expert services, and in-depth consultancy. We guide
            them through IT standards and deliver optimal solutions with a team
            that is both certified and specialized.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <strong>Mission Statement:</strong> To be a global company,
            respected and valued for:
          </p>
          <ul className="mt-4 pl-5 list-disc text-lg text-gray-700">
            <li>Being known as the partner of choice for our customers.</li>
            <li>Exceeding customer expectations.</li>
            <li>Delivering high-quality products and services.</li>
            <li>Empowering a highly motivated and skilled workforce.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
