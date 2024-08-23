import FetchGlobalInfo from "@/api/global/fetch-global-info";
import { useAppSelector } from "@/context/redux-hook";
import { useQuery } from "react-query";

const useFetchGlobalInfo = () => {
  const { isLogined } = useAppSelector((s) => s.credits);
  return useQuery({
    queryKey: "global",
    queryFn: () => isLogined && FetchGlobalInfo(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    onSuccess({ payload }) {},
  });
};
export default useFetchGlobalInfo;
