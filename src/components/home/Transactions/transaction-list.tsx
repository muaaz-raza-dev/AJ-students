"use client";
import TransactionListComp from '@/components/home/Transactions/transaction-list-comp'
import useFetchShallowTransactionList from '@/hooks/home/useFetchShallowTransactionList'
import React from 'react'
import TransactionLoader from './transaction-list-skeleton'
import { FaMoneyCheckAlt } from 'react-icons/fa';

export default function TransactionListSection() {
  const {isLoading,data} = useFetchShallowTransactionList()
  const q = data?.payload
  if(isLoading) return <TransactionLoader/>
  return (
    <section className='flex flex-col gap-2 w-full'>
      {q?.length == 0 && <NoTransactionsFallback/>}
      {q?.map(e=> <TransactionListComp key={e.Time} data={e}/>)}
    </section>
  )
}
const NoTransactionsFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-secondary rounded-md">
      <FaMoneyCheckAlt className="text-gray-400 text-6xl mb-4" />
      <h2 className="text-gray-700 dark:text-white text-xl font-semibold mb-2">
        No Transactions Yet
      </h2>
      <p className="text-gray-500 mb-4">
        Your recent transactions will appear here.
      </p>
    </div>
  );
};
