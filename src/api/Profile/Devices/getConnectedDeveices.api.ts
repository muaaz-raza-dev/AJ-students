import Axios from "@/api/Axios"
import { IconnectedDevice } from "@/types/IconnectedDevices"
import Cookies from "js-cookie"

const getConnectedDevices = async () => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.get<{payload:IconnectedDevice[]}>(`/auth/connected/devices`, { headers: { token: Cookies.get(Secretkey)} })
    return response.data
}

export default getConnectedDevices