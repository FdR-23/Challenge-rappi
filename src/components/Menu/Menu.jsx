import React from 'react'

import { useSelector } from 'react-redux'

import MenuItems from './MenuItems'
function Menu() {
    const { categories } = useSelector(state => state.products)
    return (

        <div className='flex flex-row sm:p-1'>
            {categories && categories.map((element, index) =>
                <MenuItems
                    key={index}
                    category={element}
                />
            )}
        </div>
    )
}

export default Menu