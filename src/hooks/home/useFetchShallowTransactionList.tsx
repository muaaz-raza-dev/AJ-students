import FetchTransactionShallowDetails from "@/api/Home/transaction-shallow";
import { useAppSelector } from "@/context/redux-hook";
import { useQuery } from "react-query";

export default function useFetchShallowTransactionList() {
  const {isLogined} = useAppSelector(s=>s.credits)
  return useQuery({
    queryKey: "Transaction Details",
    enabled:isLogined,
    queryFn: FetchTransactionShallowDetails,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}
