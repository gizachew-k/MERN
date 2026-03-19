// Import React library
import React from 'react';

// Create and export Footer component
const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    // Footer with dark background
    //bg-gray-500 sets background color, text-white sets text color, py-6 adds vertical padding, mt-auto pushes footer to bottom
    <footer className="bg-gray-500 text-white py-6 mt-auto">
      {/* Centered container */}
      <div className="container mx-auto text-center h-20">
        {/* Copyright text */}
        <p>&copy; {currentYear} gizachew kassa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;