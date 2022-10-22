import React from 'react'

import Product from './Product'

function ListProducts({ products }) {

    return (
        <div  className='flex flex-row flex-wrap justify-center '>
            {products && products.map((element) =>
                <Product 
                    key={element.id}
                    product={element}
                />
            )}
        </div>
    )
}

export default ListProducts