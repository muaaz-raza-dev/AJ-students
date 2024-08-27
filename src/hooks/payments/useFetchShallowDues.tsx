"use client";
import FetchDuesPendingShallowDetails from "@/api/transactions/dues-shallow-details.api";
import { useQuery } from "react-query";

export default function useFetchShallowDues() {
  return useQuery({
    queryKey: "Dues Shallow details",
    queryFn: FetchDuesPendingShallowDetails,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 ,
  });
}
