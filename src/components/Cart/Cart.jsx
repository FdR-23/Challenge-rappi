import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function Cart() {

  const { cart } = useSelector(state => state.products)

  const price = cart && cart.map((product) => product.price)
  const sumAllPrices = price.length === 0 ? 0 : price.reduce((acc, value) => acc + value)
  const totalPrices = new Intl.NumberFormat('en-US').format(sumAllPrices);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])



  return (
    <div>Cart
      <div>
        {cart && cart.map((product) =>
          <CartItem
            key={product.id}
            product={product} />
        )}
      </div>
      <div>
        <h3>Total Precio <span>$ {totalPrices}</span></h3>
      </div>
    </div>
  )
}

export default Cart