import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
const key =process.env.NEXT_PUBLIC_COOKIE_KEY||""
const useLogout = () => {
const {push} =useRouter()    
const logOut = ()=>{
Cookies.remove(key)
push("/auth/login")
toast.success("Logged Out Successfully")
}  
return {logOut}
}

export default useLogout