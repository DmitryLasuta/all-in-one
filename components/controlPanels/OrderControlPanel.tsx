'use client'

import { Button } from '@/components/common'
import { checkout } from '@/lib/services/actions'
import { useCart } from '@/lib/services/hooks'

export const OrderControlPanel = () => {
  const { total, handleClearCart } = useCart()

  return (
    <div className="lg:sticky lg:top-[100px] lg:px-4">
      <h4 className="text-lg font-bold mb-4">Order information</h4>
      <p className="mb-2 text-base">Items in cart: {total.amount}</p>
      <p className="mb-2 text-base">
        Total price:
        <span className="ml-2 font-bold">
          {total.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </span>
      </p>
      <form className="flex flex-col gap-2" action={checkout}>
        <Button disabled={total.amount === 0} type="submit">
          Checkout
        </Button>
        <Button onClick={handleClearCart} type="button">
          Clear Cart
        </Button>
      </form>
    </div>
  )
}
