// Import React library
import React from 'react';
// Import Link component for navigation 
import { Link } from 'react-router';

// Create and export Navbar component
const Navbar = () => {
  return (
    // Navigation bar with styling
    <nav className="bg-blue-800 text-white p-4">
      {/* Container to center content */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation links container */}
        <div className="flex space-x-4">
       
          <Link to="/" className="hover:text-green-300" >
            Home
          </Link>
          <Link to="/login" className="hover:text-green-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-green-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;