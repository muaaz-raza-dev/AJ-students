"use client";
import TransactionListComp from '@/components/home/Transactions/transaction-list-comp'
import useFetchShallowTransactionList from '@/hooks/home/useFetchShallowTransactionList'
import React from 'react'
import TransactionLoader from './transaction-list-skeleton'

export default function TransactionListSection() {
  const {isLoading,data} = useFetchShallowTransactionList()
  const q = data?.payload
  if(isLoading) return <TransactionLoader/>
  return (
    <section className='flex flex-col gap-2 w-full'>
      {q?.length == 0 && <div className="text-center text-xl text-muted-foreground font-bold ">No Transactions found</div>}
      {q?.map(e=> <TransactionListComp key={e.Time} data={e}/>)}
    </section>
  )
}
