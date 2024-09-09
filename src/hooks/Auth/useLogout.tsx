import LogOutApi from "@/api/Auth/logout.api"
import { useAppDispatch, useAppSelector } from "@/context/redux-hook"
import { RedcInsertPayload } from "@/context/Slices/auth-slice"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useMutation } from "react-query"
import { useFetchHomePage } from "./useSwitchAccount"
const key =process.env.NEXT_PUBLIC_COOKIE_KEY||""
const useLogout = () => {
const {otherAccounts,Info} =useAppSelector(s=>s.credits)
const refetch = useFetchHomePage()
const {replace} =useRouter()    
const dispatch = useAppDispatch()
return useMutation({mutationFn:LogOutApi,mutationKey:"logOut",onSuccess(data) {
    if(otherAccounts && otherAccounts?.length <= 1){
        dispatch(RedcInsertPayload({isLogined:false,otherAccounts:[]}))
        Cookies.remove(key)
        replace("/auth/login")
    }
    else {
        console.log({otherAccounts:otherAccounts?.filter(acc=>acc.Name!=Info?.Name),Info:data.payload})
        dispatch(RedcInsertPayload({otherAccounts:otherAccounts?.filter(acc=>acc.Name!=Info?.Name),Info:data.payload}))
        toast("Logged into other account")
        replace("/")
        refetch()
    }
    
    toast.success("Logged Out Successfully from "+Info?.Name)
},
onError(){
    toast.error("Failed to Logout")
}})
}

export default useLogout