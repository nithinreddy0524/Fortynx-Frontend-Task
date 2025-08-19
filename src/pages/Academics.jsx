import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Academics = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Our Academics</h1>
          <p className="text-lg text-gray-700 mb-10">
            At Green Valley School, we offer a comprehensive and dynamic curriculum designed to foster intellectual growth, creativity, and critical thinking. Our academic programs are tailored to meet the needs of every student, ensuring a well-rounded education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/assets/science.jpg"
              alt="Science Program"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-primary mb-2">Science</h2>
            <p className="text-gray-600">
              Explore the wonders of science with hands-on experiments and engaging lessons that spark curiosity and innovation.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/assets/maths.jpg"
              alt="Mathematics Program"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-primary mb-2">Mathematics</h2>
            <p className="text-gray-600">
              Develop problem-solving skills and a deep understanding of mathematical concepts through interactive learning.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/assets/arts.jpg"
              alt="Arts Program"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-primary mb-2">Arts</h2>
            <p className="text-gray-600">
              Unleash creativity and self-expression through our diverse arts programs, including music, painting, and drama.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="text-center py-5">
        <img src="/logo.png" alt="Logo" className="h-64 w-64 mx-auto" />
      </div>
      <Footer />
    </>
  );
};

export default Academics;
