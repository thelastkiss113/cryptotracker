// src/pages/Price.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Price = () => {
  const { symbol } = useParams();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`);
        setPrice(response.data[symbol.toLowerCase()].usd);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrice();
  }, [symbol]);

  if (price === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Price of {symbol}</h2>
      <p>{symbol} is currently priced at ${price} USD.</p>
    </div>
  );
};

export default Price;
