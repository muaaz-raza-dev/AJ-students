import Axios from "../../Axios";
import Cookies from "js-cookie";
interface IOneTimeFeeRecord{
    status:"Paid"|"Not Paid",
    feeTitle: string,
    amount: number,
    Time?: string,
    Invoice?: string|number,
}
export default async function GetOneTimeFeeRecords() {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get<{payload:IOneTimeFeeRecord[]}>(`/transactions/records/oneTime`,{headers: { token: Cookies.get(Secretkey) },});
  return response.data;
}
