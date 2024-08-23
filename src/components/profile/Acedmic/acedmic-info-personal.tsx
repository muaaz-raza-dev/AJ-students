import KeyValuePairContainer from '@/components/common/key-value-pair-container'
import useFetchStudentInfo from '@/hooks/profile/acedmic/useFetchStudentInfo'
import React from 'react'
import moment from "moment"
function calculateAge(birthDate:Date|string) {
  const now = moment();
  const birth = moment(birthDate);

  // Calculate the difference in years and months
  const years = now.diff(birth, 'years');
  birth.add(years, 'years');
  const months = now.diff(birth, 'months');

  return `${years} years , ${months} months`;
}
export default function AcedmicInfoPersonal() {
  const {data} = useFetchStudentInfo()
  const q = data?.payload
  let Info = {
    "First Name": q?.FirstName,
    "Last Name": q?.LastName,
    "Father Name": q?.fatherName,
    "Date of Birth": q?.DOB,
    "Gender": q?.Gender,
    "Student CNIC": q?.sCNIC,
    "Father CNIC": q?.fCNIC,
    "Mother CNIC": q?.mCNIC,
    "Date of Admission": q?.DOA,
    "Age": calculateAge(q?.DOB||""),
    "Address": q?.Address,
  };
  return (
    <section className="">
    <header className="pb-2">
      <h1 className="hFont font-semibold text-xl">
        Personal Information
      </h1>
    </header>
    <main className="flex flex-wrap gap-2">
      {
        Object.entries(Info).map(e=><KeyValuePairContainer label={e[0]} value={e[1]} key={e[0]}/>)
      }
    </main>
  </section>
  )
}
