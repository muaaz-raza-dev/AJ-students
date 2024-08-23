"use client";
import useFetchShallowClassDetails from '@/hooks/home/useFetchShallowClassDetails'
import moment from 'moment';
import React from 'react'
import { FaChalkboardTeacher,  FaClock,  FaSchool, FaUsers } from 'react-icons/fa'

export default function ClassBasicInfo() {
  const {isLoading,data} = useFetchShallowClassDetails()

  const q =data?.payload
  if(isLoading) return <h1>loading ...</h1>
  return (
    <div className="w-full mx-auto   rounded-xl overflow-hidden transform bg-secondary">
    <div className="flex items-center bg-primary text-white p-4">
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Class {q?.class_name}</h2>
        <p className="">Section 
          <b>
            {q?.section_name}
            </b> 
            </p>
      </div>
      <div className="flex-shrink-0 ml-4 bg-primary-foreground p-2 rounded-full">
        <FaSchool className="text-primary text-lg" />
      </div>
    </div>
    <div className="p-4 flex flex-wrap gap-2 gap-y-4 items-center">
      <div className="flex items-center  w-[48%]">
        <FaUsers className="text-muted-foreground mr-2"  size={20}/>
        <span className="font-semibold">{q?.Students} students</span>
      </div>
      <div className="flex items-center  w-[48%]">
        <FaClock className="text-muted-foreground mr-2"  size={20}/>
        <span className="font-semibold">{moment(q?.start_date).format("DD MMMM YYYY")} </span>
      </div>
      <div className="flex items-center w-[48%]">
        <FaChalkboardTeacher className="text-muted-foreground mr-2" size={20} />
        <span className="font-semibold">Tooba aslam</span>
      </div>
    </div>
  </div>
  )
}
