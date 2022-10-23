import React from 'react'
import MenuItems from './MenuItems';



function Dropdown({ submenus, handleClickName }) {
    return (
        <ul className=' fixed bg-white/20 justify-center items-center '>
            {submenus && submenus.map((submenu, index) => (
                submenu.sublevels ? <MenuItems
                    key={index}
                    category={submenu}
                /> :
                    <li className='w-w-22 m-2px my-1 sm:mx-2  flex flex-row  justify-center items-center  rounded-sm 
                    hover:bg-slate-600 active:bg-slate-800 bg-white/30 cursor-pointer font-semibold
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