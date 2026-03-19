
import React from 'react';
// Create and export Home component
const Home = () => {
  return (
    // Main container with padding
    // mx-auto centers the container, p-8 adds padding
    <div className="container mx-auto p-8"> 
      {/* Welcome section */}
      {/* text-center centers the text, mb-12 adds margin below */}
      <div className="text-center mb-12">
        {/* text-3xl sets font size, font-bold makes it bold, mb-4 adds margin below */}
        <h2 className="text-3xl font-bold mb-4">Home Page</h2>
        {/*  text-gray-600 sets text color to gray */}
        <p className="text-blue-600">
          Welcome to my simple react website. This is the home page.
        </p>
      </div>
    </div>
  );
};

export default Home;