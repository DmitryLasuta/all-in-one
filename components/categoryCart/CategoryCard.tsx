import type { Category } from '@/app/api/products/categories/route'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface CategoryCardProps extends HTMLAttributes<HTMLElement> {
  category: Category
  imagePriority?: boolean
}

export const CategoryCard = ({
  category: { image, name },
  imagePriority = false,
  ...attrs
}: CategoryCardProps) => {
  return (
    <div {...attrs}>
      <figure className="relative w-full h-full overflow-hidden hover:scale-105 transition-transform">
        <Image
          className="rounded"
          src={image}
          alt={name}
          width={650}
          height={650}
          priority={imagePriority}
        />
        <figcaption className="absolute z-10 top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-accent px-1 py-2 rounded text-typography text-base font-bold">
            {name}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
