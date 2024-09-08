"use client";
import { useAppSelector } from '@/context/redux-hook'
import clsx from 'clsx'
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

export default function LoginedStyleWrapper({children}:{children:ReactNode}) {
const pathname  =usePathname()
  return (
    <main className={clsx(!pathname.includes("/auth")?"px-4 pb-20":"")}>
      {children}
    </main>
  )
}
