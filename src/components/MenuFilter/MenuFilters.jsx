import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    orderByPrice, orderByQuantity, orderByAvailability,
    filterByRangePrice, filterByAvailability, filterByRangeQuantity
} from '../../redux/slices/index.js';

import DropdownMenu from './DropdownMenu.jsx';


function MenuFilters({toggleopen}) {

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
        dispatch(orderByPrice(e.name))
    }
    const handleOrderQuantity = (e) => {
        dispatch(orderByQuantity(e.name))
    }

    const handleOrderAvailabilty = (e) => {
        dispatch(orderByAvailability(e.name))
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
        <div className={`flex flex-col ${toggleopen ? ' ' : 'hidden'}
         relative w-48 bg-amber-700 rounded-md m-1  p-1 text-center`}
         >
            <div className='bg-slate-800/50 m-1 rounded-md items-center'>
                <p className='text-md text-zinc-100 font-bold'>Ordenar por</p>
                <DropdownMenu
                    text={' Precio'}
                    nameItem={OrderPrice}
                    handleOrder={handleOrderPricer}
                />
                <DropdownMenu
                    text={'Cantidad'}
                    nameItem={OrderQuantity}
                    handleOrder={handleOrderQuantity}
                />
                <DropdownMenu
                    text={'Disponibilidad'}
                    nameItem={OrderAvailability}
                    handleOrder={handleOrderAvailabilty}
                />
            </div>

            <div className='bg-slate-800/50 m-1 rounded-md  items-center'>
                <p className='text-md text-zinc-100 font-bold'>Filtrar por</p>

                <form onSubmit={(e) => handleSubmitPrice(e)}
                    className='bg-amber-500 m-1 rounded-md  items-center flex flex-col'>
                    <p className=' font-bold '>Rango de precio</p>
                    <div className='flex flex-row m-2 justify-center items-center'>
                        <input
                            className='w-10 h-5 mx-1 rounded-sm  text-center text-sm'
                            type='text'
                            name='to'
                            value={input.to}
                            onChange={(e) => handleChangePrice(e)}
                            placeholder='min' />

                        <input
                            className='w-10 h-5 mx-1 rounded-sm  text-center text-sm'
                            type='text'
                            name='from'
                            value={input.from}
                            onChange={(e) => handleChangePrice(e)}
                            placeholder='max' />
                        <button className='h-5 w-5 flex justify-center items-center rounded-full bg-gray-600'
                            type="submit">
                            <svg
                                className="fill-current h-5 w-5 -rotate-90 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg></button>
                    </div>
                </form>

                <div className='bg-amber-500 m-1 rounded-md  items-center flex flex-col text-center'>
                    <p className='font-bold '>Disponibilidad</p>

                    <button onClick={(e) => handleClickAvailable(e)} className='mb-1 text-sm w-28 flex justify-center items-center rounded-full bg-gray-200' value="All Products">All Products</button>
                    <button onClick={(e) => handleClickAvailable(e)} className='mb-1 text-sm w-28 flex justify-center items-center rounded-full bg-gray-200' value="Disponible">Disponible</button>
                    <button onClick={(e) => handleClickAvailable(e)} className='mb-1 text-sm w-28 flex justify-center items-center rounded-full bg-gray-200' value="No Disponible">No Disponible</button>

                </div>


                <form onSubmit={(e) => handleSubmitRange(e)}
                    className='bg-amber-500 m-1 rounded-md  items-center flex flex-col'>
                    <p className='font-bold'>Cantidad de stock</p>
                    <div className='flex flex-row m-2 justify-center items-center'>
                        <input
                            className='w-10 h-5 mx-1 rounded-sm  text-center text-sm'
                            type='text'
                            name='min'
                            value={inputrange.min}
                            onChange={(e) => handleChangeRange(e)}
                            placeholder='min' />
                        <input
                            className='w-10 h-5 mx-1 rounded-sm text-center text-sm'
                            type='text'
                            name='max'
                            value={inputrange.max}
                            onChange={(e) => handleChangeRange(e)}
                            placeholder='max' />
                        <button
                            className='h-5 w-5 flex justify-center items-center rounded-full bg-gray-600' type="submit">
                            <svg
                                className="fill-current h-5 w-5 -rotate-90 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg></button>
                    </div>
                </form>
            </div>

           
        </div>
    )
}

export default MenuFilters



