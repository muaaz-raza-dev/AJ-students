import useFetchStudentInfo from '@/hooks/profile/acedmic/useFetchStudentInfo'
import { Button } from '@/shadcn/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FaClock, FaIdBadge, FaRegIdCard } from 'react-icons/fa'
import { LuSchool } from 'react-icons/lu'

const AcedmicInfoHeader = () => {
  const {data} = useFetchStudentInfo()
  const q = data?.payload
  return (
    <section className="flex flex-col gap-1">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
    <Image
      src={q?.photo||"/sample.png"}
      alt="photo"
      className=" rounded-md"
      width={80}
      height={80}
      />
    <h1 className="font-bold hFont text-3xl">{q?.FirstName} {q?.LastName}</h1>
      </div>
    <Button variant={"default"} className='text-3xl hFont font-bold h-full'>
    {q?.GRNO}
    </Button>
      </div>
    <div className="w-full mt-2 flex gap-1 justify-between">

    <section className="flex  py-5 w-[48%] flex-col px-4 bg-secondary  rounded-xl  text-black dark:text-white">
      <LuSchool  size={28} />
    <h1 className="font-bold hFont pt-2 ">Class Details</h1>
    <div className="flex gap-2">
        <h3 className="hFont text-[0.81rem]  ">Class : {q?.CurrentClass.name}</h3>
    </div>
    <div className="flex gap-2">
        <h3 className="hFont text-[0.81rem]  ">Section : {q?.CurrentSection.name}</h3>
        </div>
        <div className="flex gap-2">
        <h3 className="hFont text-[0.81rem]  ">Roll no: {q?.RollNo}</h3>
        </div>
    </section>

    <section className="flex  py-5 w-[48%] flex-col px-4 bg-secondary  rounded-xl  text-black dark:text-white">
    <FaRegIdCard  size={28} />
    <h1 className="font-bold hFont pt-2 ">Admission Details</h1>
    <div className="flex gap-2">
        <h3 className="hFont text-[0.81rem]  ">DOA: {q?.DOA}</h3>
    </div>
      <div className="flex gap-2">
        <h3 className="hFont text-[0.81rem]  ">GRNO: {q?.GRNO}</h3>
        </div>
    <div className="flex gap-2">
        <h3 className="hFont text-[0.81rem]  ">First Class : {q?.firstAdmittedClass || q?.firstClass?.name }</h3>
        </div>
    </section>

    <section className='flex gap-2'>
      <div className="px-3 py-1 rounded-md"></div>
      <div className="px-3 py-1 rounded-md"></div>
    </section>
    </div>
  </section>
  )
}

export default AcedmicInfoHeader