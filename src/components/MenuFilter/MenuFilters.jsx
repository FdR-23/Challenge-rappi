import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    orderByPrice, orderByQuantity, orderByAvailability,
    filterByRangePrice, filterByAvailability, filterByRangeQuantity
} from '../../redux/slices/index.js';

import DropdownMenu from './DropdownMenu.jsx';


function MenuFilters({ toggleopen }) {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        to: '',
        from: '',
    });
    const [inputrange, setInputRange] = useState({
        min: '',
        max: '',
    });
    const OrderPrice = ["Mayor Precio", "Menor Precio"]
    const OrderQuantity = ["Mayor Cantidad", "Menor Cantidad"]
    const OrderAvailability = ["Disponible", "No Disponible"]



    //FUNTIONS ORDER
    const handleOrderPricer = (e) => {
        dispatch(orderByPrice(e))
    }
    const handleOrderQuantity = (e) => {
        dispatch(orderByQuantity(e))
    }



    //FUNCTIONS FILTERS
    const handleChangePrice = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }
    const handleSubmitPrice = (e) => {
        e.preventDefault();
        dispatch(filterByRangePrice(input))
        setInput({
            to: '',
            from: '',
        })
    }

    const handleClickAvailable = (e) => {
        e.preventDefault();
        dispatch(filterByAvailability(e.target.value))
    }


    const handleChangeRange = (e) => {
        setInputRange({
            ...inputrange, [e.target.name]: e.target.value
        })
    }

    const handleSubmitRange = (e) => {
        e.preventDefault();
        dispatch(filterByRangeQuantity(inputrange))
        setInputRange({
            min: '',
            max: '',
        })
    }

    return (
        <div className={`relative h-full bg-sky-900/30 text-center rounded-sm  `}
        >
            <h3 className='p-2 font-mono text-xl font-bold tracking-wide underline md:text-2xl text-slate-900'>Filtros</h3>

            <div className='flex flex-col items-center p-1 mb-2'>
                <h4 className='font-mono font-bold tracking-wide underline text-md text-slate-900 md:text-lg'>Ordenar por:</h4>

                <DropdownMenu
                    text={'Precio'}
                    nameItem={OrderPrice}
                    handleOrder={handleOrderPricer}
                />
                <DropdownMenu
                    text={'Cantidad'}
                    nameItem={OrderQuantity}
                    handleOrder={handleOrderQuantity}
                />

            </div>

            <div className='items-center p-1 mb-2'>
                <p className='font-mono font-bold tracking-wide underline text-md text-slate-900 md:text-lg'>Filtrar por:</p>

                <form onSubmit={(e) => handleSubmitPrice(e)}
                    className='flex flex-col items-center p-1'>
                    <label className='font-mono text-sm font-semibold text-slate-900 md:text-lg md:font-semibold'>Precio:</label>

                    <div className='flex justify-between w-full py-1'>

                        <div className='flex flex-row justify-around flex-1 font-mono text-sm font-bold md:justify-evenly md:text-base'>
                            <input
                                className='h-5 text-center rounded-lg w-9 md:w-16 md:h-6'
                                type='text'
                                name='to'
                                value={input.to}
                                onChange={(e) => handleChangePrice(e)}
                                placeholder='min' />

                            <input
                                className='h-5 text-center rounded-lg w-9 md:w-16 md:h-6'
                                type='text'
                                name='from'
                                value={input.from}
                                onChange={(e) => handleChangePrice(e)}
                                placeholder='max' />
                        </div>

                        <div className='flex justify-center basis-7 md:basis-12 md:justify-start md:items-center'>
                            <button className='box-content flex items-center justify-center w-5 h-5 bg-gray-100 border-white rounded-full md:border md:w-6 md:h-6 hover:border-black'
                                type="submit">
                                <svg
                                    className="w-5 h-5 -rotate-90 fill-current "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </button>
                        </div>

                    </div>
                </form>

                <form onSubmit={(e) => handleSubmitRange(e)}
                    className='flex flex-col items-center p-1'>
                    <label className='font-mono text-sm font-semibold text-slate-900 md:text-lg md:font-semibold'>Stock:</label>


                    <div className='flex justify-between w-full py-1'>

                        <div className='flex flex-row justify-around flex-1 font-mono text-sm font-bold md:justify-evenly md:text-base'>
                            <input
                                className='h-5 text-center rounded-lg w-9 md:w-16 md:h-6'
                                type='text'
                                name='min'
                                value={inputrange.min}
                                onChange={(e) => handleChangeRange(e)}
                                placeholder='min' />
                            <input
                                className='h-5 text-center rounded-lg w-9 md:w-16 md:h-6'
                                type='text'
                                name='max'
                                value={inputrange.max}
                                onChange={(e) => handleChangeRange(e)}
                                placeholder='max' />

                        </div>

                        <div className='flex justify-center basis-7 md:basis-12 md:justify-start'>
                            <button
                                className='box-content flex items-center justify-center w-5 h-5 bg-gray-100 border-white rounded-full md:border md:w-6 md:h-6 hover:border-black' type="submit">
                                <svg
                                    className="w-5 h-5 -rotate-90 fill-current "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>


            </div>
            <div className='items-center p-1 mb-2 md:flex md:flex-col md:items-center'>
                <p className='font-mono text-sm font-semibold md:pl-2 text-slate-900 md:text-lg'>Disponibilidad:</p>

                <button onClick={(e) => handleClickAvailable(e)} className='flex items-center justify-center flex-1 my-1 font-mono text-sm bg-gray-400 rounded-lg md:text-md w-28 md:w-36 text-slate-900 md:font-semibold md:text-base' value="All Products">All Products</button>
                <button onClick={(e) => handleClickAvailable(e)} className='flex items-center justify-center flex-1 mb-1 font-mono text-sm bg-gray-400 rounded-lg md:text-md w-28 md:w-36 text-slate-900 md:font-semibold md:text-base' value="Disponible">Disponible</button>
                <button onClick={(e) => handleClickAvailable(e)} className='flex items-center justify-center flex-1 mb-1 font-mono text-sm bg-gray-400 rounded-lg md:text-md w-28 md:w-36 text-slate-900 md:font-semibold md:text-base' value="No Disponible">No Disponible</button>

            </div>





        </div>
    )
}

export default MenuFilters



