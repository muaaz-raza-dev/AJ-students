import React, { useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/shadcn/components/ui/drawer"
import { Button } from '@/shadcn/components/ui/button'
import { Avatar, AvatarImage } from '@/shadcn/components/ui/avatar'
import { useAppSelector } from '@/context/redux-hook'
import Link from 'next/link'
import useSwitchAccount from '@/hooks/Auth/useSwitchAccount'
import RequestLoading from '../Loader/request-loading'
// %qpXS%4q
export default function ProfileSwitch({avatar="/sample.png"}:{avatar?:string}) {
  const [open,setOpen] = useState(false)
    const accounts =useAppSelector(s=>s.credits.otherAccounts)
    const info =useAppSelector(s=>s.credits.Info)
    const {isLoading,mutateAsync}=useSwitchAccount()
    const handleSwitch = async(id:string)=>{
      await mutateAsync(id);
      setOpen(false)
    }
  return (
<Drawer open={open} onOpenChange={(o)=>!isLoading&&setOpen(o)}>
  <DrawerTrigger>
  <Avatar className="h-full">
            <AvatarImage
              src={avatar||"/sample.png"}
              className="w-full h-full object-cover"
              />
          </Avatar>
  </DrawerTrigger>
  <DrawerContent className='z-[999]'>
    <DrawerHeader>
        <div className="flex justify-between font-semibold text-lg">Connected accounts</div>
    </DrawerHeader>
    <DrawerDescription>
        {accounts?.map(account=>(
            <div className="flex justify-between" key={account._id}>
            <div key={account._id} className='flex gap-2 items-center p-2'>
                <Avatar className="h-full">
            <AvatarImage
              src={account?.photo||"/sample.png"}
              className="w-full h-full object-cover"
              />
          </Avatar>
            <div>{account.Name}</div>
            </div>
            <div className="flex gap-2 items-center p-2">
                {
                    account._id == info?._id ?
            <Button disabled className=''>Current</Button> 
            :
            <Button variant="outline" className=''onClick={()=>handleSwitch(account._id)}>
              {
                isLoading? <RequestLoading size="16" stroke="2" /> : "Switch"
              }
              </Button>
                }
            </div>
              </div>
        ))}


    </DrawerDescription>
    <DrawerFooter>
        <Link href={"/auth/login"}>
        <Button variant="link" className="w-full ">
            Add a new account
        </Button>
      </Link>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  )
}
