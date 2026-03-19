// Import React library
import React from 'react';
// Import routing components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Main App component
function App() {
  return (
    // Router component enables routing in the app
    <Router>
      {/* Flex column layout to push footer to bottom */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar - visible on all pages */}
        <Navbar />
        
        {/* Header - visible on all pages */}
        <Header />
        
        {/* Main content area - grows to fill space */}
        <main className="flex-grow">
          {/* Routes container - only one route renders at a time */}
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        
        {/* Footer - visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
