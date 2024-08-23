import RequestOtp from "@/api/Auth/requestOtp.api"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useMutation } from "react-query"

const useRequestOtp = () => {
    const router = useRouter()
  return useMutation({mutationKey:"request otp",mutationFn:(gr:string)=>RequestOtp(gr),
    onSuccess: ({message}) => {
        toast.success(message)
        router.push("/auth/otp",)
      // success action
    },
    onError: ({response:{data:{message}}}) => {
        toast.error(message)
    }
  })
}

export default useRequestOtp