import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { buyProductsInCart } from '../../redux/slices/index.js'
import { Link } from 'react-router-dom'



function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.products.cart)
  const price = cart && cart.map((product) => product.price)
  const sumAllPrices = price.length === 0 ? 0 : price.reduce((acc, value) => acc + value, 0)
  const totalPrices = new Intl.NumberFormat('en-US').format(sumAllPrices);


  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const handlebuyproducts = () => {
    dispatch(buyProductsInCart())
  }

  return (
    <div className='flex flex-col items-center justify-center p-16 '>
      <div className='relative p-4 rounded shadow-md w-80 sm:w-full bg-sky-800'>
        <div className='flex justify-center p-2 my-4 overflow-hidden bg-sky-600/80 rounded-tl-3xl rounded-br-3xl'>
          <h2 className='text-2xl font-bold text-white uppercase sm:text-3xl'>Cart</h2>
        </div>
        <div className='absolute flex flex-row items-center justify-center w-5 h-5 font-semibold text-white rounded-full bg-sky-900 sm:w-6 sm:h-6 right-1 top-1'
        ><Link to='/'>X</Link></div>

        {cart && cart.map((product) =>
          <CartItem
            key={product.id}
            product={product} />
        )}
        <div className='flex flex-row items-center justify-between px-4 bg-sky-600/80 rounded-xl '>
          <h3 className='text-lg font-medium text-white' >Total:</h3>
          <p className='text-xl font-bold text-white'>${totalPrices}</p>
        </div>

        <button
          className='p-2 my-2 font-bold rounded-md bg-white/40 hover:text-white hover:bg-sky-600/80 '
          onClick={() => handlebuyproducts()}>COMPRAR</button>

      </div>

    </div>
  )
}

export default Cart