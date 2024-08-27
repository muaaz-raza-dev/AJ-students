"use client";
import useFetchLastTransactionShallow from '@/hooks/payments/useFetchLastTransactionShallow'
import React from 'react'

export default function ShallowLastTransaction() {
    useFetchLastTransactionShallow()
  return (
    <div className="bg-secondary my-2 w-full  rounded-lg p-6 ">
    {/* Card Content */}
    <div className="text-center">
      {/* Last Payment Date */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Last Payment Date</h2>
        <p className="text-2xl font-bold text-green-600">4-July-2024</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Last Payment Amount */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700">Last Payment Amount</h2>
        <p className="text-2xl font-bold text-blue-600">48094 PKR</p>
      </div>
    </div>
  </div>
  )
}
