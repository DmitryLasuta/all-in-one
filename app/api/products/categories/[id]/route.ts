import { Category } from '@/app/api/products/categories/route'
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(_: Request, context: { params: { id: Category['id'] } }) {
  try {
    const { rows } =
      await sql<Category>`SELECT * FROM categories WHERE id = ${context.params.id}`
    return NextResponse.json(rows.at(0))
  } catch (error) {
    console.error(error)
    return NextResponse.json([])
  }
}
