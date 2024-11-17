// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Price from './pages/Price';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </Router>
  );
};

export default App;
