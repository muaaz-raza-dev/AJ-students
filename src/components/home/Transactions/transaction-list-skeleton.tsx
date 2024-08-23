import React from 'react'
import Skeleton from 'react-loading-skeleton';
export default function TransactionLoader() {
  return (
    <div className="flex flex-col gap-4 py-2">
    <Skeleton  className='w-full h-20' />
    <Skeleton  className='w-full h-20' />
    </div>
  )
}
