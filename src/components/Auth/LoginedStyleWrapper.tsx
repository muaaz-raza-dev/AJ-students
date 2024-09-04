"use client";
import { useAppSelector } from '@/context/redux-hook'
import clsx from 'clsx'
import React, { ReactNode } from 'react'

export default function LoginedStyleWrapper({children}:{children:ReactNode}) {
    const {isLogined} = useAppSelector(s => s.credits)
  return (
    <main className={clsx(isLogined?"px-4 pb-20":"")}>
      {children}
    </main>
  )
}
