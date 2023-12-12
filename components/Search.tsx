'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { FaSearch } from 'react-icons/fa'
import { PRODUCTS_SEARCH_PARAMS } from '@/lib/utils'
import { TextInput } from '@/components/common'
import { useDebouncedCallback } from 'use-debounce'
import { useEffect } from 'react'

export const Search = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(PRODUCTS_SEARCH_PARAMS.page, '1')

    if (term) params.set(PRODUCTS_SEARCH_PARAMS.query, term)
    else params.delete(PRODUCTS_SEARCH_PARAMS.query)

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <fieldset className="flex-1">
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <TextInput
        role="search"
        id="search"
        placeholder={`Search for products...`}
        icon={<FaSearch />}
        onChange={({ target }) => handleSearch(target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </fieldset>
  )
}
