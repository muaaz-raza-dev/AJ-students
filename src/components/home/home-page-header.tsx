import Link from 'next/link';
import React from 'react'

export default function HomePageHeader({ title, link  }:{title:string;link?:string}) {
  return (
    <div className="flex items-center justify-between pb-4">
    <h2 className="text-lg font-bold ">{title}</h2>
    {link && (
      <Link href={link} className="text-sm text-muted-foreground hover:underline">
        See all
      </Link>
    )}
  </div>
  )
}
