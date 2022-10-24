import React from 'react'
import MenuItems from './MenuItems';



function Dropdown({ submenus, handleClickName }) {
    return (
        <ul className='fixed bg-orange-600/90 justify-center items-center hover:bg-white/40 text-sm sm:text-base'>
            {submenus && submenus.map((submenu, index) => (
                submenu.sublevels ? <MenuItems
                    key={index}
                    category={submenu}
                /> :
                    <li className='sm:w-w-22 my-1 sm:m-2px  sm:mx-2  flex flex-row  justify-center items-center  rounded-sm 
                    hover:bg-orange-600/90  active:bg-orange-800 bg-white/40 cursor-pointer font-semibold text-sm sm:text-base
                    hover:text-white'
                    key={index}>
                        <p className=''
                        onClick={()=>handleClickName(submenu.id)}>{submenu.name}</p>
                    </li>
            ))}
        </ul>
    );
};

export default Dropdown