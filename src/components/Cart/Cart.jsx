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
    <div className='flex flex-col justify-center items-center p-16 '>
      <div className='relative w-80 sm:w-full bg-amber-500 
      shadow-md rounded p-4'>
        <div className='bg-orange-600/80 rounded-tl-3xl rounded-br-3xl m-2 overflow-hidden flex justify-center'>
          <h2 className='text-2xl text-white font-bold uppercase sm:text-3xl'>Cart</h2>
        </div>
        <div className='bg-red-800 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex flex-row justify-center items-center
        absolute right-1 top-1  font-semibold text-white'
        ><Link to='/'>X</Link></div>
        {cart && cart.map((product) =>
          <CartItem
            key={product.id}
            product={product} />
        )}
        <div className='bg-orange-600/80  rounded-xl flex flex-row items-center justify-between px-4 '>
          <h3 className='text-lg font-medium text-white' >Total:</h3>
          <p className='text-xl font-bold text-white'>${totalPrices}</p>
        </div>

        <button
          className='font-bold bg-white/40  p-2 my-2 rounded-md hover:text-white hover:bg-orange-600/80 '
          onClick={() => handlebuyproducts()}>COMPRAR</button>

      </div>

    </div>
  )
}

export default Cart