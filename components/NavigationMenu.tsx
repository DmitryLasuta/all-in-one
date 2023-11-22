'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import type { NavigationLinks } from '@/lib/types'

export const NavigationMenu = ({ links }: { links: NavigationLinks[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative">
      <button
        className="text-[23px] rounded block p-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'close menu' : 'open menu'}
        type="button"
      >
        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
      <nav
        className={`absolute lg:static transition-transform top-[calc(100%+1rem)] lg:top-0 ${
          isOpen ? '-translate-x-4' : 'translate-x-[calc(-100%-1rem)]'
        } z-[100] w-screen lg:w-auto h-screen lg:h-auto bg-secondary text-primary lg:-translate-x-0 lg:bg-[transparent] lg:text-secondary`}
      >
        <ul className="uppercase font-bold flex flex-col lg:flex-row lg:text-base gap-4 px-6 py-3 lg:p-0">
          {links.map(({ href, title }) => (
            <li key={title}>
              <Link
                className={`hover:text-primary transition-colors ${
                  pathname === href ? 'text-primary' : ''
                }`}
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
