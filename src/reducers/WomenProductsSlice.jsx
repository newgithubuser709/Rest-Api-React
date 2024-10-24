import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAction = createAsyncThunk(
  "fetchAction",
  async ({ FilterName, FilterValue }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://661be2da65444945d050824d.mockapi.io/Items?${FilterName}=${FilterValue}&page=1&limit=6`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

const WomenProductsSlice = createSlice({
  name: "WomenProductsSlice/fetch",
  initialState: {
    loading: false,
    promiseState: "null",
    productList: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAction.pending, (state) => {
      state.loading = true;
      state.promiseState = "pending";
    });
    builder.addCase(fetchAction.fulfilled, (state, action) => {
      state.loading = false;
      state.promiseState = "fulfilled";
      state.productList = action.payload;
    });
    builder.addCase(fetchAction.rejected, (state, action) => {
      state.loading = false;
      state.promiseState = "rejected";
      state.error = action.payload;
    });
  },
});

export default WomenProductsSlice.reducer;
