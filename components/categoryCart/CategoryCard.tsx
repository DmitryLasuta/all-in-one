import type { Category } from '@/lib/services/databaseService'
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
    <div {...attrs} className="w-fit">
      <figure className="relative h-full overflow-hidden hover:scale-105 transition-transform">
        <Image
          className="rounded bg-[#c7c7c7]"
          src={image}
          alt={name}
          width={350}
          height={500}
          priority={imagePriority}
        />
        <figcaption className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2">
          <span className="bg-accent px-1 py-2 rounded text-typography text-base font-bold">
            {name}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
