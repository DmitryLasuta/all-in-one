import { Breadcrumbs } from '@/components'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ProductCardSkeletonGroup } from '@/components/cards'
import { ProductControlPanel } from '@/components/controlPanels'
import { Section } from '@/components/common'
import dynamic from 'next/dynamic'
import { getProductById } from '@/lib/services/dataBase'
import { notFound } from 'next/navigation'
import { routes } from '@/lib/utils'

const RelatedProducts = dynamic(() => import('@/components/ProductList'), {
  loading: () => <ProductCardSkeletonGroup count={8} />,
})

export const revalidate = 60

export const generateMetadata = async ({ params }: { params: { slug: string[] } }): Promise<Metadata> => {
  const [_, id] = params.slug
  const product = await getProductById(id)
  return {
    title: `${product?.title} | ${product?.category}`,
    description: product?.description,
    metadataBase: process.env.NEXT_PUBLIC_VERCEL_URL
      ? new URL(process.env.NEXT_PUBLIC_VERCEL_URL)
      : new URL('http://localhost:3000'),
    openGraph: {
      title: `${product?.title} | ${product?.category}`,
      description: product?.description,
      type: 'website',
      locale: 'en-US',
      images: product?.image,
      siteName: 'All in one',
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}${routes.products.details(id, product?.category || 'all')}`,
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string[] } }) {
  const [category, id] = params.slug

  const product = await getProductById(id)
  if (!product) return notFound()

  const { category: productCategory, description, image, price, rating, title } = product
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'All Products', href: routes.products.list },
          { label: productCategory, href: routes.products.withParams({ category }) },
          {
            label: `${[...product.title].splice(0, 30).join('')}${product.title.length >= 30 ? '...' : ''}`,
            href: routes.products.details(id, category),
            active: true,
          },
        ]}
      />

      <figure>
        <div className="mb-8 text-center flex flex-col items-center lg:flex-row md:items-start gap-4 xl:gap-8">
          <Image
            className="inline-block max-h-[450px] object-contain  bg-[white] rounded p-10 flex-1"
            src={image}
            alt={title}
            width={700}
            height={450}
          />
          <ProductControlPanel product={product} />
        </div>
        <figcaption className="border-y-2 py-8">
          <div className="lg:max-w-[90%] lg:mx-auto">
            <h1 className="text-3xl text-center font-bold mb-4">{title}</h1>
            <p className={`first-letter:uppercase text-center  lg:text-justify text-lg`}>{description}</p>
          </div>
        </figcaption>
      </figure>
      <section className="py-8 border-b-2">
        <h4 className="text-3xl text-center capitalize font-bold mb-4">good news</h4>
        <div className="mx-auto max-w-[90%] text-center lg:text-justify">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate molestiae! Laboriosam
            excepturi exercitationem ipsa illum maxime eaque eum possimus minus quos, deleniti, consequuntur iusto
            quaerat sunt suscipit sed iure accusamus, in modi beatae voluptatem. Soluta commodi hic nihil nisi.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate molestiae! Laboriosam
            excepturi exercitationem ipsa illum maxime eaque eum possimus minus quos, deleniti, consequuntur iusto
            quaerat sunt suscipit sed iure accusamus, in modi beatae voluptatem. Soluta commodi hic nihil nisi.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate molestiae! Laboriosam
            excepturi exercitationem ipsa illum maxime eaque eum possimus minus quos, deleniti, consequuntur iusto
            quaerat sunt suscipit sed iure accusamus, in modi beatae voluptatem. Soluta commodi hic nihil nisi.
          </p>
        </div>
      </section>
      <Section title="Related Products">
        <RelatedProducts category={productCategory} count={4} orderByRating={true} withoutProduct={product} />
      </Section>
    </>
  )
}
