import { defaultFeeRecord,  IfeeRecordState } from '@/types/IfeeRecords';
import { createSlice } from '@reduxjs/toolkit';
import { InsertFiltersFn, InsertPayloadFn } from '../Reducers/fee-records-reducer';

const initialState:IfeeRecordState = defaultFeeRecord

const Credits = createSlice({
  name: 'fee records',
  initialState,
  reducers: { RedfrInsertFilters :InsertFiltersFn,RedfrInsertPayload:InsertPayloadFn},
});

export const { RedfrInsertFilters,RedfrInsertPayload } = Credits.actions;
export const feeRecords = Credits.reducer;