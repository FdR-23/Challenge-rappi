import React, { useState } from 'react'
import DropdownItem from './DropdownItem';

function DropdownMenu({ text, nameItem, handleOrder }) {
    const [open, setOpen] = useState();

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <div className=' flex flex-col justify-center items-center m-1  bg-amber-500 rounded-md'>
            <div className='flex justify-between items-center text-sm w-full px-2  font-bold  '>
                {text}
                <button className='rounded-full bg-slate-500' onClick={() => handleToggle()}>{open ?
                    <svg
                        className="fill-current h-4 w-4 hover:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                    </svg>
                    :

                    <svg
                        className="fill-current h-4 w-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                    </svg>
                }
                </button></div>
            {open && nameItem.map((e, index) =>
                <DropdownItem name={e} key={index} handleOrder={handleOrder} />)}
        </div>
    )
}


export default DropdownMenu