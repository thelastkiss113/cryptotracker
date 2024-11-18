import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const Currencies = () => {
  return (
    <div className="currencies-container">
      <div className="currencies-header">
        <h1 className="page-title">Currencies</h1>
        <p className="description">Explore a variety of cryptocurrencies and their details.</p>
      </div>

      <div className="currencies-list">
        <div className="currency-item">
          <h3>Bitcoin (BTC)</h3>
          <p>
            Bitcoin is the first decentralized cryptocurrency and remains the most well-known digital asset.
          </p>
          <Link to="/bitcoin" className="learn-more">
            Learn More
          </Link>
        </div>
        
        <div className="currency-item">
          <h3>Ethereum (ETH)</h3>
          <p>
            Ethereum is a decentralized platform that enables smart contracts and decentralized applications.
          </p>
          <Link to="/ethereum" className="learn-more">
            Learn More
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Currencies;
