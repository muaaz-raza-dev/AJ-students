import Axios from "@/api/Axios"
import { cookies } from 'next/headers';
const fetchDiary = async(id:string) => {
        const cookie = cookies();
        let Secretkey  =process.env.NEXT_PUBLIC_COOKIE_KEY || ""
        const authToken = cookie.get(Secretkey)?.value;
        let response = await Axios.get(`/diary/d/${id}`,{headers:{token:authToken}})
        return response.data
}

export default fetchDiary