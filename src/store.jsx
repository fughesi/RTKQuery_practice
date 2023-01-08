import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// setupListeners(store.dispatch);
