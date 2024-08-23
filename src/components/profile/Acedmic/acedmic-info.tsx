import React from 'react'
import AcedmicInfoHeader from './acedmic-info-header'
import AcedmicInfoPersonal from './acedmic-info-personal'
import AcedmicInfoContact from './acedmic-info-contact'

export default function AcedmicInfo() {
  return (
    <main className="w-full flex flex-col gap-5 ">
        <AcedmicInfoHeader/>
        <AcedmicInfoPersonal/>
        <AcedmicInfoContact/>
    </main>
  )
}
