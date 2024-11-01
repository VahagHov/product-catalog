import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice ( {
    name: "Products",
    initialState: {
      products: [] ,
    } ,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload
      }
    }
})

export const {setProducts} = ProductSlice.actions
export default ProductSlice.reducer