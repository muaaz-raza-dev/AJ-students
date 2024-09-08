import VerifyOtp from "@/api/Auth/verfiy-otp.apt"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useMutation } from "react-query"
import Cookies from "js-cookie"
import { useAppDispatch } from "@/context/redux-hook"
import { RedcInsertPayload } from "@/context/Slices/auth-slice"

const useVerifyOtp = () => {
  let dispatch = useAppDispatch();
    const router = useRouter()
    
  return useMutation({mutationKey:"request otp",mutationFn:(otp:string)=>VerifyOtp(otp),
    onSuccess: ({message,payload}) => {
        Cookies.remove(process.env.NEXT_PUBLIC_FORGOT_COOKIE_KEY||"")
        toast.success(message)
        dispatch(RedcInsertPayload({isLogined:true,Info:payload}))
        router.push("/")
    },
    onError: ({response:{data:{message}}}) => {
        toast.error(message)
    }
  })
}

export default useVerifyOtp