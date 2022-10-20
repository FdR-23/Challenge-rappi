import React from 'react'
import MenuItems from './MenuItems';



function Dropdown({ submenus, handleClickName }) {
    return (
        <ul >
            {submenus && submenus.map((submenu, index) => (
                submenu.sublevels ? <MenuItems
                    key={index}
                    category={submenu}
                /> :
                    <li key={index}>
                        <a onClick={()=>handleClickName(submenu.id)}>{submenu.name}</a>
                    </li>
            ))}
        </ul>
    );
};

export default Dropdown