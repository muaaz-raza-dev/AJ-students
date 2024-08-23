import Axios from "@/api/Axios"
import Cookies from "js-cookie"

const FetchGlobalInfo = async() => {
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        let response = await Axios.get(`/global`,{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}

export default FetchGlobalInfo