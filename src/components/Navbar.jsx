import { FaBars, FaEnvelope, FaHome, FaProjectDiagram, FaTimes, FaTools, FaUser } from 'react-icons/fa';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import logo from  "../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo.svg" className="h-12 w-auto" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-blue-300 flex items-center">
          <FaHome className="mr-1" /> Home
        </Link>
        <Link to="/projects" className="hover:text-blue-300 flex items-center">
          <FaProjectDiagram className="mr-1" /> Projects
        </Link>
        <Link to="/skills" className="hover:text-blue-300 flex items-center">
          <FaTools className="mr-1" /> Skills
        </Link>
        <Link to="/about" className="hover:text-blue-300 flex items-center">
          <FaUser className="mr-1" /> About
        </Link>
        <Link to="/contact" className="hover:text-blue-300 flex items-center">
          <FaEnvelope className="mr-1" /> Contact
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="hover:text-blue-300 flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link to="/projects" className="hover:text-blue-300 flex items-center">
              <FaProjectDiagram className="mr-1" /> Projects
            </Link>
            <Link to="/skills" className="hover:text-blue-300 flex items-center">
              <FaTools className="mr-1" /> Skills
            </Link>
            <Link to="/about" className="hover:text-blue-300 flex items-center">
              <FaUser className="mr-1" /> About
            </Link>
            <Link to="/contact" className="hover:text-blue-300 flex items-center">
              <FaEnvelope className="mr-1" /> Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
