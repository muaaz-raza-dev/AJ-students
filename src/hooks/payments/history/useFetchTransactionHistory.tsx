import FetchTransactionHistory from '@/api/transactions/history/getTransactionHistory.api';
import { useAppDispatch } from '@/context/redux-hook';
import { RedthInsertPayload } from '@/context/Slices/transaction-history-slice';
import { useMutation } from 'react-query';

export default function useFetchTransactionHistory() {
    const dispatch=useAppDispatch()
  return useMutation({
    mutationKey: "fetch records",
    mutationFn: (year:number)=>FetchTransactionHistory(year),
    onSuccess({payload}){
      dispatch(RedthInsertPayload({payload}))
    },
  });
}
