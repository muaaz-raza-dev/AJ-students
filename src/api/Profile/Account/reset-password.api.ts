import Axios from "@/api/Axios"
import Cookies from "js-cookie"

const ResetPassword = async (payload: { current: string; New: string }) => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.put("/auth/reset/password", payload, 
        { headers: { token: Cookies.get(Secretkey) } })
    return response.data
}

export default ResetPassword