
import React from 'react'

export default function KeyValuePairContainer({label,value}:{label:string;value:any}) {
  if(!value) return null
  return (
    <div
    className="flex flex-col min-w-[32%] max-md:min-w-[48%]
font-medium border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2 cursor-pointer shadow-sm transition duration-300 dark:border-darker hover:bg-gray-100 ">
    <h2 className="text-gray-500  text-[0.82rem] leading-tight">
      {label} :
    </h2>
    <h2 className="leading-tight dark:text-white text-[0.92rem]">
      {value}
    </h2>
  </div>
  )
}
