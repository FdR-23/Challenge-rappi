import React from 'react'
import '../App.css'
function Product({ product }) {

    const {
        name,
        price,
        quantity,
        available
    } = product



    return (
        <div className='products'>

            <p>Name : {name}</p>
            <p>price : {price}</p>
            <p>quantity : {quantity}</p>
            <p>available: {available === true ? "true" : "false"}</p>

        </div>
    )
}

export default Product