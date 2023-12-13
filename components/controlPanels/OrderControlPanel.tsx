'use client'

import { Button } from '@/components/common'
import { CheckoutForm } from '@/components'
import dynamic from 'next/dynamic'
import { useCart } from '@/lib/services/hooks'
import { useState } from 'react'

const ConfirmModalWindow = dynamic(() => import('@/components/common/Modal').then(({ Modal }) => Modal), {
  ssr: false,
})

const CheckoutModalWindow = dynamic(() => import('@/components/common/Modal').then(({ Modal }) => Modal), {
  ssr: false,
})

export const OrderControlPanel = () => {
  const { total, handleClearCart } = useCart()
  const [modalIsOpen, setModalIsOpen] = useState({
    confirm: false,
    checkout: false,
  })

  const closeConfirmModal = () => {
    setModalIsOpen({
      ...modalIsOpen,
      confirm: false,
    })
  }

  const closeCheckoutModal = () => {
    setModalIsOpen({
      ...modalIsOpen,
      checkout: false,
    })
  }

  const handleClearCartButtonClick = () => {
    handleClearCart()
    closeConfirmModal()
  }

  return (
    <div className="lg:sticky lg:top-[100px] lg:px-4">
      {/* Order information */}
      <h4 className="text-lg font-bold mb-4">Order information</h4>
      <p className="mb-2 text-base">Items in cart: {total.amount}</p>
      <p className="mb-2 text-base">
        Total price:
        <span className="ml-2 font-bold">
          {total.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </span>
      </p>

      {/* Control panel */}
      <fieldset className="flex flex-col gap-2">
        <legend className="sr-only">Order control panel</legend>
        <CheckoutModalWindow isOpen={modalIsOpen.checkout} onClose={closeCheckoutModal}>
          <div className="mb-4 p-2">
            <h3 className="text-base md:text-3xl text-center font-bold">Please confirm your order</h3>
            <p className="text-center text-sm">Thank you for your order! Your order will be processed shortly.</p>
          </div>
          <CheckoutForm />
        </CheckoutModalWindow>
        <Button
          disabled={total.amount === 0}
          onClick={() => setModalIsOpen({ ...modalIsOpen, checkout: true })}
          type="button"
        >
          Checkout
        </Button>
        <Button
          onClick={() => setModalIsOpen({ ...modalIsOpen, confirm: true })}
          disabled={total.amount === 0}
          type="button"
        >
          Clear Cart
        </Button>

        <ConfirmModalWindow isOpen={modalIsOpen.confirm} onClose={closeConfirmModal}>
          <h4 className="text-2xl text-center mb-4">Are you sure you want to clear the cart?!</h4>
          <div className="flex justify-center gap-4 items-center">
            <Button onClick={closeConfirmModal}>Cancel</Button>
            <Button onClick={handleClearCartButtonClick}>Clear</Button>
          </div>
        </ConfirmModalWindow>
      </fieldset>
    </div>
  )
}
