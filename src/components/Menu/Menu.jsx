import React from 'react'

import { useSelector } from 'react-redux'

import MenuItems from './MenuItems'
function Menu() {
    const { categories } = useSelector(state => state.products)

    const depthLevel = 0;

    return (
        <ul>
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