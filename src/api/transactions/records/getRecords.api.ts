import Axios from "../../Axios";
import Cookies from "js-cookie";

export default async function GetFeeRecords({year,feeType}:{year:string;feeType:string[]}) {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.post(`/transactions/records`,{year,feeType},{headers: { token: Cookies.get(Secretkey) },});
  return response.data;
}
