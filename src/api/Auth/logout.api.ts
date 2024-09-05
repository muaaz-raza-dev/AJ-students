
import Cookies from "js-cookie"
import Axios from "../Axios"
import { Ilogin } from "@/types/Ilogin"

const LogOutApi = async() => {
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        let response = await Axios.post("/auth/logout",{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}

export default LogOutApi