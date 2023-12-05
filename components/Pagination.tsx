'use client'

import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { PRODUCTS_SEARCH_PARAMS, generatePagination } from '@/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'

import Link from 'next/link'

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set(PRODUCTS_SEARCH_PARAMS.page, pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <div className="inline-flex self-center">
      <PaginationArrow direction="left" href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1} />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined

          if (index === 0) position = 'first'
          if (index === allPages.length - 1) position = 'last'
          if (allPages.length === 1) position = 'single'
          if (page === '...') position = 'middle'

          return (
            <PaginationNumber
              key={index}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          )
        })}
      </div>

      <PaginationArrow direction="right" href={createPageURL(currentPage + 1)} isDisabled={currentPage >= totalPages} />
    </div>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string
  href: string
  position?: 'first' | 'last' | 'middle' | 'single'
  isActive: boolean
}) {
  const className = `flex h-8 w-8 md:h-10 md:w-10 items-center justify-center text-sm border-y-2 border transition-colors
    ${position === 'first' || position === 'single' ? 'rounded-l-md' : ''} 
    ${position === 'last' || position === 'single' ? 'rounded-r-md' : ''} 
    ${isActive ? 'z-10 bg-accent border-accent font-bold' : ''} 
    ${!isActive && position !== 'middle' ? 'hover:bg-accent' : ''} 
    ${position === 'middle' ? 'text-typography' : ''}`

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) {
  const className = `flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-md border-2 transition-colors
    ${isDisabled ? 'pointer-events-none' : 'bg-accent'}
    ${direction === 'left' ? 'mr-2 md:mr-4' : direction === 'right' ? 'ml-2 md:ml-4' : ''}`

  const icon = direction === 'left' ? <MdArrowBack className="w-4" /> : <MdArrowForward className="w-4" />

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  )
}
