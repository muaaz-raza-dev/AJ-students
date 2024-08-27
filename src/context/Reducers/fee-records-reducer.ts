import { IFeeRecord, IfeeRecordState, } from "@/types/IfeeRecords";
import { PayloadAction } from "@reduxjs/toolkit";
interface IfilterSelected {
    type: "selected";
    year?: string;
    feeType?: string;
}

interface IfilterAvailable {
    type: "available";
    years?: string[];
    feeTypes?: { [key: string]: { [key: string]: string[] }; };
}
type Ifilters = IfilterAvailable | IfilterSelected;

export const InsertFiltersFn = (state: IfeeRecordState, { payload }: PayloadAction<Ifilters>) => {
    if (payload.type === "selected") {
        const { type, year, feeType } = payload
        if (year) state.filters[type].year = year
        if (feeType) state.filters[type].feeType = feeType
    }
    else if (payload.type == "available") {
        const { type, years, feeTypes } = payload
        if (years) state.filters[type].years = years
        if (feeTypes) state.filters[type].feeTypes = feeTypes
    }
}

interface Ipayload {
    payload: IFeeRecord[]
}

export const InsertPayloadFn = (state: IfeeRecordState, { payload }: PayloadAction<Ipayload>) => {
    state.payload = payload.payload
}
