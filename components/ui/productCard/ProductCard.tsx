'use client'

import { Button } from '@/components/ui/common'
import Image from 'next/image'
import type { Product } from '@/lib/types'
import { dockerOne } from '@/app/assets/fonts/index'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { image, price, rating, title } = product
  return (
    <figure className="bg-primary p-4 rounded w-full h-full border-2 flex flex-col gap-4">
      <Image
        className="object-scale-down bg-[white] rounded h-[250px] w-auto p-4"
        src={image}
        alt={title}
        width={250}
        height={250}
      />
      <Button isFontBold={true}>Add to cart</Button>
      <figcaption className="flex-1 flex flex-col justify-between gap-4">
        <h4 className={`text-base ${dockerOne.className}`}>{title}</h4>
        <div className="flex justify-between items-center">
          <p className='before:content-["$"] before:pr-1 text-xl text-right bg-accent px-2 rounded w-fit'>{price}</p>
          <p className="text-sm">Rate: {rating.rate}</p>
        </div>
      </figcaption>
    </figure>
  )
}
