import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productslice'

export const store = configureStore ({
    reducer: {
        Product: productReducer
    }
})