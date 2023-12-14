'use client'

import { CartItem, CartItemsSkeletonGroup } from '@/components/cards'

import { IoSadOutline } from 'react-icons/io5'
import Link from 'next/link'
import { routes } from '@/lib/utils'
import { useCart } from '@/lib/services/hooks'

export default function CartPage() {
  const { total, isLoading, products, items } = useCart()

  return (
    <>
      {total.amount === 0 && products?.length === 0 && (
        <div className="flex flex-col items-center gap-4 justify-center">
          <p className="text-3xl flex items-center gap-2">
            <IoSadOutline />
            Your cart is empty
            <IoSadOutline />
          </p>
          <Link className="hover:text-accent border-2 rounded px-4 py-2" href={routes.products.list}>
            Start shopping
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center">
        {isLoading ? (
          <CartItemsSkeletonGroup count={Object.keys(items).length} />
        ) : (
          products?.map(product => <CartItem key={product.id} product={product} />)
        )}
      </div>
    </>
  )
}
