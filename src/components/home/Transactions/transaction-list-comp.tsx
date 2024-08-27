import { IshallowTransaction } from '@/api/Home/transaction-shallow'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export default function TransactionListComp({data}:{data:IshallowTransaction}) {
  return (
    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg shadow-sm">
    <div className="flex items-center">
      {/* Icon */}
      <Link href={`/payments/${data.Invoice}`} className="flex items-center justify-center w-8 h-8 bg-white rounded">

        <span className="text-primary text-lg hFont">{data.Invoice}</span>
      </Link>
      {/* Transaction Info */}
      <div className="ml-3">
        <h3 className=" font-semibold ">{data.Transactions.paymentTitle}</h3>
        <p className="text-xs text-muted-foreground">{moment(data.Time).format("DD MMMM YYYY hh:mm")}</p>
      </div>
    </div>
    {/* Amount and Type */}
    <div className="text-right">
      <p className=" font-semibold ">{data.amount.totalAmount} PKR</p>
      {
        data.amount.discount? <p className="text-xs text-green-500">Discounts : {data.amount.discount} PKR</p>:null
        }
    </div>
  </div>
  )
}
