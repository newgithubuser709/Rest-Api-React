import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAction = createAsyncThunk(
  "fetchAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://661be2da65444945d050824d.mockapi.io/Items`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const SearchFilterProductsSlice = createSlice({
  name: "SearchFilterProductsSlice",
  initialState: {
    loading: false,
    promiseState: null, // Fix: Removed string "null" and replaced with null
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

export default SearchFilterProductsSlice.reducer;
