'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import Link from 'next/link'
import type { NavigationLinks } from '@/lib/types'

interface SidePanelProps {
  parameter: string
  links: NavigationLinks[]
  caption: string
}

export const ParametersList = ({ links, caption, parameter }: SidePanelProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const href = event.target.value
    replace(href)
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h4 className="my-4 text-lg">{caption}</h4>
        <select
          className="capitalize flex-1 p-2 rounded md:hidden"
          defaultValue={searchParams.get(parameter) ?? links[0].href}
          onChange={handleChange}
        >
          {links.map(({ href, title }) => (
            <option className="capitalize p-4" value={href} key={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <ul className="hidden capitalize md:block">
        {links.map(({ href, title }) => (
          <li
            className={`hover:scale-105 hover:font-bold transition-transform ${
              searchParams.get(parameter) === title.toLocaleLowerCase()
                ? `font-bold before:content-['>'] before:pr-2`
                : ''
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
