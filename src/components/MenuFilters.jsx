import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { filterByPrice, filterByQuantity, filterByAvailability } from '../redux/slices/index.js';

function MenuFilters() {

    const OrderbyPrice = ["Mayor Precio", "Menor Precio"]
    const OrderbyQuantity = ["Mayor Cantidad", "Menor Cantidad"]
    const OrderbyAvailability = ["Disponible", "No Disponible"]

    return (
        <div>
            <DropdownMenu
                text={'Ordernar por Precio'}
                nameItem={OrderbyPrice}
            />
            <DropdownMenu
                text={'Ordernar por Cantidad'}
                nameItem={OrderbyQuantity}
            />
            <DropdownMenu
                text={'Ordernar por Disponibilidad'}
                nameItem={OrderbyAvailability}
            />
        </div>
    )
}

export default MenuFilters



function DropdownMenu({ text, nameItem }) {
    const [open, setOpen] = useState();

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <ul>
            <p> {text} <button onClick={() => handleToggle()}>{open ? "close" : "open"}</button></p>
            {open && nameItem.map((e, index) =>
                <DropdownItem name={e} key={index} />)}

        </ul>
    )
}


function DropdownItem({ name }) {
    const dispatch = useDispatch();


    const handleClick = (e) => {
        dispatch(filterByPrice(e.name))
        dispatch(filterByQuantity(e.name))
        dispatch(filterByAvailability(e.name))
    }
    return (
        <li >
            <div >
                <span onClick={(e) => handleClick({ name })}>{name}</span>
            </div>

        </li >
    )
}