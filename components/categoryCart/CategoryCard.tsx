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
      <figure className="relative">
        <Image className="rounded" src={image} alt={name} width={650} height={650} />
        <figcaption className="absolute z-10 top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base md:text-xl text-primary">
          {name}
        </figcaption>
      </figure>
    </div>
  )
}
