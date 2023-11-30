'use client'

import Link from 'next/link'
import { NavigationLinks } from '@/lib/types'
import { useSearchParams } from 'next/navigation'

export const ParametersList = ({ links, caption }: { links: NavigationLinks[]; caption?: string }) => {
  const searchParams = useSearchParams()
  return (
    <>
      {caption && <p className="my-4 text-lg">{caption}</p>}
      <ul className="pl-4 capitalize">
        {links.map(({ href, title }) => (
          <li
            className={`hover:scale-105 hover:font-bold transition-transform ${
              searchParams.get('category') === title.toLocaleLowerCase() ? 'font-bold scale-105' : ''
            } mb-1`}
            key={title}
          >
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
