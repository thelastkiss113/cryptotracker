// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Price from './components/Price.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/prices" element={<Price />} />
      </Routes>
    </Router>
  );
}

export default App;
