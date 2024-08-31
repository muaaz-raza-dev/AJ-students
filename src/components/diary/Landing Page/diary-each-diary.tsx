import { IshortDiary } from '@/types/IdiaryLanding'
import moment from 'moment'
import React from 'react'

export default function DiaryEachDiary({data}:{data:IshortDiary}) {
  return (
    <div className="flex justify-between items-center relative">
        {/* unseeen PopUp */}
        <div className="w-4 h-4 absolute top-0 right-0 bg-primary rounded-full"></div>
        
 <div className="bg-secondary rounded-md p-3 py-4">
   <h1 className="text-lg hFont font-bold leading-tight">{data.title}</h1>
   <div className="flex justify-between items-end pt-3">
   <div className="flex  gap-2">
    {data.tags.map(e=><div className="p-1 px-2 rounded-md bg-secondary-foreground font-medium  text-xs text-primary" key={e}>{e}</div>)}
   </div>

    <p className="text-xs">{moment(data.date).format("dddd, DD-MMMM-YYYYY")}</p>
   </div>
 </div>

    </div>


  )
}
