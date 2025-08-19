import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation().pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Overlay to disable background activity */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30" 
          onClick={closeMenu}
        ></div>
      )}

      <nav className="bg-primary flex justify-center items-center text-white sticky top-0 z-50 shadow-lg">
        <div className="container px-5 md:gap-24 text-center w-full py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <NavLink to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" className="h-6 w-7 bg-white rounded object-cover" />
              <div className="text-2xl font-bold text-white">Green Valley School</div>
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="hover:text-accent text-white">Home</NavLink>
            {location==="/" && <Link to="about-us" smooth={true} duration={500} className="hover:text-accent text-white cursor-pointer">About Us</Link>}
            {location!=="/" && <NavLink to="/" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>}
            <NavLink to="/academics" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Academics</NavLink>
            <NavLink to="/admissions" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Admissions</NavLink>
            <NavLink to="/faculty" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Faculty</NavLink>
            {location==="/" && <Link to="contact-us" smooth={true} duration={500} className="hover:text-accent text-white cursor-pointer">Contact Us</Link>}
            {location!=="/" && <NavLink to="/" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>}
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none p-0 bg-transparent text-white text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <div 
          className={`fixed top-0 right-0 h-screen w-72 bg-primary text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-40`}
        >
          <div className="flex justify-between items-center px-5 py-4 shadow-lg">
            <h2 className="text-2xl font-bold">GVS</h2>
            <button 
              onClick={closeMenu} 
              className="focus:outline-none p-0 bg-transparent text-white text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="space-y-6 p-6">
            <li><NavLink to="/" className="hover:text-accent text-white">Home</NavLink></li>
            <li><Link to="about-us" smooth={true} duration={500} className="hover:text-accent text-white cursor-pointer">About Us</Link></li>
            <li><NavLink to="/academics" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Academics</NavLink></li>
            <li><NavLink to="/admissions" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Admissions</NavLink></li>
            <li><NavLink to="/faculty" className="hover:text-accent text-white" onClick={() => window.scrollTo(0, 0)}>Faculty</NavLink></li>
            <li><Link to="contact-us" smooth={true} duration={500} className="hover:text-accent text-white cursor-pointer">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
