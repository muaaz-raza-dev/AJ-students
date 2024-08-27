import { ItransactionHistory, ItransactionHistoryState } from "@/types/ItransactionHistroy";
import { PayloadAction } from "@reduxjs/toolkit";
interface IfilterSelected {
    type: "selected";
    year?: number;
}

interface IfilterAvailable {
    type: "available";
    years?: number[];
}
type Ifilters = IfilterAvailable | IfilterSelected;

export const InsertFiltersFn = (state: ItransactionHistoryState, { payload }: PayloadAction<Ifilters>) => {
    if (payload.type === "selected") {
        const { type, year } = payload
        if (year) state.filters[type].year = year
    }
    else if (payload.type == "available") {
        const { type, years } = payload
        if (years) state.filters[type].years = years
    }
}

interface Ipayload {
    payload: { [key: string]: ItransactionHistory[] }
}

export const InsertPayloadFn = (state: ItransactionHistoryState, { payload }: PayloadAction<Ipayload>) => {
    state.payload = payload.payload
}
