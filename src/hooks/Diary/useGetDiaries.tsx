import getDiaries from '@/api/Diary/get-diaries.api';
import { useAppDispatch } from '@/context/redux-hook';
import { ReddlInsertPayload } from '@/context/Slices/diary-slice';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

export default function useGetDiaries() {
     const dispatch = useAppDispatch();
    return useMutation({
        mutationKey: "Diaries",
        mutationFn: (date:string) => getDiaries(date),
        onMutate() {
            dispatch(ReddlInsertPayload({isLoading:true}))
        },
        onSuccess({payload}) {
            dispatch(ReddlInsertPayload({payload,isLoading:false}))
        },
        onError({response:{data:{message}}}){
          toast.error(message)
        }
      });
}
