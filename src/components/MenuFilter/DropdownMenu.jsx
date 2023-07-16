import React, { useState } from 'react'


function DropdownMenu({ text, nameItem, handleOrder }) {
    const [open, setOpen] = useState();

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='flex flex-col w-full mb-1 bg-gray-400 rounded-md md:w-48 md:mb-2'>

                <div className='flex flex-row items-center w-full text-sm font-bold justify-evenly '>
                    <p className='flex-1 font-mono text-sm text-slate-900 md:font-semibold md:text-base'>
                        {text}
                    </p>

                    <div className='flex items-center basis-5 md:basis-8'>
                        <button className='rounded-full bg-slate-200 ' onClick={() => handleToggle()}>{open ?
                            <svg
                                className="w-4 h-4 fill-current hover:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                            :
                            <svg
                                className="w-4 h-4 fill-current "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        }
                        </button>
                    </div>

                </div>

            </div>


            <div className={`${open ? 'flex' : 'hidden'} flex-col w-full items-center`}>
                {open && nameItem.map((e, index) =>
                    <button key={index}
                        className='w-24 p-1 mb-1 text-xs bg-gray-500 rounded-lg text-slate-50 first:mt-0 md:w-36 md:text-sm'
                        onClick={() => handleOrder(e)}>{e}
                    </button>

                )}
            </div>


        </>
    )
}


export default DropdownMenu