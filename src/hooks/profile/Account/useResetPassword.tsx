import ResetPassword from '@/api/Profile/Account/reset-password.api';
import { defaultPasswordResetState } from '@/types/Ipassword-reset';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

export default function useResetPassword(reset:(val:any)=>void) {
    return useMutation({
        mutationKey: "Reset password",
        mutationFn: (payload:{current:string;New:string}) => ResetPassword(payload),
        onSuccess({message}) {
        reset(defaultPasswordResetState)
        toast.success(message)
        },
        onError({response:{data:{message}}}){
          toast.error(message)
        }
      });
}
