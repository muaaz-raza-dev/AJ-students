import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

export default function Quote() {
  return (
    <div className=" mx-auto bg-black w-full text-white  p-4 rounded-lg shadow-md transform transition hover:scale-105 duration-300">
         <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 rounded-lg"
        style={{ backgroundImage: "url('/quote.png')" }}
      ></div>
    <div className="flex items-center mb-2">
      <FaQuoteLeft className="text-white text-2xl mr-2" />
      <h2 className="text-lg font-semibold">Quote of the Day</h2>
    </div>
    <p className="italic text-sm mb-3">{`Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful`}</p>
    <p className="text-right text-xs font-medium">- Muaaz Raza</p>
  </div>
  )
}
