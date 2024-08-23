import ResetPublicInfo from "@/api/Profile/Account/reset-public-info";
import { IbasicInfo } from "@/types/Icredits";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const useResetPublicInfo = () => {
    return useMutation({
        mutationKey: "Photo Update",
        mutationFn: (payload:IbasicInfo) => ResetPublicInfo(payload),
        onSuccess({message}) {
        toast.success(message)
        },
        onError({response:{data:{message}}}){
          toast.error(message)
        }
      });
}

export default useResetPublicInfo