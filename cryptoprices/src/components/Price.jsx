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
    <div>
      {cryptos.map(crypto => (
        <div key={crypto.id}>
          <h2>{crypto.name}</h2>
          <p>Price: ${crypto.current_price}</p>
        </div>
      ))}
    </div>
  );
};

export default Price;
