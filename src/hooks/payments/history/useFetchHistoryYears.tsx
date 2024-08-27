"use client";
import FetchtHistoryYears from '@/api/transactions/history/getHistoryYears.api';
import { useAppDispatch } from '@/context/redux-hook';
import { RedthInsertFilters } from '@/context/Slices/transaction-history-slice';
import { useQuery } from 'react-query';

export default function useFetchHistoryYears() {
    const dispatch = useAppDispatch()
    return useQuery({
        queryKey: "History Months",
        queryFn: FetchtHistoryYears,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 ,
        onSuccess({ payload }) {
          dispatch(RedthInsertFilters({type:"available",years:payload}))
        },
      });
}

