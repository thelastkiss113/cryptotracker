// src/pages/Price.jsx
// Page that shows the price of a specific cryptocurrency
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Price() {
  const { symbol } = useParams(); // Get the symbol parameter from the URL
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data from CoinAPI.io
  useEffect(() => {
    const fetchPrice = async () => {
      console.log(`Fetching price data for ${symbol}`);
      try {
        const response = await fetch(
          `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
          {
            method: "GET",
            headers: {
              "X-CoinAPI-Key": "4C3919B2-3F96-4EFE-AD55-BD2569DFDBD9", 
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch price data: ${errorMessage}`);
        }
        const data = await response.json();
        console.log(`Received response data: ${JSON.stringify(data)}`);
        if (!data || !data.rate) {
          throw new Error("Failed to fetch price data: invalid response");
        }
        setPrice(data.rate); // Set the price from the response data
      } catch (err) {
        console.error(err);
        setError(err.message); // Handle errors if the API call fails
      }
    };

    fetchPrice();
  }, [symbol]); // Re-fetch the price if the symbol changes

  return (
    <div>
      <h1>Price for {symbol}</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : price ? (
        <p>The current price of {symbol} is ${price.toFixed(2)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

