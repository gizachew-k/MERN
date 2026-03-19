// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import main App component
import App from './App.jsx';
// Import Tailwind styles
import './index.css';

// Get the root element from index.html
// Create a React root and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch common issues in development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);