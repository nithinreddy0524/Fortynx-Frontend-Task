import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white flex flex-col md:flex-row items-center md:items-stretch">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Green Valley School</h2>
        <p className="text-md md:text-lg mb-6">Where learning meets creativity & excellence.</p>
        <Link to="contact-us" smooth={true} duration={500} className="text-white cursor-pointer bg-accent hover:bg-yellow-600 hover:text-white text-white font-bold py-3 px-6 rounded">
            Apply Now
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 h-64 md:h-auto">
        <img 
          src="/assets/school.webp" 
          alt="Green Valley School" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
