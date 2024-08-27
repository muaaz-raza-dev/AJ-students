import Axios from "../Axios";
import Cookies from "js-cookie";
interface Ipayload { amount: number;  
    dueDate: string;        
    month: string;          
    paymentDate: string;    
    status: "Due"|"Paid"|"No Fees";   
    year: number;
    feeTitle:string;
    Time?:string;
    Invoice?:string|number
 }
export default async function FetchCurrentFeeStatus() {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get<{payload:Ipayload[]}>(`/transactions/recent/shallow`, {
    headers: { token: Cookies.get(Secretkey) },
  });
  return response.data;
}
