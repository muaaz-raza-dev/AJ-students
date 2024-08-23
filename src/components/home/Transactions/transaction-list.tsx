import TransactionListComp from '@/components/home/Transactions/transaction-list-comp'
import React from 'react'

export default function TransactionListSection() {
  return (
    <section className='flex flex-col gap-2 w-full'>
        <TransactionListComp/>
        <TransactionListComp/>
        <TransactionListComp/>
        <TransactionListComp/>
    </section>
  )
}
