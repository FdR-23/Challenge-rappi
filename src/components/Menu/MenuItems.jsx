import React, { useState } from 'react'
import Dropdown from './Dropdown';

import { useDispatch } from 'react-redux';
import { filterByCartegories } from '../../redux/slices/index.js'

function MenuItems({ category }) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    //guarda el nobmre de cada categoria para poder filtrar los productos
    const handleClickName = (name) => {
        dispatch(filterByCartegories(name))
    }

    const handleToggle = () => {
        setOpen(!open)

    }
  const onMouseEnter = () => {
    window.innerWidth > 634 && setOpen(true) ; 
  };

  const onMouseLeave = () => {
    window.innerWidth > 634 && setOpen(false);
  };

    return (
        <ul
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} 
        className="px-2 bg-white/40" >
            {category.sublevels && (
                <div className='hover:bg-sky-600 active:bg-white/40 ' >
                    <button onClick={(e) => handleToggle(e)}
                        className='flex flex-row items-center sm:w-w-22 sm:m-2px sm:mx-2 justify-evenly hover:text-white '>
                        <p className='text-sm font-bold sm:text-base'
                            onClick={() => handleClickName(category.id)}>{category.name}</p>
                        <svg
                            className="w-4 h-4 fill-current "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </button>
                    {  window.innerWidth >= 375 && open && <Dropdown
                        submenus={category.sublevels}
                        handleClickName={handleClickName} />}
                </div>)}


        </ul>

    )
}

export default MenuItems