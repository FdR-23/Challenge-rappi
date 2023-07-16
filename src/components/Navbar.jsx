import React from 'react'
import Menu from './Menu/Menu'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='relative flex flex-col items-center justify-center'>
            <span className='invisible sm:visible sm:text-lg sm:font-semibold'>Challenge Rappi</span>
            <div className='m-2 overflow-hidden bg-sky-200/10 rounded-tl-3xl rounded-br-3xl'>
                <h1 className='p-2 px-5 text-xl font-bold tracking-wider text-white sm:px-8 sm:text-3xl md:text-5xl'>QuickBuy Express Outlet</h1>
            </div>
            <Menu />

            {/* absolute   w-6 h-6 rounded-full right-2 top-2 2xl:right-64  sm:h-12 sm:w-12  */}
            <div className='absolute flex items-center justify-center w-8 h-8 rounded-full right-1 top-1 sm:w-10 sm:h-10 bg-black/20 sm:top-2 sm:right-4'>
                <Link to="/cart">
                    <svg className='w-4 fill-white sm:w-8' xmlns="http://www.w3.org/2000/svg"
                        width="20px" height="20px" viewBox="0 0 20 20"  >
                        <path d="M17,14H4c-0.6,0-1-0.4-1-1V2H0V0h4c0.6,0,1,0.4,1,1v11h11.2l1.5-6H7V4h12c0.6,0,1.1,0.6,1,1.2l-2,8C17.9,13.7,17.5,14,17,14 z" />
                        <circle cx="5" cy="18" r="2" />
                        <circle cx="16" cy="18" r="2" />
                    </svg>
                </Link>
            </div>

        </div>
    )
}

export default Navbar