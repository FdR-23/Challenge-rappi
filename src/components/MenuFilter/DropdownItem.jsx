import React from 'react'

function DropdownItem({ name, handleOrder }) {

    return (
            <div className='flex flex-row justify-center bg-slate-600 text-zinc-200 text-xs w-24 text-center mb-1 p-1 rounded-md'>
                <p 
                className=' '
                onClick={() => handleOrder({ name })}>{name}</p>
            </div>
    )
}
export default DropdownItem