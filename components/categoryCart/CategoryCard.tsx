import type { Category } from '@/lib/services/api/fakeStore'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface CategoryCardProps extends HTMLAttributes<HTMLElement> {
  category: Category
}

export const CategoryCard = ({
  category: { image, name },
  ...attrs
}: CategoryCardProps) => {
  return (
    <div {...attrs}>
      <figure className="w-full h-full relative overflow-hidden hover:scale-105 transition-transform">
        <Image className="rounded" src={image} alt={name} width={650} height={650} />
        <figcaption className="absolute z-10 top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-accent px-1 py-2 rounded text-typography text-base font-bold">
            {name}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
