'use client'

import Link from 'next/link'
import { PiShoppingCartBold } from 'react-icons/pi'
import { routes } from '@/lib/utils'
import { useCart } from '@/lib/services/hooks'

export const CartButton = () => {
  const {
    total: { amount },
  } = useCart()

  return (
    <button className={`block text-2xl p-2 lg:border-l-2 lg:pl-4 lg:text-3xl relative`} aria-label="Cart" type="button">
      {amount > 0 ? (
        <span
          className="animate-bounce  absolute text-[12px] -top-1 left-2/3 w-5 h-5 rounded-full bg-secondary text-primary inline-flex justify-center items-center"
          aria-label="Total items in cart"
        >
          {amount}
        </span>
      ) : null}
      <Link href={routes.cart} aria-label="Cart">
        <PiShoppingCartBold />
      </Link>
    </button>
  )
}
