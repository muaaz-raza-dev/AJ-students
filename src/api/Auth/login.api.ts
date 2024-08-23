
import Cookies from "js-cookie"
import Axios from "../Axios"
import { Ilogin } from "@/types/Ilogin"

const Login = async(payload:Ilogin) => {
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        let response = await Axios.post("/auth/login",payload,{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}

export default Login