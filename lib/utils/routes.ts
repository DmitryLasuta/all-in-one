import type { Category } from '@/lib/types'
import { PRODUCTS_SEARCH_PARAMS } from '@/lib/utils'

export const routes = {
  home: '/',
  products: (category: Category['name'] = 'all', page = 1) =>
    `/products?${PRODUCTS_SEARCH_PARAMS.category}=${category}&${PRODUCTS_SEARCH_PARAMS.page}=${page}`,
  about: '/about',
  faq: '/faq',
  privacy: '/privacy',
}
