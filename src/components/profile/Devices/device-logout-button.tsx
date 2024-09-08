import { Button } from "@/shadcn/components/ui/button";
import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { Label } from "@/shadcn/components/ui/label";
import { Input } from "@/shadcn/components/ui/input";
import useKickSpecificDevice from "@/hooks/profile/Device/useKickSpecificDevice";
import RequestLoading from "@/components/Loader/request-loading";

export default function DeviceLogoutButton({deviceIp}:{deviceIp?:string}) {
    const [open,setOpen]= useState(false)
    const [password,setPassword] = useState("")
    const {mutateAsync,isLoading} = useKickSpecificDevice()

    const handleSubmit = async()=>{
        if(password&&!isLoading&&deviceIp) {
            await mutateAsync({password,deviceIp})
            setOpen(false)
        }
    }
  return (
    <Dialog open={open} onOpenChange={(open)=>!isLoading&&setOpen(open)}>
      <DialogTrigger>
        <Button variant={"secondary"} className="flex gap-2">
          <MdLogout size={18} /> Log out
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure? </DialogTitle>
        </DialogHeader>
          <DialogDescription>
            <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-left">
              Password
            </Label>
            <Input id="password" className="" value={password} onChange={({target:{value}})=>setPassword(value)}/>
            <p className="text-xs text-muted-foreground text-left">Enter your current passowrd.</p>
          </div>
          <div className="flex justify-end  gap-2">
          <Button variant={"secondary"}  className="flex gap-2 " onClick={()=>setOpen(false)}>
            Cancel
          </Button>
          <Button  className="flex gap-2 " disabled={isLoading} onClick={handleSubmit}>
            {isLoading? <RequestLoading size="16" stroke="2" /> : "Log out"}
          </Button>
             </div>
          </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
