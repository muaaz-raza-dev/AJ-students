"use client";
import ErrorValidator from '@/hooks/global/ErrorValidator';
import useFetchShallowDues from '@/hooks/payments/useFetchShallowDues';
import Link from 'next/link'
import React from 'react'
import ShallowDuesSkeleton from './shallow-due-details-skeleton';

export default function ShallowDueDetailsComp() {
 const {isLoading,data,isError} = useFetchShallowDues()
 const q= data?.payload
  return (
    <ErrorValidator isError={isError} fallback={<ShallowDuesSkeleton/>} isLoading={isLoading}>
    <div className="rounded-lg p-6 py-4 w-full bg-secondary ">
    {/* Card Content */}
    <div className="flex justify-between w-full border-b pb-2">
    <h2 className="text-sm font-bold ">Dues Details</h2>
    <Link href={"/payments/records"} className="text-sm hover:underline text-right  text-primary">
        Details
      </Link>
    </div>
    <div className="text-center flex justify-between pt-2">
      {/* Pending Fees Count */}
      <div className="">
        <h2 className="text-lg font-semibold ">Pending Fees</h2>
        <p className="text-2xl font-bold text-blue-600">{q?.PendingFee}</p>
      </div>

      {/* Divider */}
      <div className="border-r border-gray-300 my-4"></div>

      {/* Pending Amount */}
      <div>
        <h2 className="text-lg font-semibold ">Pending Amount</h2>
        <p className="text-2xl font-bold text-red-600">{q?.Dues} PKR</p>
      </div>
    </div>
  </div>
    </ErrorValidator>
  )
}
