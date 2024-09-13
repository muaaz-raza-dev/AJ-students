import FetchClassShallowDetails from "@/api/Home/class-shallow-details";
import { useAppSelector } from "@/context/redux-hook";
import { useQuery } from "react-query";

export default function useFetchShallowClassDetails() {
  const {isLogined} = useAppSelector(s=>s.credits)
  return useQuery({
    queryKey: "Class Details",
    queryFn: FetchClassShallowDetails,
    enabled:isLogined,
    refetchOnWindowFocus: false,
    refetchOnMount:true,
    staleTime: 1000 * 60 ,
  });
}
