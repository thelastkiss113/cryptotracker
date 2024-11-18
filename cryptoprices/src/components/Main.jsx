// src/components/Main.jsx
import React from 'react';
import Currencies from './Currencies';
import Price from './Price';
import Nav from './Nav';

const Main = () => (
  <div className="container">
    <main>
      <Currencies />
      <Price />
    </main>
  </div>
);

export default Main;
