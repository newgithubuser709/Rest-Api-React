import { createSlice } from "@reduxjs/toolkit";

const SingleProductSlice = createSlice({
  name: "SingleProductSlice",
  initialState: {
    product__array: null,
  },
  reducers: {
    PushSigleProduct: (state, action) => {
      const { product } = action.payload;
      state.product__array = [];
      state.product__array.push({ ...product });
    },
  },
});

export default SingleProductSlice.reducer;
export const { PushSigleProduct } = SingleProductSlice.actions;
