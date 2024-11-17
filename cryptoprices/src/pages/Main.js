// src/pages/Main.js
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Welcome to Crypto Prices</h1>
      <p>Select a cryptocurrency to view its price.</p>
      <ul>
        <li><Link to="/price/ETH">Ethereum</Link></li>
        <li><Link to="/price/BTC">Bitcoin</Link></li>
      </ul>
    </div>
  );
};

export default Main;
