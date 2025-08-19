import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Admissions = () => {
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
          <h1 className="text-4xl font-bold text-primary mb-6">Admissions</h1>
          <p className="text-lg text-gray-700 mb-10">
            Join Green Valley School and become a part of our vibrant learning community. Our admissions process is designed to be simple and transparent, ensuring every student finds their place in our school.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">Step 1: Application</h2>
            <p className="text-gray-600">
              Complete the online application form and provide the necessary documents to begin the admissions process.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">Step 2: Assessment</h2>
            <p className="text-gray-600">
              Students will undergo an assessment to evaluate their skills and determine the best fit for our programs.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">Step 3: Interview</h2>
            <p className="text-gray-600">
              Parents and students will be invited for an interview to discuss expectations and answer any questions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">Step 4: Enrollment</h2>
            <p className="text-gray-600">
              Once accepted, complete the enrollment process by submitting the required fees and forms.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 text-center"
        >
          <img
            src="/assets/admissions.jpeg"
            alt="Admissions"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      <div className="text-center py-5">
        <img src="/logo.png" alt="Logo" className="h-64 w-64 mx-auto" />
      </div>
      <Footer />
    </>
  );
};

export default Admissions;
