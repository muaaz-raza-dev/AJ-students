import getDiaries from '@/api/Diary/get-diaries.api';
import { useAppDispatch } from '@/context/redux-hook';
import { ReddlInsertPayload } from '@/context/Slices/diary-slice';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

export default function useGetDiaries(isSkipDispatch?:boolean ) {
     const dispatch = useAppDispatch();
    return useMutation({
        mutationKey: "Diaries",
        mutationFn: (date:string) => getDiaries(date),
        onMutate() {
            if(!isSkipDispatch) dispatch(ReddlInsertPayload({isLoading:true}))
        },
        onSuccess({payload}) {
          if(!isSkipDispatch) dispatch(ReddlInsertPayload({payload,isLoading:false}))
        },
        onError({response:{data:{message}}}){
          toast.error(message)
        }
      });
}
