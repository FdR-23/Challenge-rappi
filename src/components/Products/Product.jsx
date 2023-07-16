import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/slices/index.js'

function Product({ product }) {
    const regex = /[$,]/g;
    const ExpresionNumber = new RegExp('^[0-9]+$', 'i');
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
        <div className='sm:w-[220px] w-[200px] sm:h-[250px]  border rounded-md  box-border   flex flex-col  shadow-black shadow-sm border-slate-900 bg-slate-200/50'>

            <div className='p-1 text-center'>
                <h2 className='text-2xl font-bold text-slate-900 sm:text-3xl'>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2>
            </div>


            <div className='flex p-1 sm:p-2'>
                <span className='self-end pl-2 font-mono font-base sm:text-lg sm:pl-0'>
                    Precio:
                </span>
                <p className='items-center flex-1 text-3xl font-bold text-center font-ubuntu '>{price}</p>
            </div>



            <div className='flex flex-row p-1 justify-evenly sm:p-2'>
                <span className='self-end font-mono font-base sm:text-lg'>Disponible:</span>
                {available === true && quantity !== 0 ?
                    <p className='text-lg font-extrabold text-center text-green-700 sm:text-xl'>YES</p>
                    : <p className='text-lg font-extrabold text-center text-red-700 sm:text-xl '>NO</p>}
            </div>

            <div className='flex flex-row p-1 justify-evenly sm:p-2'>
                <span className='self-end font-mono font-base sm:text-lg'>Cantidad: </span>
                <p className='text-lg font-bold text-center sm:text-xl '> {quantity}</p>
            </div>




            <div className='flex items-center flex-1 p-2' >


                <form onSubmit={(e) => handleSubmit(e)}
                    className='flex flex-row items-center flex-grow justify-evenly '>
                    <input
                        className='h-6 font-bold text-center rounded-md w-14 '
                        type="text"
                        value={input}
                        onChange={(e) => handleChange(e)}
                    />
                    <button
                        className={`${!available || quantity === 0 ?
                            'bg-gray-500/90  border line-through' : ' bg-slate-700/60  border hover:shadow-black text-white'}
                         px-2 rounded-lg font-ubuntu font-bold shadow-sm boder border-black `}
                        type="submit" disabled={!available || quantity === 0}>Add cart</button>
                </form>

            </div>

        </div>
    )
}

export default Product