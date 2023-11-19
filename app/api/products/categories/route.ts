import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export type Category = {
  id: number
  name: string
  image: string
}

export async function GET() {
  try {
    const { rows } = await sql<Category>`SELECT * FROM categories`
    return NextResponse.json(rows)
  } catch (error) {
    throw error
  }
}
