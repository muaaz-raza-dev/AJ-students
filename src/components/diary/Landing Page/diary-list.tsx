"use client";
import React from 'react'
import DiaryEachDiary from './diary-each-diary'
import { useAppSelector } from '@/context/redux-hook'
import moment from 'moment';
import DiariesSkeleton from './diaries-skeleton';

export default function DiaryList() {
  const {isLoading,diaries} =useAppSelector(s=>s.lDiary)
  if(isLoading) return <DiariesSkeleton/>
  return (
    <main className="">
      {
        diaries.length?
    <h1 className="hFont mb-2 text-gray-700 text-sm font-bold ">{moment(diaries[0].date).format("dddd, DD-MMMM-YYYY")}</h1>
     : null
      }
    <section className="flex flex-col gap-2">
      {diaries.length ==  0 && <h1 className='text-gray-700 text-center py-8 font-black text-xl'>No Diary</h1>}
      {diaries.map(d=> <DiaryEachDiary key={d._id} data={d}/>)}
 </section>
  </main>
  )
}
