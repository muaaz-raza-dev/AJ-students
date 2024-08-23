
import Axios from "../Axios"
import Cookies from "js-cookie"
const forgotkey = process.env.NEXT_PUBLIC_FORGOT_COOKIE_KEY || "asdf"
const VerifyOtp = async(otp:string) => {
        let response = await Axios.post("/auth/otp/verify",{otp},{headers:{[forgotkey]:Cookies.get(forgotkey)}})
        return response.data
}

export default VerifyOtp