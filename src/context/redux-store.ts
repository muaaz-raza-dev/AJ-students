import { configureStore } from "@reduxjs/toolkit";
import { credits } from "./Slices/auth-slice";


export const Store = configureStore({
reducer:{credits},
});

export type RootState = ReturnType <typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
