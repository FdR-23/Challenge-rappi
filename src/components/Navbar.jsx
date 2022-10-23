import React from 'react'
import Menu from './Menu/Menu'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex flex-col  justify-center items-center '>
            <span className=' invisible sm:visible sm:text-lg sm:font-bold '>Challenge Rappi</span>

            <div className='bg-orange-600 rounded-tl-3xl rounded-br-3xl m-2   overflow-hidden'>
                <h1 className=' text-3xl sm:text-3xl p-2 px-4 font-bold'>Tiendas “El Baratón”</h1>
            </div>
            <Menu />
            <div className='px-1 absolute right-16 top-2 '  >
                <div className='bg-black/20 w-8 h-8 flex justify-center items-center rounded-full'>
                    <Link to="/cart">
                        <svg className='fill-white' xmlns="http://www.w3.org/2000/svg"
                            width="20px" height="20px" viewBox="0 0 20 20"  >
                            <path d="M17,14H4c-0.6,0-1-0.4-1-1V2H0V0h4c0.6,0,1,0.4,1,1v11h11.2l1.5-6H7V4h12c0.6,0,1.1,0.6,1,1.2l-2,8C17.9,13.7,17.5,14,17,14 z" />
                            <circle cx="5" cy="18" r="2" />
                            <circle cx="16" cy="18" r="2" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar