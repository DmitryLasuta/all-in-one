import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'

import { Container } from '@/components/common'
import { ProductCard } from '@/components/cards'
import { getAllProducts } from '@/lib/services/dataBase'

export default async function AboutPage() {
  const products = await getAllProducts({ limit: 4, orderByRating: true })
  return (
    <main>
      <Container>
        <h1 className="text-4xl font-bold mb-4">About Our Online Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <p className="text-lg mb-4">
              Welcome to our online store! At All In One, we are passionate about providing a seamless shopping
              experience and high-quality products for our customers.
            </p>
            <p className="text-lg mb-4">
              Our team is dedicated to curating a selection of the latest and greatest products across various
              categories. Whether you are looking for fashion, electronics, home goods, or more, we have got you
              covered.
            </p>
            <div className="flex items-center mb-4">
              <FaUser className="mr-2" />
              <span>John Doe - Founder</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
          </div>
          {/* Замените на контент, связанный с вашим магазином */}
          <div className="w-full">
            <p className="text-xl text-center font-bold">
              Explore our latest products and enjoy secure online shopping!
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
