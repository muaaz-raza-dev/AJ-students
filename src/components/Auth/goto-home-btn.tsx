"use client";
import { useAppSelector } from '@/context/redux-hook';
import Link from 'next/link';
import React from 'react'
import { ImCross } from "react-icons/im";

export default function GotoHomeBtn() {
    const {isLogined} =useAppSelector(s=>s.credits)
if(!isLogined) return null;
  return (
    <Link href={"/"} className='absolute top-10 right-10 text-white center'>
    <ImCross />
    </Link>
  )
}
