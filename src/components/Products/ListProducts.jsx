import React from 'react'

import Product from './Product'

function ListProducts({ products }) {
    return (
        <div className='box-border flex flex-row flex-wrap justify-around gap-2 m-2 sm:gap-4'>
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