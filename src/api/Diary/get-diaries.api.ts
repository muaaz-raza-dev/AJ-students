import Axios from "@/api/Axios"
import Cookies from "js-cookie"

const getDiaries = async(date:string) => {
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        let response = await Axios.post(`/diary`,{date},{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}

export default getDiaries