'use client'

import { FaExclamationTriangle, FaHome } from 'react-icons/fa'

import Link from 'next/link'
import { routes } from '@/lib/utils'

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded border-2 text-center">
        <FaExclamationTriangle className="text-4xl mb-4 inline-block" />
        <h2 className="text-3xl font-bold mb-2">Ops... Something went wrong</h2>
        <p>We were unable to process your request. Please try again later.</p>
        <Link href={routes.home} className="text-blue-500 hover:underline mt-4 flex items-center justify-center">
          <FaHome className="mr-2" />
          Homepage
        </Link>
      </div>
    </div>
  )
}
