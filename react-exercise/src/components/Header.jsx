// Import React library
import React from 'react';

// Create and export Header component
const Header = () => {
  return (
    // Header section with black background
    <header className="bg-black text-white py-12 h-40">
      {/* Centered container */}
      {/* mx-auto centers the container, text-center centers the text, p-8 adds padding */}
      <div className="container mx-auto text-center">
      {/* text-4xl sets font size, font-bold makes it bold, mb-7 adds margin below */}
        <h1 className="text-4xl font-bold mb-7">
          Welcome 
        </h1>
    
        <p className="text-xl">
          simple  react website with  login and registration functionality
        </p>
      </div>
    </header>
  );
};

export default Header;