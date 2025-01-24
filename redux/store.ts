import { configureStore } from "@reduxjs/toolkit";
import { ticketSlice } from "./slices/demo";

export const store = configureStore({
    reducer:{
      ticketDetail: ticketSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
