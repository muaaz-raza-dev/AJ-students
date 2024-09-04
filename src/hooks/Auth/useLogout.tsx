import { useAppDispatch } from "@/context/redux-hook"
import { RedcInsertPayload } from "@/context/Slices/auth-slice"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
const key =process.env.NEXT_PUBLIC_COOKIE_KEY||""
const useLogout = () => {
const {push} =useRouter()    
const dispatch = useAppDispatch()
const logOut = ()=>{
Cookies.remove(key)
dispatch(RedcInsertPayload({isLogined:false}))
toast.success("Logged Out Successfully")
push("/auth/login")
}  
return {logOut}
}

export default useLogout