import React from 'react'
import { MdCurrencyExchange } from 'react-icons/md'

export default function ShallowUpComingFees() {
  return (
    <section className='flex gap-2'>
           <div className="bg-gradient-to-br from-secondary to-primary-foreground  rounded-lg p-4 w-[49%] transform border-muted border-2 transition-transform hover:scale-105 hover:shadow">
    <div className="flex items-center justify-between ">
      <h2 className="dark:text-white text-lg  font-semibold">Monthly Fee</h2>
      <span className="dark:text-white">
        <MdCurrencyExchange size={24}/>
      </span>
    </div>
    <p className="dark:text-white text-sm font-semibold">June 2024</p>
    <p className="text-muted-foreground text-xs mt-1">From 01-June-2024</p>
  </div>
      <div className="bg-gradient-to-br from-secondary to-primary-foreground  rounded-lg p-4 w-[49%] transform border-muted border-2 transition-transform hover:scale-105 hover:shadow">
    <div className="flex items-center justify-between ">
      <h2 className="dark:text-white text-lg  font-semibold">Monthly Fee</h2>
      <span className="dark:text-white">
        <MdCurrencyExchange size={24}/>
      </span>
    </div>
    <p className="dark:text-white text-sm font-semibold">June 2024</p>
    <p className="text-muted-foreground text-xs mt-1">From 01-June-2024</p>
  </div>
    </section>
  )
}
