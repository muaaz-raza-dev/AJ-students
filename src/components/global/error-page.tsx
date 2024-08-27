import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
  return (
    <main className="flex flex-col h-screen justify-center items-center ">
    <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
        <Link href="/"
            className="px-4 py-2 font-medium text-white bg-primary rounded-md hover:bg-secondary-foreground transition-all duration-200 ease-in-out">
            Go Home
        </Link>
    </div>
</main>
  )
}
