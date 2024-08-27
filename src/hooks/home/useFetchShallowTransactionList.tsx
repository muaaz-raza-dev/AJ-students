import FetchTransactionShallowDetails from "@/api/Home/transaction-shallow";
import { useQuery } from "react-query";

export default function useFetchShallowTransactionList() {
  return useQuery({
    queryKey: "Transaction Details",
    queryFn: FetchTransactionShallowDetails,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}
