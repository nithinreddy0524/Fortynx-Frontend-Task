import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Faculty = () => {
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
          <h1 className="text-4xl font-bold text-primary mb-6">Our Faculty</h1>
          <p className="text-lg text-gray-700 mb-10">
            Meet the dedicated and experienced educators who are committed to nurturing the potential of every student at Green Valley School. Our faculty members bring a wealth of knowledge and passion to the classroom.
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
              src="/assets/faculty1.jpg"
              alt="Faculty Member 1"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-primary mb-2">Dr. Aditi Sharma</h2>
            <p className="text-gray-600">
              Head of Science Department. Dr. Sharma has over 20 years of experience in teaching and research.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/assets/faculty2.webp"
              alt="Faculty Member 2"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-primary mb-2">Mr. Rajesh Kumar</h2>
            <p className="text-gray-600">
              Mathematics Teacher. Mr. Kumar is known for his innovative teaching methods and dedication to student success.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/assets/faculty3.jpg"
              alt="Faculty Member 3"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-primary mb-2">Ms. Priya Nair</h2>
            <p className="text-gray-600">
              Arts Instructor. Ms. Nair inspires creativity and self-expression through her engaging art classes.
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

export default Faculty;
