import FetchAcedmicInfo from "@/api/Profile/Acedmic/fetch-acedmic-info.api";
import { useAppSelector } from "@/context/redux-hook";
import { useQuery } from "react-query";

const useFetchStudentInfo = () => {
  const Student = useAppSelector((s) => s.credits.Info?.Student) || "";
  return useQuery({
    queryKey:  Student,
    queryFn: () => FetchAcedmicInfo(Student),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    onSuccess({ payload }) {
      console.log(payload);
    },
  });
};
export default useFetchStudentInfo;
