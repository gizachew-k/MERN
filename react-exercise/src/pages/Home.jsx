// Import React library
import React from 'react';

// Create and export Home component
const Home = () => {
  return (
    // Main container with padding
    <div className="container mx-auto p-8">
      {/* Welcome section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Home Page</h2>
        <p className="text-gray-600">
          Welcome to our application. This is the home page.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Feature 1</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Feature 2 card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Feature 2</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Feature 3 card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Feature 3</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;