// Import React library
import React from 'react';

// Create and export Footer component
const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    // Footer with dark background
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      {/* Centered container */}
      <div className="container mx-auto text-center">
        {/* Copyright text */}
        <p>&copy; {currentYear} AuthApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;