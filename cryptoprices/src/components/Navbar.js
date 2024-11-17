// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/price/ETH">Ethereum</Link>
        </li>
        <li>
          <Link to="/price/BTC">Bitcoin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
