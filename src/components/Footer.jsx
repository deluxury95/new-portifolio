import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-900 py-6 rounded-lg">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2025 Deng Luxury Mou. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            <i className="fab fa-github text-white"></i>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-600 transition"
          >
            <i className="fab fa-linkedin text-white"></i>
          </a>
          {/* Email */}
          <a
            href="mailto:john.doe@example.com"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            <i className="fas fa-envelope text-white"></i>
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition"
          >
            <i className="fab fa-facebook text-white"></i>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 transition"
          >
            <i className="fab fa-twitter text-white"></i>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-500 transition"
          >
            <i className="fab fa-instagram text-white"></i>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition"
          >
            <i className="fab fa-youtube text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;