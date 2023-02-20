import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./UserService";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userAPI.middleware),
});

setupListeners(store.dispatch);
