import React from 'react';

const Facilities = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-bold mb-2 text-primary">Library</h3>
            <p className="text-gray-600">A vast collection of books and digital resources.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-bold mb-2 text-primary">Sports Complex</h3>
            <p className="text-gray-600">State-of-the-art facilities for various sports.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-bold mb-2 text-primary">Science Labs</h3>
            <p className="text-gray-600">Well-equipped labs for hands-on learning.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-bold mb-2 text-primary">Art Studio</h3>
            <p className="text-gray-600">A creative space for budding artists.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-bold mb-2 text-primary">Music Room</h3>
            <p className="text-gray-600">Equipped with instruments for musical exploration.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-bold mb-2 text-primary">Cafeteria</h3>
            <p className="text-gray-600">Serving healthy and delicious meals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
