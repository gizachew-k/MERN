
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
    </div>
  );
};

export default Home;