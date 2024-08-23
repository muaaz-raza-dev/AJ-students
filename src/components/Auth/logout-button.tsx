"use client";
import useLogout from '@/hooks/Auth/useLogout';
import { Button } from '@/shadcn/components/ui/button'
import React from 'react'
import { MdLogout } from "react-icons/md";
export default function LogoutButton() {
    const {logOut} =useLogout()
  return (
    <Button variant="outline" size="icon" onClick={logOut}>
    <MdLogout  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
  </Button>
  )
}
