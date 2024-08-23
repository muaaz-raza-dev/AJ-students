import Axios from "@/api/Axios"
import Cookies from "js-cookie"

const ResetPhoto = async (photo: string) => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.put(`/auth/photo/`,{photo}, { headers: { token: Cookies.get(Secretkey) } })
    return response.data
}

export default ResetPhoto