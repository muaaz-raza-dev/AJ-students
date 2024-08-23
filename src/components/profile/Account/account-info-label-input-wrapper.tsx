import React, { ReactNode } from 'react'

export default function AccountInfoLabelInputWrapper({description,label,children,className,pClassName}:{description?:string,label:string , children?:ReactNode,className?:string;pClassName?:string}) {
  return (
<div className={`flex items-center border-b border-gray-200 py-4  gap-1  w-full ${pClassName}`}>
    <div className={`w-[50%] flex flex-col ${className} gap-1`}>
    <h1 className="font-semibold dark:text-white leading-tight">{label}</h1>
    {description&&
    <p className="text-gray-500 text-sm max-md:text-xs leading-tight">{description}</p>
    }
    </div>
    {children || null}
    </div>
  )
}
