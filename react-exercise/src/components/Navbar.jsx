// Import React library
import React from 'react';
// Import Link component for navigation 
import { Link } from 'react-router';

// Create and export Navbar component
const Navbar = () => {
  return (
    // Navigation bar with styling
    <nav className="bg-gray-800 text-white p-4">
      {/* Container to center content */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation links container */}
        <div className="flex space-x-4">
          {/* Link components for client-side routing */}
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;