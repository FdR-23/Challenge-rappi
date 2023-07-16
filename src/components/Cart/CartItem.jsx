import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { decrementQuantity, incrementQuantity, deletItemCart, } from '../../redux/slices/index.js'

function CartItem({ product }) {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  const { name, price, quantity, id } = product;

  const foundInProducts = products.find(product => product.id === id)

  let givenNumber = price;
  let finalPrice = new Intl.NumberFormat('en-US').format(givenNumber);

  const handeIncrement = (id) => {
    dispatch(incrementQuantity(id))
  }
  const handeDecrement = (id) => {
    dispatch(decrementQuantity(id))
  }

  const handleDeletItem = (id) => {
    dispatch(deletItemCart(id))
  }

  return (
    <div className='py-2 my-2 rounded-lg bg-blue-900/30 '>
      <article className='flex flex-row items-center justify-between px-2 mx-1 my-2 rounded-lg bg-white/20 sm:p-2 '>
        <h2 className='m-auto text-xl font-bold uppercase sm:text-2xl'>{name}</h2>

        <div className='flex flex-col items-center justify-end mx-1 my-2 mb-0 sm:m-auto ' >
          <div className='flex flex-row items-center justify-between w-20 my-1 overflow-hidden rounded-md'>
            <button className='w-6 font-bold border-r-2 border-blue-800 bg-blue-600/80 hover:bg-white/20 active:bg-slate-600'
              onClick={() => handeDecrement({ id })} disabled={quantity === 1}>-</button>
            {quantity}
            <button className='w-6 font-bold border-l-2 border-blue-800 bg-blue-600/80 hover:bg-white/20 active:bg-slate-600'
              onClick={() => handeIncrement({ id })} disabled={foundInProducts && foundInProducts.quantity === 0}>+</button>
          </div>
          <p className='text-xs sm:text-base'>Disponibles {foundInProducts && foundInProducts.quantity}</p>
        </div >
          <h3 className='text-xl font-bold'>${finalPrice}</h3>
      </article>
      <div className='flex flex-col'>
      <button className='w-40 mx-4 text-xs font-semibold text-white uppercase rounded-md hover:text-red-900 bg-white/20'
        onClick={() => handleDeletItem({ id })}>eliminar producto</button>
        </div>
    </div>
  )
}

export default CartItem