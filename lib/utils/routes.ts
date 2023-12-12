import type { Category } from '@/lib/types'
import { PRODUCTS_SEARCH_PARAMS } from '@/lib/utils'

export const routes = {
  home: '/',
  products: {
    list: '/products',
    withParams: ({ category = 'all', page = 1 }: { category?: Category['name']; page?: number }) =>
      `/products?${PRODUCTS_SEARCH_PARAMS.category}=${category}&${PRODUCTS_SEARCH_PARAMS.page}=${page}`,

    details: (id: string | number, category: Category['name']) => `/products/${category}/${id}`,
  },
  about: '/about',
  cart: '/cart',
  privacy: '/privacy',
}
