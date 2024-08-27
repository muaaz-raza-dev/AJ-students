"use client";
import FetchCurrentFeeStatus from "@/api/transactions/recent-fee-status";
import { useQuery } from "react-query";

export default function useFetchCurrentFeeStatus() {
  return useQuery({
    queryKey: "Current Fee Status",
    queryFn: FetchCurrentFeeStatus,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 ,
  });
}
