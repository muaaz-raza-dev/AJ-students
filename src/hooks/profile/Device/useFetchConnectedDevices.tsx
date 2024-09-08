
import getConnectedDevices from "@/api/Profile/Devices/getConnectedDeveices.api"
import { useQuery } from "react-query"

const useFetchConnectedDevices = ()=>{
    return useQuery({queryKey:"account details",queryFn:getConnectedDevices,refetchOnWindowFocus:false,staleTime:1000*60*5 ,})
}
export default useFetchConnectedDevices