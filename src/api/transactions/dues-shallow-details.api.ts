import Axios from "../Axios";
import Cookies from "js-cookie";

export default async function FetchDuesPendingShallowDetails() {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get<{ payload :{Dues:number;PendingFee:number}}>(`/transactions/dues/shallow`, {
    headers: { token: Cookies.get(Secretkey) },
  });
  return response.data;
}
