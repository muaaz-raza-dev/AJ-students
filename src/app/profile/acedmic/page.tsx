"use client";
import AcedmicInfo from "@/components/profile/Acedmic/acedmic-info";
import useFetchStudentInfo from "@/hooks/profile/acedmic/useFetchStudentInfo";
import React from "react";

const StudentAcedmicProfilePage = () => {
  const {isLoading} = useFetchStudentInfo()
  if (isLoading) return <> loading ...</>;
  return <AcedmicInfo/>;
};

export default StudentAcedmicProfilePage;
