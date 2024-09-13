"use client";
import GetFeeRecords from "@/api/transactions/records/getRecords.api";
import { useAppDispatch } from "@/context/redux-hook";
import { RedfrInsertPayload } from "@/context/Slices/fee-records-slice";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

export default function useFetchRecords() {
    const dispatch =useAppDispatch()
  return useMutation({
    mutationKey: "fetch records",
    mutationFn: ({year,feeType}:{year:string,feeType:string[]})=>GetFeeRecords({year,feeType}),
    onMutate(){
      dispatch(RedfrInsertPayload({isLoading:true}))
    },
    onSuccess({payload}){
        dispatch(RedfrInsertPayload({payload,isLoading:false}))
    },
    onError({response:{data:{message}}}){
      toast.error(message)
      dispatch(RedfrInsertPayload({isLoading:false}))
    },
    
  });
}
