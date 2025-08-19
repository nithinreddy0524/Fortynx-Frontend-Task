import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Us</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/2">
            <img
              src="/assets/about.png"
              alt="Green Valley School"
              className="w-full text-black"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg mb-4">
              At Green Valley School, we believe in nurturing young minds to become future leaders. Established in 1995, our school has been a beacon of excellence in education, fostering creativity, critical thinking, and a passion for lifelong learning.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our dedicated faculty and state-of-the-art facilities provide students with the tools they need to excel academically and personally. From a rich curriculum to extracurricular activities, we ensure a holistic development for every child.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Green Valley School takes pride in its diverse and inclusive community, where students from various backgrounds come together to learn and grow. Our curriculum is designed to challenge and inspire, preparing students for success in a rapidly changing world.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Over the years, our students have achieved remarkable milestones, including top rankings in national exams, awards in science fairs, and victories in sports competitions. These accomplishments reflect our commitment to excellence and the hard work of our students and faculty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
