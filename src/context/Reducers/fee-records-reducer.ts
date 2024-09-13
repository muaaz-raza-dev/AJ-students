import { IFeeRecord, IfeeRecordState, } from "@/types/IfeeRecords";
import { PayloadAction } from "@reduxjs/toolkit";
interface IfilterSelected {
    type: "selected";
    year?: string;
    feeType?: string;
    isLoading?: boolean;
}

interface IfilterAvailable {
    type: "available";
    years?: string[];
    feeTypes?: { [key: string]: { [key: string]: string[] }; };
    isLoading?: boolean;
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

    if(payload.isLoading != undefined) state.isLoading = payload.isLoading;
}

interface Ipayload {
    payload?: IFeeRecord[];
    isLoading?: boolean;
}

export const InsertPayloadFn = (state: IfeeRecordState, { payload }: PayloadAction<Ipayload>) => {
    if(payload.payload)state.payload = payload.payload;
    if(payload.isLoading != undefined) state.isLoading = payload.isLoading;
}
