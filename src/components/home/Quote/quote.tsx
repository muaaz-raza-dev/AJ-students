import React from 'react'

export default function Quote() {
  return (
    <div className=" mx-auto bg-black w-full text-white  p-4 rounded-lg shadow-md transform transition hover:scale-105 duration-300">
         <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30 rounded-lg"
        style={{ backgroundImage: "url('/quote.png')" }}
      ></div>
    <div className="flex items-center mb-2">
      {/* <FaQuoteLeft className="text-white text-2xl mr-2" /> */}
      <h2 className="text-sm font-semibold">Quote of the Year 🚀</h2>
    </div>
    <p className="italic ">{`Your future is created by what you do today, not tomorrow.`}</p>
    <p className="text-right text-xs font-medium">- Jeff Bezoz</p>
  </div>
  )
}
