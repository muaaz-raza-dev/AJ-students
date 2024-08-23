import RequestSkipCurrentPassword from '@/api/Profile/Account/request-skip-c-pass';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

export default function useRequestSkipCurrentPassword() {
    return useMutation({
        mutationKey: "Request Skip Password Change",
        mutationFn: () => RequestSkipCurrentPassword(),
        onSuccess({message}) {
        toast.success(message)
        },
        onError({response:{data:{message}}}){
          toast.error(message)
        }
      });
}
