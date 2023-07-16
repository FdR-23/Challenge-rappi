import React from 'react'
import MenuItems from './MenuItems';



function Dropdown({ submenus, handleClickName }) {
    return (
        <ul className='fixed z-10 items-center justify-center text-sm bg-sky-600/90 hover:bg-white/40 sm:text-base'>
            {submenus && submenus.map((submenu, index) => (
                submenu.sublevels ? <MenuItems
                    key={index}
                    category={submenu}
                /> :
                    <li className='flex flex-row items-center justify-center my-1 text-sm font-semibold rounded-sm cursor-pointer sm:w-w-22 sm:m-2px sm:mx-2 hover:bg-sky-600/90 active:bg-sky-800 bg-white/40 sm:text-base hover:text-white'
                    key={index}>
                        <p className=''
                        onClick={()=>handleClickName(submenu.id)}>{submenu.name}</p>
                    </li>
            ))}
        </ul>
    );
};

export default Dropdown