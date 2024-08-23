"use client";
import { Input } from '@/shadcn/components/ui/input'
import { IbasicInfo } from '@/types/Icredits'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function AccountInfoName() {
const {watch,setValue} =useFormContext<IbasicInfo>()
const UpdateValue = (label: keyof IbasicInfo, val: string) => {
    setValue(label, val);
  };
  return (
    <Input
    type="text"
    placeholder="Tisa Mano"
    onChange={({ target: { value } }) => UpdateValue("Name", value)}
    value={watch("Name")}
  />
  )
}
