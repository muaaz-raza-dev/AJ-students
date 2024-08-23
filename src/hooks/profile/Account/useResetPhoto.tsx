import ResetPhoto from "@/api/Profile/Account/reset-photo.api";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
const useResetPhoto = (reset:(a:any)=>void) => {
  return useMutation({
    mutationKey: "Photo Update",
    mutationFn: (photo:string) => ResetPhoto(photo),
    onSuccess({message,photo}) {
    toast.success(message)
    reset({photo}) 
    },
    onError({response:{data:{message}}}){
      toast.error(message)
    }
  });
};

export default useResetPhoto;
