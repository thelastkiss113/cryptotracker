import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Price from './pages/Price';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/price/:cryptoId" element={<Price />} />
    </Routes>
  </Router>
);
