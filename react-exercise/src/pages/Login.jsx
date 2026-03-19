// Import React and useState hook for form state
import React, { useState } from 'react';
// Import useNavigate for programmatic navigation
import { useNavigate } from 'react-router';

// Create and export Login component
function Login()     {
  // State variables for form inputs and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Hook for navigation after login
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Basic validation
    if (email=== '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    // Clear any previous errors
    setError('');
    
    // Show success message
    alert('Login successful!');
    
    // Redirect to home page
    navigate('/');
  };
  return (
    // Main container
    <div className="container mx-auto p-8">
      {/* Center the form on page */}
      <div className="max-w-md mx-auto">
        {/* Form card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          
          {/* Error message display */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          {/* Login form */}
          <form onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            
            {/* Password field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;