import React from 'react';
import Home from './components/Home.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './components/Cart/Cart.jsx';

function App() {


  return (
    
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/cart" component={Cart} />
      </Switch>
      </Router>
    
  );
}

export default App;
