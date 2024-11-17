// src/components/Nav.jsx
// Navigation component that links to different pages

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/currencies">Currencies</Link>
        </li>
        <li>
          <Link to="/price/bitcoin">Bitcoin Price</Link>
        </li>
      </ul>
    </nav>
  );
}
