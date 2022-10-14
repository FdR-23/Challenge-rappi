import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { orderByPrice, orderByQuantity, orderByAvailability } from '../redux/slices/index.js';

function MenuFilters() {
    const dispatch = useDispatch();

    const OrderPrice = ["Mayor Precio", "Menor Precio"]
    const OrderQuantity = ["Mayor Cantidad", "Menor Cantidad"]
    const OrderAvailability = ["Disponible", "No Disponible"]


    const handleOrderPricer = (e) => {
        dispatch(orderByPrice(e.name))
    }
    const handleOrderQuantity = (e) => {
        dispatch(orderByQuantity(e.name))
    }

    const handleOrderAvailabilty = (e) => {
        dispatch(orderByAvailability(e.name))
    }



    return (
        <div>
            <DropdownMenu
                text={'Ordernar por Precio'}
                nameItem={OrderPrice}
                onClick={handleOrderPricer}
            />
            <DropdownMenu
                text={'Ordernar por Cantidad'}
                nameItem={OrderQuantity}
                onClick={handleOrderQuantity}
            />
            <DropdownMenu
                text={'Ordernar por Disponibilidad'}
                nameItem={OrderAvailability}
                onClick={handleOrderAvailabilty}
            />
        </div>
    )
}

export default MenuFilters



function DropdownMenu({ text, nameItem, onClick }) {
    const [open, setOpen] = useState();

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <ul>
            <p> {text} <button onClick={() => handleToggle()}>{open ? "close" : "open"}</button></p>
            {open && nameItem.map((e, index) =>
                <DropdownItem name={e} key={index} onClick={onClick} />)}

        </ul>
    )
}


function DropdownItem({ name, onClick }) {

    return (
        <li >
            <div >
                <span onClick={() => onClick({ name })}>{name}</span>
            </div>

        </li >
    )
}