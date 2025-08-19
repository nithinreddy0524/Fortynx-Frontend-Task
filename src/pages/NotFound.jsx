import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
        <Navbar />
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">The page you are looking for does not exist.</p>
            <Link to="/" className="text-accent mt-6 inline-block">Go back to Home</Link>
        </div>
        <Footer />
    </>
  );
};

export default NotFound;