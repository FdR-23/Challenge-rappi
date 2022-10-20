import React, { useState } from 'react'
import Dropdown from './Dropdown';

import { useDispatch } from 'react-redux';
import { filterByCartegories } from '../../redux/slices/index.js'

function MenuItems({ category }) {
const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    //guarda el nobmre de cada categoria para poder filtrar los productos


    const handleClickName = (name)=>{
        dispatch(filterByCartegories(name))
    }

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <li>
            {category.sublevels && (<div >
                <button onClick={(e) => handleToggle(e)}><a 
                    onClick={()=>handleClickName(category.id)}>{category.name}</a></button>
                {open && <Dropdown
                    submenus={category.sublevels}
                    handleClickName={handleClickName} />}
            </div>) }

        </li>
    )
}

export default MenuItems