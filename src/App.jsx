import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Facilities from './components/Facilities';
import AboutUs from './components/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import './App.css';
import NotFound from './pages/NotFound';

const Home = () => (
  <>
    <Navbar />
    <Hero id="home" />
    <Facilities />
    <div id="about-us" className="pt-16 bg-background">
      <AboutUs />
    </div>
    <div id="contact-us" className="pt-16">
      <ContactForm />
    </div>
    <div className="text-center py-5">
      <img src="/logo.png" alt="Logo" className="h-64 w-64 mx-auto" />
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
