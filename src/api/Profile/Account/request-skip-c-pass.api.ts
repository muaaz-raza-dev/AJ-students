import Axios from "@/api/Axios"
import Cookies from "js-cookie"

const RequestSkipCurrentPassword = async () => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.post<{payload:boolean,success:boolean;message:string}>(`/auth/password/skip`,{}, { headers: { token: Cookies.get(Secretkey) } })
    return response.data
}

export default RequestSkipCurrentPassword