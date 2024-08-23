import Login from "@/api/Auth/login.api";
import { useAppDispatch, useAppSelector } from "@/context/redux-hook";
import { RedcInsertPayload } from "@/context/Slices/auth-slice";
import { Ilogin } from "@/types/Ilogin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
const useLogin = () => {
    let dispatch = useAppDispatch();
    const router  =useRouter()
    return useMutation({
      mutationKey:"login",      
      mutationFn: (payload:Ilogin) => Login(payload),
      onSuccess(data) {
          router.push("/")
        dispatch(RedcInsertPayload({isLogined:true,Info:data.payload}))
        toast.success("Logined successfully!")
      },
      onError({response:{data:{message}}}){
        toast.error(message)
      }
    });
};

export default useLogin;
