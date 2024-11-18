import React, { useState, useEffect } from 'react';

const Price = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&api_key=${import.meta.env.VITE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch crypto data');
        }

        const data = await response.json();
        setCryptos(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cryptos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crypto-list">
      {cryptos.map(crypto => (
        <div className="card" key={crypto.id}>
          <div className="card-header">
            <h3>{crypto.name}</h3>
            <span>{crypto.symbol.toUpperCase()}</span>
          </div>
          <div className="card-body">
            <p className="price">${crypto.current_price.toFixed(2)}</p>
            <div className={`price-change ${crypto.price_change_percentage_24h > 0 ? 'up' : 'down'}`}>
              {crypto.price_change_percentage_24h > 0 ? (
                <i className="fas fa-arrow-up"></i>
              ) : (
                <i className="fas fa-arrow-down"></i>
              )}
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Price;
