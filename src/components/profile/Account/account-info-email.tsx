"use client";
import { Input } from "@/shadcn/components/ui/input";
import { IbasicInfo } from "@/types/Icredits";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function AccountInfoEmail() {
  const { watch, setValue } = useFormContext<IbasicInfo>();
  const UpdateValue = (label: keyof IbasicInfo, val: string) => {
    setValue(label, val);
  };
  return (
      <Input
        type="email"
        placeholder="yourssharky@gmail.com"
        onChange={({ target: { value } }) => UpdateValue("email", value)}
        value={watch("email")}
      />
  );
}
