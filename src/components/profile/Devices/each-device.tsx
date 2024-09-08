import { Button } from '@/shadcn/components/ui/button';
import { IconnectedDevice } from '@/types/IconnectedDevices';
import React from 'react'
import {  FaCode,  FaMapPin } from "react-icons/fa";
import { MdDevices, MdLogout } from 'react-icons/md';
import { FaCircleCheck } from "react-icons/fa6";
import { CgRadioCheck } from "react-icons/cg";
import DeviceLogoutButton from './device-logout-button';
export default function EachConnectedDeviceComponent({data}:{data?:IconnectedDevice}) {
  return (
    <div className="w-full rounded-md p-3 border-muted-foreground border-dashed border">
        <div className="flex w-full justify-between items-center mb-2">
          <div className="flex gap-2">
          <MdDevices className='w-12 h-12 text-xl text-muted-foreground' />
            <div className="">
              <h1 className="hFont font-semibold">{data?.deviceInfo.platform.split(" ").slice(0,2).join(" ")}</h1>
              <p className='text-sm'>{data?.deviceInfo.browser}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
        <div className=" text-sm items-center ">
          
        <div className="flex gap-1 items-center text-muted-foreground">
          <FaMapPin />
          {
            data?.locationInfo?
            <>
           {data?.locationInfo?.city} {data?.locationInfo?.country}
            </> :
            "Unavailable"
          }
        </div>
       
        <div className="flex gap-1 text-muted-foreground items-center">
          <FaCode /> {data?.ip}
        </div>
        <div className="flex gap-1 text-muted-foreground items-center">
          {data?.isPrimary?
          <>
          <FaCircleCheck className='text-primary' size={16} /> Your current device 
          </>
          :
          <>
          <CgRadioCheck  className='text-muted-foreground' size={16} /> Other connected device 
          </>
        }
        </div>
        </div>
        {!data?.isPrimary&&
         <DeviceLogoutButton deviceIp={data?.ip}/>
        }
        </div>
      </div>
  )
}
