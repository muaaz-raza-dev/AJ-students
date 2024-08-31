import { createSlice } from '@reduxjs/toolkit';
import { defaultDiaryLandingState, IdiaryLanding } from '@/types/IdiaryLanding';
import { InsertDiariesFn } from '../Reducers/diary-reducer';

const initialState:IdiaryLanding = defaultDiaryLandingState

const Credits = createSlice({
    
    name: 'diary landing',
  initialState,
  reducers: {ReddlInsertPayload:InsertDiariesFn},
});

export const {ReddlInsertPayload } = Credits.actions;
export const lDiary = Credits.reducer;