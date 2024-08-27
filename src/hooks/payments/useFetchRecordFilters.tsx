"use client";
import FetchMetaFiltersRecords from "@/api/transactions/records/getRecordsFilters.api";
import { useAppDispatch } from "@/context/redux-hook";
import { RedfrInsertFilters } from "@/context/Slices/fee-records-slice";
import { useQuery } from "react-query";

export default function useFetchRecordsFilters() {
    const dispatch = useAppDispatch()
  return useQuery({
    queryKey: "fetch records",
    queryFn: FetchMetaFiltersRecords,
    onSuccess({payload}){
        dispatch(RedfrInsertFilters({type:"available",years:payload.years,feeTypes:payload.feeTypes}))
        dispatch(RedfrInsertFilters({type:"selected",year:payload.years[0],feeType:Object.keys(payload.feeTypes[payload.years[0]])[0] }))
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 ,
  });
}
