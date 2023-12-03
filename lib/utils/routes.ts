import type { Category } from '../types'

export const routes = {
  home: '/',
  products: (category: Category['name'] = 'all') => `/products?category=${category}`,
  about: '/about',
  faq: '/faq',
  privacy: '/privacy',
}
