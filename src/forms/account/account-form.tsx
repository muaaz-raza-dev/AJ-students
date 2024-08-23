"use client";

import AccountInfoSubmitBtn from '@/components/profile/Account/account-info-submit-btn';
import { useAppSelector } from '@/context/redux-hook';
import useResetPublicInfo from '@/hooks/profile/Account/useResetPublicInfo';
import { IbasicInfo } from '@/types/Icredits';
import React, { ReactNode, useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export default function AccountForm({children}:{children:ReactNode}) {
    const Info = useAppSelector(s=>s.credits.Info)
    const form = useForm<IbasicInfo>({defaultValues:Info});
    const {mutate,isSuccess,isLoading} = useResetPublicInfo()
    const FormHandler: SubmitHandler<IbasicInfo> = (data) => {
      mutate(data)
    };
    useEffect(() => {
    form.reset(Info)
    }, [Info,form])
    if(!Info) return null
  return (
    <FormProvider {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(FormHandler)}>
        {children}
        <AccountInfoSubmitBtn isUpdating={isLoading} isSuccess={isSuccess}/>
      </form>
        </FormProvider>
  )
}
