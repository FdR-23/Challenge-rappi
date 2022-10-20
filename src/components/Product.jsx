import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/slices/index.js'

function Product({ product }) {
    const regex = /[$,]/g;
    const [input, setInput] = useState(1);
    const dispatch = useDispatch();

    const {
        name,
        price,
        quantity,
        available,
        id
    } = product

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value <= 0 || e.target.value > quantity) {
            return
        } else if (quantity < 0) {
            return
        }
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPrice = price.replace(regex, "")
        
        if (quantity === 0) {
            return
        } else {
            const product = {
                name,
                price: newPrice,
                quantity: input,
                id
            }
            dispatch(addCart(product))
            setInput(1)
        }
    }

    return (
        <div className='products'>
            <p>Name : {name}</p>
            <p>price : {price}</p>
            <p>quantity : {quantity}</p>
            <p>available: {available === true ? "true" : "false"}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Cantidad</p>
                <input
                    type="number"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit" disabled={available === false || quantity === 0}>add carts</button>
            </form>
        </div>
    )
}

export default Product