import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/slices/index.js'

function Product({ product }) {
    const regex = /[$,]/g;
    const ExpresionNumber = new RegExp ('^[0-9]+$', 'i');
    const [input, setInput] = useState(1);
    const dispatch = useDispatch();

    const {
        name,
        price,
        quantity,
        available,
        id
    } = product

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value <= 0 || e.target.value > quantity) {
            return
        } else if (quantity < 0) {
            return
        }
        setInput(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let newPrice = price.replace(regex, "")
        if (quantity === 0) {
            return

        } else if (!ExpresionNumber.test(input)) {
            alert("SOLO NUMEROS")
        } else {
            const product = {
                name,
                price: newPrice,
                quantity: input,
                id
            }
            dispatch(addCart(product))
            setInput(1)
        }
    }
    return (
        <div className='sm:w-56 m-2 p-2 bg-white/20 flex flex-col justify-evenly rounded-md shadow-sm
        shadow-orange-900 sm:border'>
            <h2 className='text-lg sm:text-2xl font-bold uppercase text-center
            sm'>{name}</h2>
            <div className=' flex flex-row justify-evenly items-center'>
                <span className=' font-medium my-1'>Precio: </span>
                <p className='text-xl font-bold '>{price}</p>
            </div>
            <p className='flex flex-row  items-center justify-between mr-4 my-1'><span className='text-sm font-medium'>Disponible:</span> {available === true && quantity !== 0 ?
                <span className='text-bold text-base sm:font-bold sm:text-xl text-green-900'>YES</span>
                : <span className='text-bold text-base sm:font-bold sm:text-xl text-red-600'>NO</span>

            }</p>
            <p className='font-bold my-1'><span className=' text-sm font-medium'>Cantidad: </span>{quantity}</p>
            <form onSubmit={(e) => handleSubmit(e)}
                className='flex flex-row justify-evenly items-center '>
                <input
                    className='w-14 h-6 sm:h-8 rounded-md text-center'
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
                <button
                    className={`${available === false || quantity === 0 ? 'bg-white/20 line-through border' : 'bg-orange-700 border border-orange-900 text-white'} rounded-lg m-2 p-1 font-bold text-xs sm:text-sm uppercase`}
                    type="submit" disabled={available === false || quantity === 0}>add cart</button>
            </form>
        </div>
    )
}

export default Product