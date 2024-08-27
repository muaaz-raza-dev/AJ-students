import FetchClassShallowDetails from "@/api/Home/class-shallow-details";
import { useQuery } from "react-query";

export default function useFetchShallowClassDetails() {
  return useQuery({
    queryKey: "Class Details",
    queryFn: FetchClassShallowDetails,
    refetchOnWindowFocus: false,
    refetchOnMount:true,
    staleTime: 1000 * 60 ,
  });
}
