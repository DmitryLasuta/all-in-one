import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '@/lib/types'
import { createSlice } from '@reduxjs/toolkit'

export interface Cart {
  items: Record<Product['id'], number>
  total: {
    price: number
    amount: number
  }
}

const initialState: Cart = {
  items: {
    1: 2,
    2: 2,
    3: 2,
    10: 10,
  },
  total: {
    amount: 16,
    price: 1466.48,
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: ({ items, total }, { payload: { id, price } }: PayloadAction<Product>) => {
      if (items[id]) {
        items[id] += 1
      } else {
        items[id] = 1
      }
      total.price += parseFloat(Number(price).toFixed(2))
      total.amount += 1
    },

    removeFromCart: ({ items, total }, { payload: { id, price } }: PayloadAction<Product>) => {
      total.amount -= items[id]
      total.price -= price * items[id]
      items[id] = 0
      delete items[id]

      const fixedPrice = +total.price.toFixed(2)
      total.price = fixedPrice
    },

    clearCart: () => {
      return initialState
    },

    increaseQuantity: ({ items, total }, { payload: { id, price } }: PayloadAction<Product>) => {
      items[id] += 1
      total.amount += 1
      total.price += Number(price)
      const fixedPrice = +total.price.toFixed(2)
      total.price = fixedPrice
    },

    decreaseQuantity: ({ items, total }, { payload: { id, price } }: PayloadAction<Product>) => {
      if (items[id] > 1) {
        items[id] -= 1
        total.amount -= 1
        total.price -= Number(price)
      } else {
        total.amount -= items[id]
        total.price -= price * items[id]
        items[id] = 0
        delete items[id]
      }
      // correct price
      const fixedPrice = +total.price.toFixed(2)
      total.price = fixedPrice
    },
  },
})

export const { addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } = cartSlice.actions
export default cartSlice.reducer
