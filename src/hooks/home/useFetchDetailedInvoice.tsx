"use client";
import FetchDetailedInvoice from "@/api/transactions/detailed-invoice-reciept.api";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

export default function useFetchDetailedInvoice() {
  const params = useParams()
  const invoice = params?.invoice as string
  return useQuery({
    queryKey: "Class Details",
    queryFn: () => FetchDetailedInvoice(invoice),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 ,
  });
}
