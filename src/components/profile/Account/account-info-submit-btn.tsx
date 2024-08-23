import RequestLoading from "@/components/Loader/request-loading";
import { useAppSelector } from "@/context/redux-hook";
import { useTrackChanges } from "@/hooks/global/useTrackChanges";
import { Button } from "@/shadcn/components/ui/button";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function AccountInfoSubmitBtn({isSuccess,isUpdating}:{isUpdating:boolean;isSuccess:boolean}) {
    const {watch} = useFormContext()
    const isLogined = useAppSelector(s=>s.credits.isLogined)
    const {changes,UpdateState} = useTrackChanges(watch())
    useEffect(() => {
    if(isLogined||isSuccess) UpdateState(watch())
    }, [isLogined,isSuccess])
  return (
    <Button disabled={!changes||isUpdating} type="submit" className="my-4">
        {
            isUpdating?
            <RequestLoading size="16" stroke="2"/>:
        "Update"
        }
    </Button>
  )
}
