import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '@/lib/types'
import { createSlice } from '@reduxjs/toolkit'

export interface Cart {
  items: Record<Product['id'], number>
  total: {
    price: number
    count: number
  }
}

const initialState: Cart = {
  items: {},
  total: {
    count: 0,
    price: 0,
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: ({ items, total }, { payload }: PayloadAction<Product>) => {
      const { id } = payload
      if (items[id]) {
        items[id] += 1
      } else {
        items[id] = 1
      }
      total.price += Number(payload.price)
      total.count += 1
    },

    removeFromCart: ({ items, total }, { payload }: PayloadAction<Product>) => {
      delete items[payload.id]
      total.price -= Number(payload.price)
      total.count -= 1
    },

    clearCart: () => {
      return initialState
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
