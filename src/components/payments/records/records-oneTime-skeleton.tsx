import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function RecordsOneTimeSkeleton() {
  return (
    <div>
      <Skeleton className='w-full' height={40}/>
      <Skeleton className='w-full' height={40}/>
    </div>
  )
}
