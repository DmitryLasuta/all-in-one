import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import type { Product } from '@/app/api/products/route'

export async function GET(_: NextRequest, context: { params: { id: Product['id'] } }) {
  try {
    const { rows } = await sql<Product>`
      SELECT * FROM products
      WHERE id = ${context.params.id}`
    return NextResponse.json(rows.at(0))
  } catch (error) {
    console.error(error)
    return NextResponse.json([])
  }
}
