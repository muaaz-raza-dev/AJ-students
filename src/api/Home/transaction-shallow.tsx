import Axios from "../Axios";
import Cookies from "js-cookie";
export interface IshallowTransaction {
  Transactions: {
    paymentTitle: string;
    paymentType: "Custom" | "Registered";
    paymentConfigId: string;
    month?: string;
    year?: string;
    session?: string;
  };
  Time: string;
  Invoice:number;
  amount: { realAmount: number; discount: number; totalAmount: number };
}
export default async function FetchTransactionShallowDetails() {
  let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
  let response = await Axios.get<{ payload: IshallowTransaction[] }>(`/transactions/list`, {
    headers: { token: Cookies.get(Secretkey) },
  });
  return response.data;
}
