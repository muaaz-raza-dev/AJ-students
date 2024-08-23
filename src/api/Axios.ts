import axios from "axios";
import Cookies from "js-cookie";

const Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";  // Server-side
const baseUrl = process.env.NEXT_PUBLIC_CLOUD_URI || "";  // Client-side

const Axios = axios.create({
    baseURL: `${baseUrl}/api/std`,
    headers: { "token": Cookies.get(Secretkey) } ,
    withCredentials: true, // Include cookies in requests
    
});


export default Axios;
