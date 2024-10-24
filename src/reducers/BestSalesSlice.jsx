import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const BestSalesfetchAction = createAsyncThunk(
  "BestSalesfetchAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://661be2da65444945d050824d.mockapi.io/Items?best_selling=false&page=1&limit=4`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

const BestSalesSlice = createSlice({
  name: "BestSalesSlice",
  initialState: {
    BestSales_Loading: false,
    BestSales_PromiseState: "null",
    BestSales_ProductList: null,
    BestSales_Error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BestSalesfetchAction.pending, (state) => {
      state.BestSales_Loading = true;
      state.BestSales_PromiseState = "pending";
    });
    builder.addCase(BestSalesfetchAction.fulfilled, (state, action) => {
      state.BestSales_Loading = false;
      state.BestSales_PromiseState = "fulfilled";
      state.BestSales_ProductList = action.payload;
    });
    builder.addCase(BestSalesfetchAction.rejected, (state, action) => {
      state.BestSales_Loading = false;
      state.BestSales_PromiseState = "rejected";
      state.BestSales_Error = action.payload;
    });
  },
});

export default BestSalesSlice.reducer;
