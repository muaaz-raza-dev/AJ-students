import Axios from "@/api/Axios"
import { Istudent } from "@/types/Istudent"
import Cookies from "js-cookie"

const FetchAcedmicInfo = async (id: string) => {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.get<{payload:Istudent}>(`/info/${id}`, { headers: { token: Cookies.get(Secretkey) } })
    return response.data
}

export default FetchAcedmicInfo