"use client";
import { useAppSelector } from '@/context/redux-hook'
import moment from 'moment';
import React from 'react'

export default function TransactionHistoryComponent() {
  const {payload} =useAppSelector(s=>s.transactionHistory)
  return (
    <section className='flex flex-col gap-2'>

        {
          Object.entries(payload).map(([date,data])=>{
            return <div className="" key={date}>
          <p className="text-sm font-medium py-2">{date}</p>
          {
            data.map(block=> <div className="bg-secondary  rounded-lg p-4 w-full mb-2" key={block.Invoice}>
            <h3 className="text-lg font-bold">Invoice #{block.Invoice}</h3>
            <div className="flex justify-between items-end">
              <div className="flex flex-col  font-medium self-start">
                {
                  block.Transactions.map((tr,i)=>(
                  <p className="leading-tight text-[0.95rem] font-semibold tracking-wide" key={tr.paymentTitle}>
                  {i+1}. {tr?.month||tr.year} {tr.paymentTitle}
                </p>)
                )
                }
              </div>
              <div className="">
                <p className="text-sm text-muted-foreground text-right">
                  {moment(block.Time).format("DD MMMM YYYY hh:mm") }
                </p>
                <p className="text-sm font-bold text-right">
                  Total Amount: {block.amount.totalAmount} PKR
                </p>
              </div>
            </div>
          </div>

            )
          }
      </div>

          })
        }

    </section>
  )
}
