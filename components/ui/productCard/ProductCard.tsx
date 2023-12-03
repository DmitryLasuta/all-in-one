'use client'

import { Button } from '@/components/ui/common'
import Image from 'next/image'
import type { Product } from '@/lib/types'
import { dockerOne } from '@/app/assets/fonts/index'

interface ProductCardProps {
  product: Product
  variant?: 'vertical' | 'horizontal'
}

export const ProductCard = ({ product, variant = 'horizontal' }: ProductCardProps) => {
  const { image, price, rating, title } = product
  return (
    <figure
      className={`break-inside-avoid flex flex-col ${
        variant === 'horizontal' ? 'lg:flex-row' : ''
      } gap-4 lg:gap-8 items-center ${variant === 'horizontal' ? 'lg:items-start' : ''}  bg-primary p-4 rounded ${
        variant === 'vertical' ? 'text-center' : ''
      } w-full h-full mb-4 border-2 bg-[white]`}
    >
      <Image className="mb-4 object-contain bg-[#c7c7c7] rounded" src={image} alt={title} width={250} height={300} />
      <figcaption>
        <div className="flex items-center gap-4 justify-between mb-4">
          <span className='before:content-["$"] before:pr-1 text-xl text-right bg-accent px-2 rounded w-fit'>
            {price}
          </span>
          <span className="text-sm">(Rate: {rating.rate})</span>
          <Button style={{ fontWeight: 'bold' }}>Add to cart</Button>
        </div>
        <h4 className={`text-xl ${dockerOne.className} mb-4`}>{title}</h4>
      </figcaption>
    </figure>
  )
}
