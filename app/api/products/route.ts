import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import type { Category } from '@/app/api/products/categories/route'

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: Pick<Category, 'name'>
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl

    const limit = searchParams.get('limit')
    const offset = searchParams.get('offset') ?? 0
    const category = searchParams.get('category')

    if (category) {
      const { rows } = await sql<Product>`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
        FROM products WHERE category = ${category}`
      return NextResponse.json(rows)
    } else {
      const { rows } = await sql<Product>`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
        LIMIT ${limit}
        OFFSET ${offset}`

      return NextResponse.json(rows)
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json([])
  }
}
