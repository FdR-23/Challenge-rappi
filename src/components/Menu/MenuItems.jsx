import React, { useState } from 'react'
import Dropdown from './Dropdown';

import { useDispatch } from 'react-redux';

import { filterByNameCartegories } from '../../redux/slices/index.js'

function MenuItems({ category }) {

    const [open, setOpen] = useState(false);

    //guarda el nobmre de cada categoria para poder filtrar los productos
    const handleClickName = (name)=>{
        console.log(name)
        
    }

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <li>
            {category.sublevels && (<div >
                <button onClick={(e) => handleToggle(e)}><a onClick={()=>handleClickName(category.name)}> {category.name}</a>  </button>
                {open && <Dropdown
                    submenus={category.sublevels}
                    handleClickName={handleClickName} />}
            </div>) }

        </li>
    )
}

export default MenuItems