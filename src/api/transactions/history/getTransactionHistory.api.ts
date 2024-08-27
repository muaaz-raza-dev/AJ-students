import Axios from "../../Axios";
import Cookies from "js-cookie";

export default async function FetchTransactionHistory(year:number) {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.post(`/transactions/history`,{year},{headers: { token: Cookies.get(Secretkey) },});
  return response.data;
}
