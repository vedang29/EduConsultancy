import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for Signup and Signin */}
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
