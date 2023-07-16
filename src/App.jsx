import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </Router>

  );
}

export default App;
