import Link from 'next/link';
import React from 'react'

export default function HomePageHeader({ title, link , href  }:{title:string;link?:string;href?:string}) {
  return (
    <div className="flex items-center justify-between pb-2">
    <h2 className="text-lg font-bold ">{title}</h2>
    {href && (
      <Link href={href} className="text-sm text-muted-foreground hover:underline">
        {link}
      </Link>
    )}
  </div>
  )
}
