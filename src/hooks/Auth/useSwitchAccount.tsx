"use client";
import SwitchAccount from "@/api/Auth/switch-account.api";
import { useAppDispatch } from "@/context/redux-hook";
import { RedcInsertPayload } from "@/context/Slices/auth-slice";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import useGetDiaries from "../Diary/useGetDiaries";
import useFetchShallowTransactionList from "../home/useFetchShallowTransactionList";
import useFetchShallowClassDetails from "../home/useFetchShallowClassDetails";
import moment from "moment";


export default function useSwitchAccount() {
    let dispatch = useAppDispatch();
    const { mutate:refetchTodayDiary } = useGetDiaries();
    const {refetch:refetchTransactionList} = useFetchShallowTransactionList()
    const {refetch:refetchClassHistory} =useFetchShallowClassDetails()
    return useMutation({
      mutationKey:"login",      
      mutationFn: (id:string) => SwitchAccount(id),
      onSuccess(data) {
        dispatch(RedcInsertPayload({isLogined:true,Info:data.payload,otherAccounts:data.otherAccounts}));
        refetchTodayDiary(moment().format("YYYY-MM-DD")); //fetch today diary again
        refetchTransactionList(); //fetch transaction list
        refetchClassHistory(); // fetch class history
        toast.success("Logined successfully!");
      },
      onError({response:{data:{message}}}){
        toast.error(message)
      }
    });
}
