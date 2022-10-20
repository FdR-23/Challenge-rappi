import React, { useState } from 'react'
import DropdownItem from './DropdownItem';

function DropdownMenu({ text, nameItem, handleOrder }) {
    const [open, setOpen] = useState();

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <ul>
            <p> {text} <button onClick={() => handleToggle()}>{open ? "close" : "open"}</button></p>
            {open && nameItem.map((e, index) =>
                <DropdownItem name={e} key={index} handleOrder={handleOrder} />)}

        </ul>
    )
}


export default DropdownMenu