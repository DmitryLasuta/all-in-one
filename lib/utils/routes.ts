export const routes = {
  home: '/',
  products: (category: string = 'all') => `/products?category=${category}`,
  about: '/about',
  faq: '/faq',
  privacy: '/privacy',
}
