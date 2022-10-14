import { createSlice } from '@reduxjs/toolkit'


import data_c from '../../data/categories.json'
import data_p from '../../data/products.json'


const initialState = {
    categories: data_c.categories,
    products: data_p.products,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterByPrice: (state, actions) => {
            console.log(actions.payload)

            const filterPrice = actions.payload === "Mayor Precio" ?
                state.products.sort(function (a, b) {
                    if (a.price < b.price) return -1
                    if (a.price > b.price) return 1
                    else return 0
                }) :
                 state.products.sort(function (a, b) {
                    if (a.price < b.price) return 1
                    if (a.price > b.price) return -1
                    else return 0
                })
            state.products = [...filterPrice]
        },
        filterByQuantity: (state, actions) => {
            console.log(actions.payload)

            const filterQuantity = actions.payload === "Mayor Cantidad" ?
                state.products.sort(function (a, b) {
                    if (a.quantity < b.quantity) return 1
                    if (a.quantity > b.quantity) return -1
                    else return 0
                }) : state.products.sort(function (a, b) {
                    if (a.quantity < b.quantity) return -1
                    if (a.quantity > b.quantity) return 1
                    else return 0
                })
            state.products = [...filterQuantity]
        },
        filterByAvailability: (state, actions) => {
            console.log(actions.payload)

            const filterAvailability = actions.payload === "Disponible" ?
                state.products.sort(function (a, b) {
                    if (a.available === true) return -1
                else if  (b.available === true) return 1
                    else return 0
                }) : state.products.sort(function (a, b) {
                    if (a.available === true) return 1
                else if  (b.available === true) return -1
                    else return 0
                })
            state.products = [...filterAvailability]
        },

    },
})

// Action creators are generated for each case reducer function
export const { filterByPrice, filterByQuantity, filterByAvailability } = productsSlice.actions

export default productsSlice.reducer