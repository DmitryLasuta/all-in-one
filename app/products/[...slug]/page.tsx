import { Button, Container, Section } from '@/components/ui/common'

import { Breadcrumbs } from '@/components'
import { DatabaseService } from '@/lib/services'
import Image from 'next/image'
import { ProductCardSkeletonGroup } from '@/components/ui'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { routes } from '@/lib/utils'

const RelatedProducts = dynamic(() => import('@/components/ui/ProductList'), {
  loading: () => <ProductCardSkeletonGroup count={8} />,
})

export default async function ProductPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const [category, id] = slug

  const product = await new DatabaseService().getProductById(Number(id))
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
            className="inline-block max-h-[400px] object-contain  bg-[white] rounded p-10 flex-1"
            src={image}
            alt={title}
            width={700}
            height={300}
          />
          <div className="text-left border-2 flex-1 w-full rounded h-fit px-2 py-4">
            <p className="mb-2">
              Rating: <span className="font-bold">{rating.rate}</span>
            </p>
            <p className="mb-2">Price: {price}$</p>
            <p className="mb-2">In stock: {rating.count}</p>
            <Button font="bold">Add to cart</Button>
          </div>
        </div>
        <figcaption className="border-y-2 py-8">
          <div className="lg:max-w-[90%] lg:mx-auto">
            <h1 className="text-3xl text-center font-bold mb-4">{title}</h1>
            <p className={`first-letter:uppercase text-justify text-lg`}>{description}</p>
          </div>
        </figcaption>
      </figure>
      <Section title="Related Products">
        <RelatedProducts category={productCategory} count={4} orderByRating={true} withoutProduct={product} />
      </Section>
    </>
  )
}
