import Axios from "@/api/Axios"
import { IbasicInfo } from "@/types/Icredits"
import Cookies from "js-cookie"

const ResetPublicInfo = async (payload:IbasicInfo) => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.put(`/auth/reset/public`,{Name:payload.Name,email:payload.email}, { headers: { token: Cookies.get(Secretkey) } })
    return response.data
}

export default ResetPublicInfo