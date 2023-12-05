import { CategoryCardSkeletonGroup, ProductCardSkeletonGroup } from '@/components/ui'
import { RegularSection, SpotlightSection } from '@/components/ui/sections'

import { FaFlagCheckered } from 'react-icons/fa'
import Image from 'next/image'
import { MdHighQuality } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { dockerOne } from '@/app/assets/fonts'
import dynamic from 'next/dynamic'

const ourBrandsList = [
  { title: 'Converse', image: '/brandsLogo/converse.svg' },
  { title: 'Esprit', image: '/brandsLogo/esprit.svg' },
  { title: 'H&M', image: '/brandsLogo/hm.svg' },
  { title: 'Hugo Boss', image: '/brandsLogo/hugo-boss.svg' },
  { title: 'Lacoste', image: '/brandsLogo/lacoste.svg' },
  { title: 'The North Face ', image: '/brandsLogo/TNF.svg' },
]

const Categories = dynamic(() => import('@/components/ui/CategoryList'), {
  loading: () => <CategoryCardSkeletonGroup count={4} />,
})

const topRatedProductsCount = 8
const TopRatedProducts = dynamic(() => import('@/components/ui/TopRatedProducts'), {
  loading: () => <ProductCardSkeletonGroup count={topRatedProductsCount} />,
})

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

export default function HomePage() {
  return (
    <main>
      {/* Banner section */}
      <section className="container py-16 text-center lg:text-right w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
        <picture>
          <source media="(min-width: 768px)" width={900} height={700} srcSet="/banner.jpg" />
          <Image className="bg-secondary" src="/banner-mobile.jpeg" width={500} height={600} priority alt="" />
        </picture>
        <div className="">
          <h1 className={`${dockerOne.className} text-3xl capitalize mb-4 font-bold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-lg max-w-lg inline-block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias saepe itaque ipsam corrupti excepturi nihil
            similique blanditiis modi placeat inventore?
          </p>
          I
        </div>
      </section>

      {/* Our partners brands section */}
      <SpotlightSection title="Our partners">
        <ul className={`grid grid-cols-3 md:grid-cols-6 justify-items-center items-center gap-4 md:gap-8 xl:gap-12`}>
          {ourBrandsList.map(({ title, image }) => (
            <li className="w-fit" key={title}>
              <Image src={image} alt={title} width={200} height={200} />
            </li>
          ))}
        </ul>
      </SpotlightSection>

      {/* Top rated products */}
      <RegularSection title={`Top ${topRatedProductsCount} Products`}>
        <TopRatedProducts count={topRatedProductsCount} />
      </RegularSection>

      {/* Categories list section */}
      <SpotlightSection title="Categories">
        <Categories />
      </SpotlightSection>

      {/* Our advantages */}
      <RegularSection title="Why Choose Our Store?">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {ourAdvantagesList.map(({ title, description, icon }) => (
            <li className="text-center border-2 rounded p-4" key={title}>
              <article>
                <h4 className={`text-3xl font-bold`}>{title}</h4>
                <div className="text-[7rem] text-secondary max-w-[7rem] mx-auto my-8">{icon}</div>
                <p className="text-justify">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </RegularSection>
    </main>
  )
}
