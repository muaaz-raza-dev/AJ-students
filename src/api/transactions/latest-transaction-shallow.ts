import Axios from "../Axios";
import Cookies from "js-cookie";

export default async function FetchLastTransaction() {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get(`/transactions/last/shallow`, {
    headers: { token: Cookies.get(Secretkey) },
  });
  return response.data;
}
