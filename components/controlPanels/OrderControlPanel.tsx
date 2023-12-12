'use client'

import { Button } from '@/components/common'
import { checkout } from '@/lib/services/actions'
import dynamic from 'next/dynamic'
import { useCart } from '@/lib/services/hooks'
import { useState } from 'react'

const ConfirmModal = dynamic(() => import('@/components/common/Modal').then(({ Modal }) => Modal), {
  ssr: false,
})

export const OrderControlPanel = () => {
  const { total, handleClearCart } = useCart()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleClearButtonClick = () => {
    handleClearCart()
    setModalIsOpen(false)
  }

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
        <Button onClick={() => setModalIsOpen(true)} disabled={total.amount === 0} type="button">
          Clear Cart
        </Button>
        <ConfirmModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <h4 className="text-2xl text-center mb-4">Are you sure you want to clear the cart?!</h4>
          <div className="flex justify-center gap-4 items-center">
            <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
            <Button onClick={handleClearButtonClick}>Clear</Button>
          </div>
        </ConfirmModal>
      </form>
    </div>
  )
}
