'use client'

import { Button, TextInput } from './common'

import type { CheckoutActionState } from '@/lib/services/actions'
import { checkout } from '@/lib/services/actions'
import { useCart } from '@/lib/services/hooks'
import { useFormState } from 'react-dom'

export const CheckoutForm = () => {
  const initialState: CheckoutActionState = { message: null, errors: {} }
  const [formState, dispatchCheckoutAction] = useFormState(checkout, initialState)
  const { total } = useCart()

  return (
    <div className="max-w-[400px] mx-auto">
      <form className="rounded p-4 border-2" action={dispatchCheckoutAction}>
        <div className="mb-4">
          <TextInput
            type="text"
            name="lastName"
            placeholder="Jones"
            label="Last name"
            required
            aria-describedby="last-name-error"
          />
          <p className="text-[#ff0000] text-sm py-1 px-2" id="last-name-error">
            {formState?.errors?.lastName?.join('. ')}
          </p>
          <TextInput type="text" name="firstName" placeholder="John" label="first name" />
          <TextInput
            type="email"
            name="email"
            placeholder="p7kI7@example.com"
            label="Email address"
            aria-describedby="email-error"
            required
          />
          <p className="text-[#ff0000] text-sm py-1 px-2" id="email-error">
            {formState?.errors?.email?.join('. ')}
          </p>
          <TextInput
            type="tel"
            name="phone"
            placeholder="123456789"
            label="Mobile phone number"
            aria-describedby="phone-error"
            required
          />
          <p className="text-[#ff0000] text-sm py-1 px-2" id="phone-error">
            {formState?.errors?.phone?.join('. ')}
          </p>
        </div>
        <div className="mb-4 border-y-2 p-2">
          <p className="text-sm md:text-xl">Total amount of product: {total.amount}</p>
          <p className="text-sm md:text-xl">
            Total price: {total.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <Button type="submit">Confirm</Button>
      </form>
    </div>
  )
}
