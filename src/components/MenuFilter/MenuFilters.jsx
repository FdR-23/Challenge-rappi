import { applyMiddleware } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    orderByPrice, orderByQuantity, orderByAvailability,
    filterByRangePrice, filterByAvailability, filterByRangeQuantity
} from '../../redux/slices/index.js';

import DropdownMenu from './DropdownMenu.jsx';

function MenuFilters() {
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
        <div>

            <div>
                <DropdownMenu
                    text={'Ordernar por Precio'}
                    nameItem={OrderPrice}
                    handleOrder={handleOrderPricer}
                />
                <DropdownMenu
                    text={'Ordernar por Cantidad'}
                    nameItem={OrderQuantity}
                    handleOrder={handleOrderQuantity}
                />
                <DropdownMenu
                    text={'Ordernar por Disponibilidad'}
                    nameItem={OrderAvailability}
                    handleOrder={handleOrderAvailabilty}
                />
            </div>

            <div>
                <form onSubmit={(e) => handleSubmitPrice(e)}>
                    <p>filtrar por rango de precio</p>
                    <input
                        type='text'
                        name='to'
                        value={input.to}
                        onChange={(e) => handleChangePrice(e)}
                        placeholder='min' />

                    <input
                        type='text'
                        name='from'
                        value={input.from}
                        onChange={(e) => handleChangePrice(e)}
                        placeholder='max' />
                    <button type="submit">filtrar</button>
                </form>

                <div>
                    <button onClick={(e) => handleClickAvailable(e)} value="All Products">All Products</button>
                    <button onClick={(e) => handleClickAvailable(e)} value="Disponible">Disponible</button>
                    <button onClick={(e) => handleClickAvailable(e)} value="No Disponible">No Disponible</button>
                </div>

                <form onSubmit={(e) => handleSubmitRange(e)}>
                    <p>filtrar por rango de precio</p>
                    <input
                        type='text'
                        name='min'
                        value={inputrange.min}
                        onChange={(e) => handleChangeRange(e)}
                        placeholder='min' />
                    <input
                        type='text'
                        name='max'
                        value={inputrange.max}
                        onChange={(e) => handleChangeRange(e)}
                        placeholder='max' />
                    <button type="submit">filtrar</button>
                </form>

            </div>
        </div>
    )
}

export default MenuFilters



