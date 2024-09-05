import Axios from "@/api/Axios"
import { IshortDiary } from "@/types/IdiaryLanding"
import Cookies from "js-cookie"

const getDiaries = async(date:string) => {
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        let response = await Axios.post<{payload:IshortDiary[]}>(`/diary`,{date},{headers:{token:Cookies.get(Secretkey)}})
        return response.data
}

export default getDiaries