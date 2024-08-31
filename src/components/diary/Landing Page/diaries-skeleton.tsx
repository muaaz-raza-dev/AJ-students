import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function DiariesSkeleton() {
  return (
    <div className='flex flex-col gap-4'>
        <Skeleton height={80} />
        <Skeleton height={80} />
        <Skeleton height={80} />
        <Skeleton height={80} />
    </div>
  )
}
