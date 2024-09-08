'use client';
import RequestLoading from '@/components/Loader/request-loading'
import useRequestOtp from '@/hooks/Auth/useRequestOtp'
import { Button } from '@/shadcn/components/ui/button'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

export default function ForgotPasswordPage() {
    const [gr,setGr]=useState('')
    const {mutate:request,isLoading} =useRequestOtp()
    const requestOtp = ()=>{
        if(gr){
            request(gr)
        }
    }
  return (
    <main >
          <div className="flex gap-x-1 overflow-hidden !rounded-lg glassEffect px-2 py-4  items-center w-full ">
            <div className="rounded-full center p-2 bg-white">
              <FaUser className="text-primary" size={28} />
            </div>
            <input
              autoFocus
              onChange={({target:{value}})=>setGr(value)}
              placeholder="GRNO "
              className="!bg-transparent w-full text-lg  p-2  placeholder:text-gray-200 text-white font-medium  ring-0 outline-0 border-0 focus:outline-0 active:outline-0 focus-visible:ring-0"
            />
          </div>
          <p className='text-muted text-xs py-2'>The OTP will be sended to your email address.</p>
         <Button disabled={!gr||isLoading} onClick={requestOtp} className="w-full py-8 my-5 text-xl font-bold" type="submit">
          {isLoading ? <RequestLoading /> : "Request OTP"}
        </Button>
    </main>
  )
}
