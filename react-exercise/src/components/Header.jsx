// Import React library
import React from 'react';

// Create and export Header component
const Header = () => {
  return (
    // Header section with blue background
    <header className="bg-blue-600 text-white py-12">
      {/* Centered container */}
      <div className="container mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-4">
          Welcome 
        </h1>
        {/* Subheading */}
        <p className="text-xl">
          simple website with  login and registration functionality
        </p>
      </div>
    </header>
  );
};

export default Header;