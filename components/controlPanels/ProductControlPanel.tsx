'use client'

import { Button } from '@/components/common'
import type { Product } from '@/lib/types'
import { useCart } from '@/lib/services/hooks'

interface ProductControlPanelProps {
  product: Product
}

export const ProductControlPanel = ({ product }: ProductControlPanelProps) => {
  const { handleAddToCart } = useCart()
  const { rating_count, rating_rate, price } = product

  return (
    <div className="text-left border-2 flex-1 w-full rounded h-fit px-2 py-4">
      <p className="mb-2">
        Rating: <span className="font-bold">{rating_rate}</span>
      </p>
      <p className="mb-2">Price: {price}$</p>
      <p className="mb-2">In stock: {rating_count}</p>
      <Button onClick={() => handleAddToCart(product)} font="bold">
        Add to cart
      </Button>
    </div>
  )
}
