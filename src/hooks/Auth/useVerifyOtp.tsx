import RequestOtp from "@/api/Auth/requestOtp.api"
import VerifyOtp from "@/api/Auth/verfiy-otp.apt"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useMutation } from "react-query"
import Cookies from "js-cookie"

const useVerifyOtp = () => {
    const router = useRouter()
  return useMutation({mutationKey:"request otp",mutationFn:(otp:string)=>VerifyOtp(otp),
    onSuccess: ({message}) => {
        Cookies.remove(process.env.FORGOT_COOKIE_KEY||"")
        toast.success(message)
        router.push("/")
    },
    onError: ({response:{data:{message}}}) => {
        toast.error(message)
    }
  })
}

export default useVerifyOtp