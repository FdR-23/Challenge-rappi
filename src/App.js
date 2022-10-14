import React from 'react';
import { useSelector } from 'react-redux'

import ListProducts from './components/ListProducts.jsx'
import MenuFilters from './components/MenuFilters.jsx';

function App() {
  const { products } = useSelector(state => state.products)

  return (
    <div>

      <MenuFilters/>
      <ListProducts
        products={products} />
    </div>
  );
}

export default App;
