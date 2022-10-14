import React from 'react'

import Product from './Product'

function ListProducts({ products }) {

    return (
        <div  className='listproducts'>
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