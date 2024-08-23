
import Cookies from "js-cookie"
import Axios from "../Axios"

const Authenticate = async() => {
        let Secretkey  = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
if(Secretkey){
        let response = await Axios.get("/auth",{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}
}

export default Authenticate