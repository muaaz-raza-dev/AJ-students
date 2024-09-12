"use client";
import React from 'react'
import { ModeToggle } from '../ThemeToggle'
import LogoutButton from '../Auth/logout-button'
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/context/redux-hook';
import ProfileSwitch from './profile-switch';

export default function Header() {
   const path = usePathname();
   const Name =useAppSelector(s=>s.credits.Info?.Name)
   const avatar =useAppSelector(s=>s.credits.Info?.photo)
   if(path.includes("/auth"))  return null
  return (
    <header className='min-h-12 items-center flex justify-between px-4 py-6'>
      <div className="flex gap-2 items-center">

        <ProfileSwitch avatar={avatar}/>
      <div className="">
        <h1 className='hFont font-medium text-lg leading-tight '>Hi {Name||""}.</h1>
        <p className='text-muted-foreground tracking-tight text-sm'>How are you today?</p>
      </div>
          </div>
      <div className="flex gap-2">
      <ModeToggle/>
      <LogoutButton/>
      </div>
    </header>
  )
}
