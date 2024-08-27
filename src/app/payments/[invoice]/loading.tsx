import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function InvoiceLoadingSkeleton() {
  return (
    <div className="invoice-loader">
    <Skeleton count={1} width={200} />
    <Skeleton count={2} width={100} />
    <Skeleton count={1} width={150} />
    <Skeleton count={1} width={100} />
    <Skeleton count={1} width={200} />
    <Skeleton count={1} width={100} />
    <Skeleton count={1} width={150} />
    <Skeleton count={1} width={100} />
    <Skeleton count={1} width={100} />
    <Skeleton count={1} width={100} />
  </div>
  )
}
