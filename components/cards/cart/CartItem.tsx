'use client'

import { FaMinus, FaPlus } from 'react-icons/fa6'

import { Button } from '@/components/common'
import Image from 'next/image'
import type { Product } from '@/lib/types'
import { useCart } from '@/lib/services'

export function CartItem({ product }: { product: Product }) {
  const { id, category, image, title, price } = product

  const { handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart, items } = useCart()

  return (
    <figure className="flex flex-col md:flex-row gap-4 border-2 rounded max-w-[350px] w-full md:max-w-full p-2 lg:p-4">
      <Image
        className="md:w-2/5 md:h-auto h-[250px] w-full object-contain bg-[white] rounded p-4"
        src={image}
        alt={title}
        width={250}
        height={250}
      />
      <div className="grid grid-rows-[2fr_auto] flex-1">
        <figcaption className="px-4 py-4 md:px-2 w-full">
          <h5 className="text-lg font-bold mb-4">{title}</h5>
          <p className="text-sm capitalize mb-2">Category: {category}</p>
          <p className="text-sm flex items-center gap-2">
            Price:
            <span className="font-bold before:content-['$'] before:pr-1">
              {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </span>
          </p>
        </figcaption>
        <fieldset className="rounded border-2 p-2">
          <legend className="sr-only">Quantity</legend>
          <div className="flex flex-col items-center gap-2 mb-4 lg:flex-row xl:flex-col 2xl:flex-row">
            <label className="" htmlFor={id.toString()}>
              In cart:
            </label>
            <div className="flex items-center gap-2">
              <Button onClick={() => handleDecreaseQuantity(product)} aria-label="decrease quantity of item">
                <FaMinus />
              </Button>
              <input
                className="rounded text-base text-center w-[100px]"
                id={id.toString()}
                type="number"
                value={items[id] || 0}
                min={0}
                readOnly={true}
              />
              <Button onClick={() => handleIncreaseQuantity(product)} aria-label="increase quantity of item">
                <FaPlus />
              </Button>
            </div>
          </div>
          <Button onClick={() => handleRemoveFromCart(product)}>Delete</Button>
        </fieldset>
      </div>
    </figure>
  )
}
