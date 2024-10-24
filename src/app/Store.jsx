import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices / reducers import
import trendingNowProductsSlice from "../reducers/TrendingNowProductsSlice";
import WomenProductsSlice from "../reducers/WomenProductsSlice";
import KidsProductsSlice from "../reducers/KidsProductsSlice";
import MenProductsSlice from "../reducers/MenProductsSlice";
import SearchFilterProductsSlice from "../reducers/SearchFilterProductsSlice";
import CartSlice from "../reducers/CartSlice";
import SingleProductSlice from "../reducers/SingleProductSlice";
import BestSalesSlice from "../reducers/BestSalesSlice";

const rootReducer = combineReducers({
  TrendingNowProductsSliceKey: trendingNowProductsSlice,
  WomenProductsSliceKey: WomenProductsSlice,
  KidsProductsSliceKey: KidsProductsSlice,
  MenProductsSliceKey: MenProductsSlice,
  SearchFilterProductsSliceKey: SearchFilterProductsSlice,
  CartSliceKey: CartSlice,
  SingleProductSliceKey: SingleProductSlice,
  BestSalesSliceKey: BestSalesSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "TrendingNowProductsSliceKey",
    "WomenProductsSliceKey",
    "KidsProductsSliceKey",
    "MenProductsSliceKey",
    "SearchFilterProductsSliceKey",
    "BestSalesSliceKey",
    // Add any slices you want to exclude from persistence.
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
