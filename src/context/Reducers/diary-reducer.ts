import { IdiaryLanding, IshortDiary } from "@/types/IdiaryLanding";
import { PayloadAction } from "@reduxjs/toolkit";

export const InsertDiariesFn = (state: IdiaryLanding, { payload }: PayloadAction<{ payload?: IshortDiary[]; isLoading?: boolean }>) => {
    if (payload.payload) state.diaries = payload.payload
    if (payload.isLoading != undefined) state.isLoading = payload.isLoading
}