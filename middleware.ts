import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routes } from './lib/utils'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const currentRoute = request.nextUrl.href

  const productsUrl = new URL(routes.products.list, request.url)
  if (currentRoute == productsUrl.toString()) {
    const urlWithParams = new URL(routes.products.withParams({ page: 1, category: 'all' }), request.url)
    return NextResponse.redirect(urlWithParams)
  }

  return response
}
