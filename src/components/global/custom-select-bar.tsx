import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shadcn/components/ui/select';
import React from 'react'
export default function CustomSelectBar({value,data,onChange,placeholder}:{value:string;placeholder:string,onChange:(val:string)=>void;data:string[]}) {
  return (
    <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
        {data.map(e=><SelectItem key={e} value={e}>{e}</SelectItem>)}
    </SelectContent>
  </Select>
  )
}
