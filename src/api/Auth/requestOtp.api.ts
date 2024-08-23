import Axios from "../Axios"
const RequestOtp = async(gr:string) => {
        let response = await Axios.post("/auth/otp",{gr})
        return response.data
}

export default RequestOtp