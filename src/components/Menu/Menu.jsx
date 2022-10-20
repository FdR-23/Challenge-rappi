import React from 'react'

import { useSelector } from 'react-redux'

import MenuItems from './MenuItems'
function Menu() {
    const { categories } = useSelector(state => state.products)
    return (
     
        <ul className='w-full bg-blue-800 display flex justify-evenly'>
            
            {categories && categories.map((element, index) =>
                <MenuItems
                    key={index}
                    category={element}

                />
            )}
        </ul>
    )
}

export default Menu