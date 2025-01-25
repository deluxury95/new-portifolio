// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Logo from './components/Logo';
import Navbar from './components/Navbar'; // Import the new Navbar
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <Router>
      <div className="bg-blue-400 min-h-screen flex flex-col">
        <Navbar /> {/* Use the new Navbar component */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;