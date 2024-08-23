"use client";
import AccountInfoSubmitBtn from '@/components/profile/Account/account-info-submit-btn';
import useResetPassword from '@/hooks/profile/Account/useResetPassword';
import { defaultPasswordResetState, IpasswordReset } from '@/types/Ipassword-reset';
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import PasswordUpdateFormSubmit from './password-update-form-submit';

export default function PasswordUpdateForm({children}:{children:ReactNode}) {
    const form = useForm<IpasswordReset>({defaultValues:defaultPasswordResetState});
    const {mutate,isLoading} = useResetPassword(form.reset)
    const FormHandler: SubmitHandler<IpasswordReset> = (data) => {
      mutate(data)
    };

  return (
    <FormProvider {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(FormHandler)}>
        {children}
        <PasswordUpdateFormSubmit isUpdating={isLoading}/>
      </form>
        </FormProvider>
      
  )
}

