import { dockerOne } from '@/app/assets/fonts'
import {
  CategoryCard,
  CategoryCardListSkeleton,
  ProductCard,
  ProductCartSkeletonGroup,
} from '@/components'
import Image from 'next/image'
import { Suspense } from 'react'
import DatabaseService from '@/lib/services/databaseService'
import { Section, SpotlightSection } from '@/components/ui'
import { MdHighQuality } from 'react-icons/md'
import { FaFlagCheckered } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import dynamic from 'next/dynamic'

const ourBrandsList = [
  { title: 'Converse', image: '/brandsLogo/converse.svg' },
  { title: 'Esprit', image: '/brandsLogo/esprit.svg' },
  { title: 'H&M', image: '/brandsLogo/hm.svg' },
  { title: 'Hugo Boss', image: '/brandsLogo/hugo-boss.svg' },
  { title: 'Lacoste', image: '/brandsLogo/lacoste.svg' },
  { title: 'The North Face ', image: '/brandsLogo/TNF.svg' },
]

const storeDB = new DatabaseService()

const CategoriesWrapper = async () => {
  const categories = await storeDB.getAllCategories()
  // await new Promise(resolve => setTimeout(resolve, 5000))
  return (
    <ul className="grid grid-flow-dense grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {categories.map(category => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  )
}

const ProductsWrapper = async () => {
  const topRatedProducts = await storeDB.getTopRatedProducts(12)
  // await new Promise(resolve => setTimeout(resolve, 50000))
  return (
    <ul className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {topRatedProducts.map(product => (
        <li className="mb-4" key={product.id}>
          <ProductCard variant="vertical" product={product} />
        </li>
      ))}
    </ul>
  )
}

const ourAdvantagesList = [
  {
    title: 'High-Quality Products',
    description:
      'We guarantee the high quality of every product in our range. Only trusted brands and reliable suppliers.',
    icon: <MdHighQuality />,
  },
  {
    title: 'Fast Shipping',
    description:
      'We value your time, so we offer fast and reliable delivery. Your purchases will be in your hands in the shortest possible time.',
    icon: <FaFlagCheckered />,
  },
  {
    title: 'Secure Payments',
    description:
      'Your data is secure. We use modern technologies to ensure the security of your payments and personal information.',
    icon: <RiSecurePaymentFill />,
  },
]

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
          <Image
            className="bg-secondary"
            src="/banner-mobile.jpeg"
            width={500}
            height={600}
            priority
            alt=""
          />
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
      <SpotlightSection title="Our brands">
        <ul
          className={`grid grid-cols-3 md:grid-cols-6 justify-items-center items-center gap-4 md:gap-8 xl:gap-12`}
        >
          {ourBrandsList.map(({ title, image }) => (
            <li className="w-fit" key={title}>
              <Image src={image} alt={title} width={200} height={200} />
            </li>
          ))}
        </ul>
      </SpotlightSection>

      {/* Categories list section */}
      <Section title="Categories">
        <Suspense fallback={<CategoryCardListSkeleton />}>
          <CategoriesWrapper />
        </Suspense>
      </Section>

      {/* Top rated products */}
      <SpotlightSection title="Top rated products">
        <Suspense
          fallback={<ProductCartSkeletonGroup count={12} skeletonsVariant="vertical" />}
        >
          <ProductsWrapper />
        </Suspense>
      </SpotlightSection>

      {/* Our advantages */}
      <Section title="Why Choose Our Store?">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {ourAdvantagesList.map(({ title, description, icon }) => (
            <li className="text-center border-2 rounded p-4" key={title}>
              <article>
                <h4 className={`text-3xl font-bold`}>{title}</h4>
                <div className="text-[7rem] text-secondary max-w-[7rem] mx-auto my-8">
                  {icon}
                </div>
                <p className="text-justify">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
