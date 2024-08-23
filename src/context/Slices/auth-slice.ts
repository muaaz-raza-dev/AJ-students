import { defaultCredits, Icredits } from '@/types/Icredits';
import { createSlice } from '@reduxjs/toolkit';
import { InsertPayload } from '../Reducers/auth-reducer';

const initialState:Icredits = defaultCredits

const Credits = createSlice({
  name: 'credits',
  initialState,
  reducers: {RedcInsertPayload:InsertPayload},
});

export const { RedcInsertPayload } = Credits.actions;
export const credits = Credits.reducer;