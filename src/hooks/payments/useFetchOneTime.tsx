"use client";
import GetOneTimeFeeRecords from "@/api/transactions/records/getOneTimeRecords.api";
import { useQuery } from "react-query";

export default function useFetchOneTimeFeeRecord() {
  return useQuery({
    queryKey: "One Time Fee Record",
    queryFn: GetOneTimeFeeRecords,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 ,
  });
}
