import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Success from './Pages/Success';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>}  />
      <Route path="/Success" element={<ProtectedRoute element={<Success />} />} />
    </Routes>
  );
}

export default App;
