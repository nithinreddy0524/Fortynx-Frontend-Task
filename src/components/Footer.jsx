import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Green Valley School is committed to providing quality education and fostering a nurturing environment for students to thrive.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/admissions" className="hover:text-accent text-white font-normal">Admissions</a></li>
              <li><a href="/academics" className="hover:text-accent text-white font-normal">Academics</a></li>
              <li><a href="/" className="hover:text-accent text-white font-normal">Contact Us</a></li>
              <li><a href="/" className="hover:text-accent text-white font-normal">Facilities</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Green Valley School, Jubilee Hills, Hyderabad, Telangana, India</p>
            <p className="text-gray-300">Email: info@greenvalleyschool.com</p>
            <p className="text-gray-300">Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2025 Green Valley School. All rights reserved.</p>
          <p className="text-yellow-400 mt-2">Designed & Developed by Nithin Reddy</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-accent text-white font-normal">Facebook</a>
            <a href="#" className="hover:text-accent text-white font-normal">Twitter</a>
            <a href="#" className="hover:text-accent text-white font-normal">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
