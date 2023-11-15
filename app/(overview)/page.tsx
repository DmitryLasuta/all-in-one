import { FakeStore } from '@/lib/services/api/fakeStore'
import { dockerOne } from '@/app/assets/fonts'
import { CategoryCard, CategoryCardSkeleton } from '@/components'
import Image from 'next/image'
import { josefinSans } from '@/app/assets/fonts'
import { HTMLAttributes, Suspense } from 'react'

const ourBrandsList = [
  { title: 'Converse', image: '/brandsLogo/converse.svg' },
  { title: 'Esprit', image: '/brandsLogo/esprit.svg' },
  { title: 'H&M', image: '/brandsLogo/hm.svg' },
  { title: 'Hugo Boss', image: '/brandsLogo/hugo-boss.svg' },
  { title: 'Lacoste', image: '/brandsLogo/lacoste.svg' },
  { title: 'The North Face ', image: '/brandsLogo/TNF.svg' },
  { title: 'Zara', image: '/brandsLogo/zara.svg' },
]

const TheFirstBrand = async ({ ...attrs }: HTMLAttributes<HTMLDivElement>) => {
  const category = await new FakeStore().getCategoryById(1)
  await new Promise(resolve => setTimeout(resolve, 5000))
  return <CategoryCard {...attrs} category={category} />
}

export default async function HomePage() {
  const categories = await new FakeStore().getCategories()

  return (
    <>
      <div className="container py-12 text-center lg:text-right w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
        <Suspense fallback={<CategoryCardSkeleton className="w-2/3 lg:w-1/2" />}>
          <TheFirstBrand className="w-2/3 lg:w-1/2" />
        </Suspense>
        <div className="">
          <h1 className={`${dockerOne.className} text-3xl capitalize mb-4 font-bold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-lg max-w-lg inline-block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias saepe itaque
            ipsam corrupti excepturi nihil similique blanditiis modi placeat inventore?
          </p>
        </div>
      </div>

      <div className="bg-accent py-8">
        <section className="container">
          <h2
            className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-4`}
          >
            Our brans
          </h2>
          <ul
            className={`grid grid-cols-3 md:grid-cols-7 justify-items-center items-center gap-4 md:gap-8 xl:gap-12`}
          >
            {ourBrandsList.map(({ title, image }) => (
              <li className="w-fit" key={title}>
                <Image src={image} alt={title} width={200} height={200} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
