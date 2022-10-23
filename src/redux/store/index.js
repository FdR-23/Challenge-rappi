import { configureStore } from '@reduxjs/toolkit'

import products from '../slices/index.js'

export const store = configureStore({
  reducer: {
    products
  },
})