import React from 'react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-blue-500 text-white p-10 md:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Deng Luxury Mou</h2>
          <p className="text-2xl mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 relative rounded-lg font-serif">
            "An enthusiastic Frontend Developer driven by a passion for creating dynamic and user-friendly web interfaces that captivate and engage."
          </p>
          <p className="text-2xl bg-gray-800 rounded-lg font-semibold">
            With a keen eye for detail and expertise in modern web technologies, I
            bring your digital ideas to life. Let's build something amazing
            together!
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-100 transition duration-300">
            Hire me
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 text-gray-800 p-10 md:w-1/2 flex flex-col justify-center items-center relative">
          <div className="text-xl font-semibold mb-4 animate-pulse text-gray-700">
            Transforming Ideas into Reality
          </div>
          <div className="relative w-64 h-64">
            {/* Spinning Stars */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="absolute w-56 h-56 animate-spin-slow">
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-4 h-4 bg-pink-500 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
            </div>

            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Profile"
              className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-125 shadow-lg hover:shadow-blue-500/50"
            />
          </div>
          <div className="text-xl font-semibold mt-4 animate-pulse text-gray-700 bg-green-500 rounded-lg">
          Software refers to a collection of instructions, data, or 
          programs used to operate computers and perform specific 
          tasks. Unlike hardware, which is the physical aspect 
          of a computer, software is intangible and consists 
          of code written by developers to achieve various 
          goals, ranging from simple tasks like word processing 
          to complex operations like running artificial intelligence algorithms.
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="https://facebook.com"
              className="text-2xl text-gray-800 hover:text-blue-500 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-2xl text-gray-800 hover:text-blue-400 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-2xl text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
