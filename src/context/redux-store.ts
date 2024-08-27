import { configureStore } from "@reduxjs/toolkit";
import { credits } from "./Slices/auth-slice";
import { feeRecords } from "./Slices/fee-records-slice";
import { transactionHistory } from "./Slices/transaction-history-slice";


export const Store = configureStore({
reducer:{credits,feeRecords,transactionHistory},
});

export type RootState = ReturnType <typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
