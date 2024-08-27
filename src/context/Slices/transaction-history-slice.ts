import { createSlice } from '@reduxjs/toolkit';
import { intialTransactionHistoryState, ItransactionHistoryState } from '@/types/ItransactionHistroy';
import { InsertFiltersFn, InsertPayloadFn } from '../Reducers/transaction-history-reducer';

const initialState:ItransactionHistoryState = intialTransactionHistoryState

const Credits = createSlice({
  name: 'transaction history',
  initialState,
  reducers: {RedthInsertPayload:InsertPayloadFn,RedthInsertFilters:InsertFiltersFn},
});

export const {RedthInsertFilters,RedthInsertPayload} = Credits.actions;
export const transactionHistory = Credits.reducer;