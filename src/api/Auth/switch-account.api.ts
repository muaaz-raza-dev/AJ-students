
import Cookies from "js-cookie"
import Axios from "../Axios"

const SwitchAccount = async(id:string) => {
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        let response = await Axios.post("/auth/switch",{id},{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}
export default SwitchAccount