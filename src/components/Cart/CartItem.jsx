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
    <div className='bg-orange-900/30 py-2 my-2 rounded-sm '>
      <article className='bg-white/20 my-2 mx-1 px-2 sm:p-2 flex flex-row items-center justify-between rounded-md '>
        <h2 className='uppercase text-xl font-bold m-auto sm:text-2xl'>{name}</h2>

        <div className='flex flex-col justify-end items-center my-2 mx-1 mb-0 sm:m-auto' >
          <div className='border border-orange-800 flex flex-row justify-between items-center w-20 rounded-sm my-1'>
            <button className=' border-r-2 border-orange-800 bg-slate-400 hover:bg-slate-500  active:bg-slate-600  w-6 font-bold'
              onClick={() => handeDecrement({ id })} disabled={quantity === 1}>-</button>
            {quantity}
            <button className=' border-l-2 border-orange-800 bg-slate-400 hover:bg-slate-500  active:bg-slate-600  w-6 font-bold'
              onClick={() => handeIncrement({ id })} disabled={foundInProducts && foundInProducts.quantity === 0}>+</button>
          </div>
          <p className='text-xs sm:text-base'>Disponibles {foundInProducts && foundInProducts.quantity}</p>
        </div >
          <h3 className='text-xl font-bold'>${finalPrice}</h3>
      </article>
      <div className='flex flex-col'>
      <button className='w-40 mx-4 text-xs font-semibold uppercase text-white hover:text-red-900 bg-black/10 rounded-md'
        onClick={() => handleDeletItem({ id })}>eliminar producto</button>
        </div>
    </div>
  )
}

export default CartItem