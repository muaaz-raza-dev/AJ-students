import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function ClassBasicSkeleton() {
  return (
    <div>
    <Skeleton count={2} height={40} /> {/* Header */}
    <div style={{ display: 'flex', gap:"1rem" }}>
      <Skeleton width={200}  height={40}/> {/* Students */}
      <Skeleton width={200} height={40}/> {/* Date */}
    </div>
    <Skeleton count={1} height={20} /> {/* Teacher */}
  </div>
  )
}
