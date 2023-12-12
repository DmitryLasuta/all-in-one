'use client'

import { CartItem, CartItemsSkeletonGroup } from '@/components/cards'

import { IoSadOutline } from 'react-icons/io5'
import { Modal } from '@/components/common'
import { useCart } from '@/lib/services/hooks'

export default function CartPage() {
  const { total, isLoading, products, items } = useCart()

  return (
    <>
      {total.amount === 0 && products?.length === 0 && (
        <p className="flex items-center gap-2">
          <IoSadOutline />
          Your cart is empty
          <IoSadOutline />
        </p>
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
