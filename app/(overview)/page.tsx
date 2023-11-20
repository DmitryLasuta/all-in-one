import { StoreAccessAPI } from '@/lib/services/storeAccessAPI'
import { dockerOne } from '@/app/assets/fonts'
import { CategoryCard, CategoryCardListSkeleton } from '@/components'
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
]

const allInOneStoreApi = new StoreAccessAPI()

const CategoriesWrapper = async () => {
  const categories = await allInOneStoreApi.getAllCategories()
  // await new Promise(resolve => setTimeout(resolve, 5000))
  return (
    <ul className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {categories.map((category, index) => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  )
}

export default async function HomePage() {
  return (
    <>
      {/* Banner section */}
      <div className="container py-16 text-center lg:text-right w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
        <picture>
          <source
            media="(min-width: 768px)"
            width={900}
            height={700}
            srcSet="/banner.jpg"
          />
          <Image src="/banner-mobile.jpeg" width={500} height={600} priority alt="" />
        </picture>
        <div className="">
          <h1 className={`${dockerOne.className} text-3xl capitalize mb-4 font-bold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-lg max-w-lg inline-block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias saepe itaque
            ipsam corrupti excepturi nihil similique blanditiis modi placeat inventore?
          </p>
          I
        </div>
      </div>

      {/* Our brands section */}
      <div className="bg-accent py-8 xl:bg-fluid bg-no-repeat bg-fixed">
        <section className="container">
          <h2
            className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-4`}
          >
            Our brans
          </h2>
          <ul
            className={`grid grid-cols-3 md:grid-cols-6 justify-items-center items-center gap-4 md:gap-8 xl:gap-12`}
          >
            {ourBrandsList.map(({ title, image }) => (
              <li className="w-fit" key={title}>
                <Image src={image} alt={title} width={200} height={200} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Categories list section */}
      <section className="py-8 relative overflow-hidden">
        <div className="container">
          <h2
            className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-6`}
          >
            Categories
          </h2>
          <Suspense fallback={<CategoryCardListSkeleton />}>
            <CategoriesWrapper />
          </Suspense>
        </div>
      </section>
    </>
  )
}
