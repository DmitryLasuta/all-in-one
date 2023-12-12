'use client'

import { checkout, useCart } from '@/lib/services'

import { Button } from '@/components/common'
import { CartItem } from '@/components/cards'
import { IoSadOutline } from 'react-icons/io5'

export default function CartPage() {
  const { total, isLoading, products, handleClearCart } = useCart()

  return (
    <div className="py-8 container">
      <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center lg:ml-[15%]">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[20%_auto] gap-2">
        {/* order info */}
        <section className="row-start-2 lg:row-start-auto border-y-2 lg:border-y-0 p-4 lg:p-0  lg:border-b-0 lg:border-r-2 pb-2 lg:min-h-screen">
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
        </section>
        {/* cards */}
        <div className="px-2 lg:px-4">
          {total.amount === 0 && products?.length === 0 && (
            <p className="flex items-center gap-2">
              <IoSadOutline />
              Your cart is empty
              <IoSadOutline />
            </p>
          )}
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center  ">
              {products?.map(product => {
                console.log(product.id)
                return <CartItem key={product.id} product={product} />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
