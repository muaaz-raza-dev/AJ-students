import LogOutApi from "@/api/Auth/logout.api"
import { useAppDispatch } from "@/context/redux-hook"
import { RedcInsertPayload } from "@/context/Slices/auth-slice"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useMutation } from "react-query"
const key =process.env.NEXT_PUBLIC_COOKIE_KEY||""
const useLogout = () => {
const {push} =useRouter()    
const dispatch = useAppDispatch()
return useMutation({mutationFn:LogOutApi,mutationKey:"logOut",onSuccess(data) {
    Cookies.remove(key)
    dispatch(RedcInsertPayload({isLogined:false}))
    toast.success("Logged Out Successfully")
    push("/auth/login")
},
onError(){
    toast.error("Failed to Logout")
}})
}

export default useLogout