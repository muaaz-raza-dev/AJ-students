import { Itransaction } from "@/types/Itransaction";
import Axios from "../Axios";
import Cookies from "js-cookie";

export default async function FetchDetailedInvoice(invoice:string) {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get<{ payload :Itransaction}>(`/transactions/${invoice}`, {
    headers: { token: Cookies.get(Secretkey) },
  });
  return response.data;
}
