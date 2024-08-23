import React from 'react'
import AccountInfoLabelInputWrapper from '../Account/account-info-label-input-wrapper'
import { Input } from '@/shadcn/components/ui/input'
import { Button } from '@/shadcn/components/ui/button'
import useRequestSkipCurrentPassword from '@/hooks/profile/Account/useRequestSkipCurrentPassword'
import { Controller, useFormContext } from 'react-hook-form'
import { IpasswordReset } from '@/types/Ipassword-reset'

export default function PasswordUpdateCurrentPass() {
  const { control } = useFormContext<IpasswordReset>()
    const {mutate,data,isLoading,isSuccess} =useRequestSkipCurrentPassword()
    const isSkippable = data?.payload
  return (
    <AccountInfoLabelInputWrapper
    pClassName="!flex-col !items-start gap-2"
    label="Current Password"
    description="Type your current password."
  >
    <Controller name="current" control={control} rules={{required:!isSkippable&&"Current Password is required"}} render={({field,fieldState})=>{
          return<>
           <Input {...field} type="password" placeholder="Tisa Mano" />
           {fieldState.error && <p className="text-destructive text-xs">{fieldState.error.message}</p>
           }
          </>
        }}>
        </Controller>
    <div className="flex justify-end">
    <Button disabled={isLoading||isSuccess||isSkippable} onClick={()=>mutate()} variant={"secondary"}> Skip Current Password </Button>
    </div>
  </AccountInfoLabelInputWrapper>
  )
}
