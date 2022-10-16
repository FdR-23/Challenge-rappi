import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { decrementQuantity, incrementQuantity} from '../../redux/slices/index.js'

function CartItem({ product }) {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  const { name, price, quantity, id } = product;

  const foundInProducts = products.find(product => product.id === id)

  let givenNumber = price;
  let output = new Intl.NumberFormat('en-US').format(givenNumber);

  const handeIncrement = (id) => {
    dispatch(incrementQuantity(id))
  }
  const handeDecrement = (id) => {
    dispatch(decrementQuantity(id))
  }



  return (
    <div>
      <article>
        <h2> Name: {name}</h2>
        <div>
          <div>
            <p>Cantidad</p>
            <button onClick={() => handeDecrement({ id })} disabled={quantity === 1}>-</button>
            {quantity}
            <button onClick={() => handeIncrement({ id })} disabled={foundInProducts && foundInProducts.quantity === 0}>+</button>
            <span>Disponibles {foundInProducts && foundInProducts.quantity}</span>
          </div>
        </div>
        <h3>Precio <span>$ {output}</span></h3>
      </article>
      <button >eliminar product</button>
    </div>
  )
}

export default CartItem