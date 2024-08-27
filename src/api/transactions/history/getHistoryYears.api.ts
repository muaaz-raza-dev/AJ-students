import Axios from "../../Axios";
import Cookies from "js-cookie";

export default async function FetchtHistoryYears() {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get<{payload:number[]}>(`/transactions/history/years`,{headers: { token: Cookies.get(Secretkey) },});
  return response.data;
}
