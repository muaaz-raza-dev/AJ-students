"use client";
import FetchLastTransaction from "@/api/transactions/latest-transaction-shallow";
import { useQuery } from "react-query";

export default function useFetchLastTransactionShallow() {
  return useQuery({
    queryKey: "Last Transaction Shallow",
    queryFn: FetchLastTransaction,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 ,
  });
}
