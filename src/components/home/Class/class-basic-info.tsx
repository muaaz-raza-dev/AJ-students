"use client";
import useFetchShallowClassDetails from '@/hooks/home/useFetchShallowClassDetails'
import moment from 'moment';
import React from 'react'
import { FaClock,  FaSchool, FaUsers } from 'react-icons/fa'
import ClassBasicSkeleton from './class-basic-skeleton';
import { AiFillIdcard,  AiOutlineNumber } from "react-icons/ai";
export default function ClassBasicInfo() {
  const {isLoading,data} = useFetchShallowClassDetails();
  const q =data?.payload;

  if(isLoading) return <ClassBasicSkeleton/>;
  return (
    <div className="w-full mx-auto   rounded-md overflow-hidden transform bg-secondary">
    <div className="flex items-center bg-primary text-white p-4">
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Class {q?.class_name}</h2>
        <div className="flex gap-2">Section :
          <b>
            {q?.section_name}
            </b> 
            </div>
      </div>
      <div className="flex-shrink-0 ml-4 bg-primary-foreground p-2 rounded-full relative">
        <FaSchool className="text-primary text-lg" />
      </div>
    </div>
    <div className="p-4 flex flex-wrap gap-2 gap-y-4 items-center">
    <div className="flex items-center  w-[48%]">
        <AiOutlineNumber  className="text-muted-foreground mr-2"  size={20}/>
        <span className="font-semibold">GRNO : {q?.GRNO}</span>
      </div>

    <div className="flex items-center  w-[48%]">
        <AiFillIdcard className="text-muted-foreground mr-2"  size={20}/>
        <span className="font-semibold">Roll no : {q?.RollNo}</span>
      </div>
      <div className="flex items-center  w-[48%]">
        <FaUsers className="text-muted-foreground mr-2"  size={20}/>
        <span className="font-semibold">{q?.Students} students</span>
      </div>
      <div className="flex items-center  w-[48%]">
        <FaClock className="text-muted-foreground mr-2"  size={20}/>
        <span className="font-semibold">{moment(q?.start_date).format("DD MMMM YYYY")} </span>
      </div>
    </div>
  </div>
  )
}
