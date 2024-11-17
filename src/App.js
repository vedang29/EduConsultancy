import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Verify from './components/Verify';
import About from './components/About';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for Signup and Signin */}
        <Route path="/" element={<LandingPage />} />  {/* Home route */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
