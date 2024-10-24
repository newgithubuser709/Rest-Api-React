import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Carts",
  initialState: {
    CartsProductList: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      const { product } = action.payload;
      const existingProductIndex = state.CartsProductList.findIndex(
        (item) => item.product_id === product.product_id
      );

      if (existingProductIndex !== -1) {
        state.CartsProductList[existingProductIndex].quantity += 1;
      } else {
        state.CartsProductList.push({
          quantity: 1,
          product_id: product.product_id,
          name: product.name,
          image_thumbNail: product.image_thumbNail,
          image_1: product.image_1,
          image_2: product.image_2,
          description_1: product.description_1,
          description_2: product.description_2,
          fashion: product.fashion,
          trending_now: product.trending_now,
          best_selling: product.best_selling,
          color: product.color,
          size: product.size,
          product_type: product.product_type,
          gender: product.gender,
          catogory: product.catogory,
          brand: product.brand,
          hot_offer: product.hot_offer,
          rating: product.rating,
          featured: product.featured,
          new: product.new,
          price: product.price,
        });
      }
    },
    RemoveFromCart: (state, action) => {
      const { product } = action.payload;
      state.CartsProductList = state.CartsProductList.filter(
        (items) => items.product_id !== product.product_id
      );
    },

    IncreaseQuantity: (state, action) => {
      const { product } = action.payload;
      const itemToIncrease = state.CartsProductList.find(
        (item) => item.product_id === product.product_id
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    DecreaseQuantity: (state, action) => {
      const { product } = action.payload;
      const itemToDecrease = state.CartsProductList.find(
        (item) => item.product_id === product.product_id
      );
      if (itemToDecrease) {
        itemToDecrease.quantity -= 1;

        if (itemToDecrease.quantity === 0) {
          state.CartsProductList = state.CartsProductList.filter(
            (item) => item.product_id !== product.product_id
          );
        }
      }
    },
  },
});

export default CartSlice.reducer;
export const { AddToCart, RemoveFromCart, IncreaseQuantity, DecreaseQuantity } =
  CartSlice.actions;
