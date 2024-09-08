import Axios from "@/api/Axios"
import Cookies from "js-cookie"

const KickSpecificDevice = async (password:string,deviceIp:string) => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.put(`/auth/kick/device`,{password, deviceIp}, { headers: { token: Cookies.get(Secretkey)} })
    return response.data
}

export default KickSpecificDevice