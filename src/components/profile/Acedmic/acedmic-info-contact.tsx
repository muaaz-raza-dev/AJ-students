import KeyValuePairContainer from '@/components/common/key-value-pair-container';
import useFetchStudentInfo from '@/hooks/profile/acedmic/useFetchStudentInfo'
import React from 'react'

export default function AcedmicInfoContact() {
  const {data} = useFetchStudentInfo()
  const q  = data?.payload;
  const Contact= {
    "email": q?.email,
    "phone 1": q?.contact[0],
    "phone 2": q?.contact?.[1],
    "WhatsApp Number": q?.WA
  }
  return (
   
    <section className="">
    <header className="pb-2">
      <h1 className="hFont font-semibold text-xl ">
        Contact Information
      </h1>
    </header>
    <main className="flex flex-wrap gap-2">
    {
        Object.entries(Contact).map(e=><KeyValuePairContainer label={e[0]} value={e[1]} key={e[0]}/>)
      }      
    </main>
  </section>
  )
}
