"use client";
import { useAppSelector } from '@/context/redux-hook'
import { IFeeRecord } from '@/types/IfeeRecords';
import clsx from 'clsx';
import moment from 'moment'
import Link from 'next/link';
import React from 'react'
import { MdClass } from 'react-icons/md';

const statusBtnStyle = `text-sm px-4 py-1 rounded-full  font-semibold text-white`
function StatusValidator(status:"Advanced Paid" | "Upcoming" | "Paid" | "Pending" | "No Fees"){
  switch(status){
    case 'Advanced Paid': return <div className={clsx(statusBtnStyle,'bg-green-800')}>Advanced Paid</div>
    case 'Upcoming': return <div className={clsx(statusBtnStyle,'bg-yellow-600')}>Upcoming</div>
    case 'Paid': return <div className={clsx(statusBtnStyle,'bg-green-600')}>Paid</div>
    case 'Pending': return <div className={clsx(statusBtnStyle,'bg-red-700')}>Pending</div>
    case 'No Fees': return <div className={clsx(statusBtnStyle,'bg-gray-900')}>No Fees</div>
  }
}

export default function RecordsComponent() {
  const {payload} =useAppSelector(s=>s.feeRecords)

  return (
    <section className='flex flex-col gap-2'>
{
  payload.length === 0 && <div className="text-center text-xl text-muted-foreground font-bold ">No Records found</div>
}
{payload.map(data=>  <EachRecordComponent data={data} key={data.status+data.Time}/>)}
  </section>
  )
}



const EachRecordComponent = ({data}:{data:IFeeRecord})=>{
  return <div className="w-full rounded-lg overflow-hidden  p-4  bg-secondary" key={data.status+data.feeTitle}>
  {/* Month Header */}
  <p className="text-xs text-muted-foreground font-bold  ">{data.feeTitle}</p>
  <div className="flex justify-between">
  <div className="text-xl font-bold  ">{data.month || data.year}</div>
  {StatusValidator(data.status)}
  </div>

  {/* Fee Amount */}
  <div className=" text-base">
    <span className="font-semibold ">Amount: </span> {data.amount} PKR
  </div>
  <div className="flex gap-2 items-center font-medium text-sm text-muted-foreground">
  <MdClass/> Class {data.class}
  </div>



  {/* Conditional Rendering for Additional Details */}
  {data.status === 'Paid' && (
    <div className="text-sm text-gray-700 mt-1">
      <div className="">
      <Link href={`/payments/${data.Invoice}`} className="font-bold underline">
       <span className="font-semibold text-black">Invoice No:</span> {data.Invoice}
        </Link>
      </div>
      <div className="">
        <span className="font-semibold">Payment Date:</span> {moment(data.Time).format("DD MMMM YYYY")}
      </div>
    </div>
  )}

  
</div>
}
