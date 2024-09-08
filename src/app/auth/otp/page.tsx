'use client';
import RequestLoading from "@/components/Loader/request-loading"
import useVerifyOtp from "@/hooks/Auth/useVerifyOtp"
import { Button } from "@/shadcn/components/ui/button"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/shadcn/components/ui/input-otp"
import { Label } from "@/shadcn/components/ui/label"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [otp,setOtp] =useState('')
  const {mutate:verify,isLoading} = useVerifyOtp()
  const verifyOtp = ()=>{
    if(otp.length==4) verify(otp)
  }
  return (
        <div className=" rounded-md p-8 flex flex-col gap-2">
            <Label htmlFor="OTP" className="text-xl hFont">Enter Your OTP</Label>
            <div className="glassEffect p-6">
          <InputOTP maxLength={4} minLength={4} id="OTP" value={otp} onChange={setOtp}>
          <InputOTPGroup>
              <InputOTPSlot index={0}  className="text-3xl w-16 h-16 "/>
          </InputOTPGroup>
              <InputOTPSeparator />
          <InputOTPGroup>
              <InputOTPSlot index={1}  className="text-3xl w-16 h-16 "/>
              </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>

              <InputOTPSlot index={2}  className="text-3xl w-16 h-16 "/>
              </InputOTPGroup>
              <InputOTPSeparator />

          <InputOTPGroup>
              <InputOTPSlot index={3}  className="text-3xl w-16 h-16 "/>
              </InputOTPGroup>
          </InputOTP>
            </div>
          <p className="text-gray-400 text-sm">Please enter the one-time password sent to your email.</p>
          <Button disabled={otp.length!=4&&isLoading} onClick={verifyOtp}
           className="w-full py-8 my-5 text-xl font-bold" type="submit">
          {isLoading ? <RequestLoading /> : "Verify OTP"}
        </Button>


        </div>
      
  )
}
