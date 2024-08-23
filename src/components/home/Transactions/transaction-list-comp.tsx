import React from 'react'

export default function TransactionListComp() {
  return (
    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg shadow-sm">
    <div className="flex items-center">
      {/* Icon */}
      <div className="flex items-center justify-center w-8 h-8 bg-white rounded">
        <span className="text-blue-500 text-lg">$</span>
      </div>
      {/* Transaction Info */}
      <div className="ml-3">
        <h3 className=" font-semibold ">May 2024 Fee</h3>
        <p className="text-xs text-muted-foreground">today , 14:00 PM</p>
      </div>
    </div>
    {/* Amount and Type */}
    <div className="text-right">
      <p className=" font-semibold ">34000$</p>
      <p className="text-xs text-muted-foreground">-500$</p>
    </div>
  </div>
  )
}
